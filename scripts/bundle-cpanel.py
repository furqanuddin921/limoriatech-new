import os
import sys
import zipfile
import shutil
import datetime

def fix_windows_rsc_segment_cache(out_dir):
    """
    On Windows builds, Next.js 16 creates nested directories for RSC segment payloads
    like 'contact/__next.contact/__PAGE__.txt' instead of flat files like
    'contact/__next.contact.__PAGE__.txt' due to Windows backslash path separators (Issue #85374).
    This function duplicates nested files to flat dot-notated filenames so browser RSC prefetch requests resolve with 200 OK.
    """
    count = 0
    for root, dirs, files in os.walk(out_dir):
        for d in list(dirs):
            if d.startswith("__next."):
                d_full = os.path.join(root, d)
                for sub_root, _, sub_files in os.walk(d_full):
                    for f in sub_files:
                        src_path = os.path.join(sub_root, f)
                        rel_to_root = os.path.relpath(src_path, root)
                        flat_name = rel_to_root.replace("\\", ".").replace("/", ".")
                        flat_path = os.path.join(root, flat_name)
                        if not os.path.exists(flat_path):
                            shutil.copy2(src_path, flat_path)
                            count += 1
    if count > 0:
        print(f"Fixed {count} Windows RSC segment cache path(s) -> created flat dot-notated files.")

def bundle():
    out_dir = os.path.abspath("out")
    output_zip = os.path.abspath("deploy-cpanel.zip")

    if not os.path.exists(out_dir):
        print(f"Error: Directory '{out_dir}' does not exist. Run 'npm run build' first.")
        sys.exit(1)

    # 1. Fix Windows RSC cache paths before zipping
    fix_windows_rsc_segment_cache(out_dir)

    print(f"Bundling '{out_dir}' into '{output_zip}' with Unix permissions (755 dir, 644 file)...")

    if os.path.exists(output_zip):
        try:
            os.remove(output_zip)
        except Exception as e:
            print(f"Warning: Could not remove old zip: {e}")

    with zipfile.ZipFile(output_zip, "w", zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(out_dir):
            # Sort for deterministic archive
            dirs.sort()
            files.sort()

            rel_root = os.path.relpath(root, out_dir).replace("\\", "/")

            if rel_root != ".":
                dir_path = rel_root + "/"
                zi = zipfile.ZipInfo(dir_path)
                zi.create_system = 3  # Unix
                zi.external_attr = (0o755 << 16) | 0x10  # drwxr-xr-x + directory flag
                zf.writestr(zi, "")

            for f in files:
                abs_file = os.path.join(root, f)
                rel_file = os.path.relpath(abs_file, out_dir).replace("\\", "/")
                
                zi = zipfile.ZipInfo(rel_file)
                zi.create_system = 3  # Unix
                zi.external_attr = (0o644 << 16)  # -rw-r--r--
                
                mtime = os.path.getmtime(abs_file)
                dt = datetime.datetime.fromtimestamp(mtime)
                zi.date_time = (dt.year, dt.month, dt.day, dt.hour, dt.minute, dt.second)

                with open(abs_file, "rb") as fp:
                    zf.writestr(zi, fp.read())

    zip_size_mb = os.path.getsize(output_zip) / (1024 * 1024)
    print(f"Success! Created '{output_zip}' ({zip_size_mb:.2f} MB) with POSIX 755/644 permissions.")

if __name__ == "__main__":
    bundle()
