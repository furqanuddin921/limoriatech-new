# Verify deployment bundle for Limoria Tech
$zipPath = "deploy-cpanel.zip"
$outDir = "out"

Write-Host "=== Memeriksa Bundle Deployment Limoria Tech ===" -ForegroundColor Cyan

if (-not (Test-Path $outDir)) {
    Write-Host "[GAGAL] Folder 'out/' tidak ditemukan. Silakan jalankan 'npm run build' terlebih dahulu." -ForegroundColor Red
    exit 1
}

$requiredFiles = @(
    "$outDir/index.html",
    "$outDir/about/index.html",
    "$outDir/services/index.html",
    "$outDir/portfolio/index.html",
    "$outDir/contact/index.html",
    "$outDir/.htaccess",
    "$outDir/api/contact.php",
    "$outDir/sitemap.xml",
    "$outDir/robots.txt"
)

$missing = 0
foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "[OK] $file ditemukan" -ForegroundColor Green
    } else {
        Write-Host "[HILANG] $file TIDAK DITEMUKAN!" -ForegroundColor Red
        $missing++
    }
}

if (Test-Path $zipPath) {
    $zipItem = Get-Item $zipPath
    $sizeKb = [math]::Round($zipItem.Length / 1024, 2)
    Write-Host "[OK] $zipPath siap di-upload ($sizeKb KB)" -ForegroundColor Green
} else {
    Write-Host "[PERINGATAN] $zipPath belum dibuat. Jalankan 'npm run bundle:cpanel'" -ForegroundColor Yellow
}

if ($missing -eq 0) {
    Write-Host "=== Verifikasi Sukses: Bundle Siap Upload ke cPanel Rumahweb! ===" -ForegroundColor Cyan
} else {
    Write-Host "=== Verifikasi Gagal: Ada $missing file yang belum lengkap ===" -ForegroundColor Red
}
