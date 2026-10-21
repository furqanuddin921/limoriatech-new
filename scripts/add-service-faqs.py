import json
import os

with open('src/data/services.json', 'r', encoding='utf-8') as f:
    services = json.load(f)

# Tailored FAQs per service
faqs_data = {
    "website-applications": [
        {
            "question": {
                "id": "Berapa lama estimasi pengerjaan proyek aplikasi website di Limoria Tech?",
                "en": "How long does a web application project take at Limoria Tech?"
            },
            "answer": {
                "id": "Estimasi waktu pengerjaan berkisar antara 4 hingga 12 minggu, tergantung pada skala kompleksitas sistem, jumlah modul bisnis, dan integrasi API pihak ketiga. Kami menggunakan metodologi Agile Scrum dengan sprint berkala agar Anda dapat memantau perkembangan sistem setiap minggunya.",
                "en": "Project timelines typically range from 4 to 12 weeks depending on system complexity, module scope, and third-party API integrations. We implement Agile Scrum sprints ensuring transparent weekly progress tracking."
            }
        },
        {
            "question": {
                "id": "Teknologi apa saja yang digunakan dalam pengembangan aplikasi web?",
                "en": "What tech stack is utilized for web application development?"
            },
            "answer": {
                "id": "Kami menggunakan teknologi modern berstandar enterprise seperti Next.js, React, Node.js, TypeScript, PostgreSQL/MySQL, Tailwind CSS, serta arsitektur cloud terisolasi (AWS/GCP/Docker) untuk menjamin kecepatan, keamanan tinggi, dan kemudahan skalabilitas.",
                "en": "We build with modern enterprise stacks including Next.js, React, Node.js, TypeScript, PostgreSQL/MySQL, Tailwind CSS, and cloud containerization (AWS/GCP/Docker) for blazing speed, robust security, and seamless scalability."
            }
        },
        {
            "question": {
                "id": "Apakah Limoria Tech menyediakan dukungan pemeliharaan (maintenance) pasca-rilis?",
                "en": "Does Limoria Tech provide post-launch maintenance and support?"
            },
            "answer": {
                "id": "Tentu. Setiap proyek mencakup masa garansi pemeliharaan sistem serta paket Service Level Agreement (SLA) fleksibel untuk pembaruan keamanan, monitoring uptime 24/7, dan optimasi performa berkala.",
                "en": "Yes. Every delivery includes a post-launch warranty period alongside optional Service Level Agreement (SLA) packages covering 24/7 monitoring, security patches, and periodic performance tuning."
            }
        }
    ],
    "mobile-applications": [
        {
            "question": {
                "id": "Apakah aplikasi mobile yang dikembangkan mendukung platform Android dan iOS sekaligus?",
                "en": "Does your mobile application development support both Android and iOS?"
            },
            "answer": {
                "id": "Ya, kami dapat mengembangkan aplikasi secara cross-platform (menggunakan Flutter atau React Native) yang hemat biaya dan berperforma native, maupun fully native (Kotlin & Swift) sesuai preferensi arsitektur dan kebutuhan performa perusahaan Anda.",
                "en": "Yes, we build cost-effective, near-native cross-platform apps using Flutter or React Native, as well as fully native solutions (Kotlin & Swift) tailored to your architecture requirements."
            }
        },
        {
            "question": {
                "id": "Apakah Limoria Tech mendampingi proses publikasi ke App Store dan Play Store?",
                "en": "Does Limoria Tech assist with Google Play and Apple App Store publishing?"
            },
            "answer": {
                "id": "Ya, tim kami mengelola seluruh tahapan penyiapan aset, kepatuhan kebijakan privasi, pendaftaran konsol developer, hingga aplikasi berhasil lolos review dan tayang di Google Play Store dan Apple App Store.",
                "en": "Yes, our team manages end-to-end publishing, store policy compliance, release assets, and developer account setup until your application is approved on Google Play and Apple App Store."
            }
        },
        {
            "question": {
                "id": "Bagaimana proteksi keamanan data pengguna pada aplikasi mobile?",
                "en": "How is user data security protected within mobile applications?"
            },
            "answer": {
                "id": "Kami menerapkan enkripsi end-to-end (SSL/TLS pinning), autentikasi biometrik (Fingerprint/FaceID), token JWT yang aman, enkripsi database lokal (SQLite/Realm), serta pencegahan reverse-engineering aplikasi.",
                "en": "We enforce end-to-end encryption (SSL/TLS pinning), biometric authentication, secure JWT rotation, encrypted local databases, and code obfuscation against reverse-engineering."
            }
        }
    ],
    "desktop-applications": [
        {
            "question": {
                "id": "Kapan perusahaan sebaiknya memilih aplikasi desktop dibandingkan aplikasi web?",
                "en": "When should an enterprise choose a desktop app over a web app?"
            },
            "answer": {
                "id": "Aplikasi desktop sangat ideal untuk sistem operasional offline-first, pemrosesan komputasi berat, integrasi langsung dengan hardware lokal (mesin POS, barcode scanner, timbangan digital), atau sistem dengan standar keamanan lokal yang sangat ketat.",
                "en": "Desktop applications are ideal for offline-first workflows, compute-heavy tasks, direct hardware peripherals integration (POS terminals, barcode scanners), and air-gapped intranet environments."
            }
        },
        {
            "question": {
                "id": "Apakah aplikasi desktop dapat disinkronkan secara otomatis ke cloud database?",
                "en": "Can desktop applications sync automatically with cloud databases?"
            },
            "answer": {
                "id": "Ya, kami merancang arsitektur sinkronisasi dua arah yang cerdas (smart offline-online sync) sehingga data tetap tersimpan saat koneksi terputus dan langsung tersinkronisasi saat internet kembali aktif.",
                "en": "Yes, we architect intelligent bi-directional sync engines allowing seamless offline storage that reconciles automatically when internet connectivity resumes."
            }
        }
    ],
    "transformasi-digital": [
        {
            "question": {
                "id": "Bagaimana langkah awal konsultasi transformasi digital bersama Limoria Tech?",
                "en": "How does the digital transformation consulting process begin?"
            },
            "answer": {
                "id": "Kami memulai dengan sesi Digital Readiness Audit untuk memetakan alur bisnis eksisting, mengidentifikasi bottlenecks operasional, dan menyusun roadmap implementasi terukur yang memprioritaskan efisiensi biaya dan ROI tercepat.",
                "en": "We begin with a Digital Readiness Audit assessing current operations, identifying workflow bottlenecks, and structuring a phased roadmap prioritizing high ROI and cost efficiency."
            }
        },
        {
            "question": {
                "id": "Apakah proses transformasi digital akan mengganggu operasional sistem yang sedang berjalan?",
                "en": "Will digital transformation disrupt current business operations?"
            },
            "answer": {
                "id": "Tidak. Kami menerapkan strategi migrasi bertahap (phased migration) dengan sistem paralel dan rollback failsafe untuk memastikan kelancaran operasional harian perusahaan tanpa gangguan (zero downtime).",
                "en": "No. We adopt phased migration strategies with parallel runtimes and strict rollback failsafes to maintain uninterrupted business operations with zero downtime."
            }
        }
    ],
    "solusi-it-inovatif": [
        {
            "question": {
                "id": "Model kerja sama apa saja yang disediakan oleh Limoria Tech?",
                "en": "What engagement models are available at Limoria Tech?"
            },
            "answer": {
                "id": "Kami menawarkan model Project-Based (berdasarkan cakupan deliverables yang jelas), Time & Material, serta Dedicated Engineering Team yang bertindak sebagai perpanjangan tim teknologi internal perusahaan Anda.",
                "en": "We offer Fixed Project-Based contracts, Time & Material engagements, and Dedicated Engineering Teams acting as a seamless extension of your internal technology department."
            }
        },
        {
            "question": {
                "id": "Apakah kerahasiaan ide dan data arsitektur sistem kami terjamin?",
                "en": "Is our intellectual property and proprietary data protected?"
            },
            "answer": {
                "id": "Ya, kami menjunjung tinggi integritas profesional dengan menandatangani Non-Disclosure Agreement (NDA) resmi yang mengikat secara hukum sebelum diskusi teknis atau analisis data dimulai.",
                "en": "Yes, we uphold the highest professional standards by executing legally binding Non-Disclosure Agreements (NDA) before any sensitive discussions or data analysis commence."
            }
        }
    ],
    "business-research": [
        {
            "question": {
                "id": "Apa output utama dari layanan Riset Bisnis Limoria Tech?",
                "en": "What are the primary deliverables of Business Research services?"
            },
            "answer": {
                "id": "Output mencakup Laporan Analisis Lanskap Industri, Peta Kompetitor, Matriks Penilaian Risiko & Mitigasi, serta Dokumen Rekomendasi Strategis Eksekutif yang siap dipresentasikan kepada dewan direksi.",
                "en": "Deliverables include Industry Landscape Reports, Competitor Benchmark Matrices, Operational Risk Assessments, and Executive Strategic Action Plans ready for board presentation."
            }
        }
    ],
    "strategic-planning": [
        {
            "question": {
                "id": "Berapa lama horizon perencanaan strategis yang disusun?",
                "en": "What is the time horizon for corporate strategic planning?"
            },
            "answer": {
                "id": "Kami menyusun rencana strategis untuk horizon jangka menengah (1-3 tahun) dan jangka panjang (3-5 tahun) yang terbagi dalam milestone kuartalan dengan KPI dan OKR terukur.",
                "en": "We design strategic plans for medium (1-3 years) and long-term (3-5 years) horizons, decomposed into quarterly actionable milestones with measurable KPIs and OKRs."
            }
        }
    ],
    "market-analysis": [
        {
            "question": {
                "id": "Metodologi apa yang digunakan dalam analisis pasar?",
                "en": "What methodologies are employed in market analysis?"
            },
            "answer": {
                "id": "Kami mengombinasikan riset data primer (wawancara mendalam, survei target audiens) dan riset sekunder berbasis analitik data makro, tren regulasi, serta analisis pergerakan kompetitor industri.",
                "en": "We combine primary research (in-depth stakeholder interviews, targeted surveys) with secondary data analytics evaluating macroeconomic shifts and competitor positioning."
            }
        }
    ],
    "accounting": [
        {
            "question": {
                "id": "Standar akuntansi apa yang menjadi acuan laporan keuangan di Limoria Tech?",
                "en": "Which accounting standards govern Limoria Tech's financial reporting?"
            },
            "answer": {
                "id": "Seluruh penyusunan dan penelaahan laporan keuangan mengacu pada Standar Akuntansi Keuangan (SAK / PSAK) yang berlaku di Indonesia serta standar IFRS untuk korporasi multinasional.",
                "en": "All financial statements and reviews adhere strictly to Indonesian Financial Accounting Standards (PSAK / SAK) and IFRS for multinational reporting compliance."
            }
        },
        {
            "question": {
                "id": "Apakah Limoria Tech dapat merapikan pembukuan perusahaan yang tertinggal beberapa tahun?",
                "en": "Can Limoria Tech reconstruct backlogged financial bookkeeping across multiple periods?"
            },
            "answer": {
                "id": "Ya, kami memiliki tim spesialis restrukturisasi pembukuan untuk merekonstruksi mutasi transaksi, rekonsiliasi perbankan, dan menata ulang jurnal hingga menghasilkan laporan keuangan yang siap diaudit.",
                "en": "Yes, our bookkeeping reconstruction team reconciles multi-period bank statements, restructures general ledgers, and prepares clean, audit-ready financial statements."
            }
        }
    ],
    "tax": [
        {
            "question": {
                "id": "Layanan kepatuhan pajak apa saja yang ditangani oleh konsultan Limoria Tech?",
                "en": "What tax compliance services are handled by Limoria Tech consultants?"
            },
            "answer": {
                "id": "Kami menangani kepatuhan pajak bulanan (PPh 21, 23, 25, 4 ayat 2, dan PPN), ekualisasi pajak, penyusunan SPT Tahunan Badan & Orang Pribadi, serta pendampingan menghadapi SP2DK dan pemeriksaan pajak.",
                "en": "We handle monthly tax filings (PPh 21, 23, 25, final tax, VAT), tax equalization, Corporate Annual Tax Returns (SPT Badan), and tax audit representation."
            }
        },
        {
            "question": {
                "id": "Apakah konsultan pajak Limoria Tech tersertifikasi resmi?",
                "en": "Are Limoria Tech tax consultants officially certified?"
            },
            "answer": {
                "id": "Ya, konsultan kami memiliki sertifikasi resmi Brevet Pajak dan terdaftar di Ikatan Konsultan Pajak Indonesia (IKPI), menjamin keabsahan dan kepatuhan hukum dari setiap advis perpajakan yang diberikan.",
                "en": "Yes, our tax advisors hold official certifications and active registrations ensuring regulatory compliance and legal rigor for every tax opinion issued."
            }
        }
    ],
    "audit": [
        {
            "question": {
                "id": "Apa manfaat audit laporan keuangan independen bagi perusahaan?",
                "en": "What are the core benefits of independent financial audits for enterprises?"
            },
            "answer": {
                "id": "Audit independen meningkatkan kredibilitas laporan keuangan di mata pemegang saham, investor, perbankan, dan regulator, serta mengidentifikasi celah kelemahan pengendalian internal perusahaan.",
                "en": "Independent audits reinforce financial statement credibility for stakeholders, investors, lenders, and regulators while uncovering internal control vulnerabilities."
            }
        }
    ],
    "digital-platform": [
        {
            "question": {
                "id": "Bagaimana integrasi platform keuangan digital dengan sistem akuntansi eksisting?",
                "en": "How does digital financial platform integration connect with existing ERP/accounting?"
            },
            "answer": {
                "id": "Kami membangun integrasi berbasis API yang aman (RESTful / GraphQL) ke software akuntansi populer (SAP, Oracle, Odoo, Jurnal, Accurate) untuk sinkronisasi transaksi real-time secara otomatis.",
                "en": "We develop secure API middleware (RESTful / GraphQL) integrating seamlessly with major ERPs (SAP, Oracle, Odoo, Accurate) for automated real-time transaction reconciliation."
            }
        }
    ],
    "investigation": [
        {
            "question": {
                "id": "Kapan perusahaan memerlukan layanan investigasi forensik keuangan?",
                "en": "When should an enterprise engage forensic financial investigation services?"
            },
            "answer": {
                "id": "Layanan ini dibutuhkan ketika terdapat indikasi kecurangan (fraud), penggelapan aset, penyimpangan pengadaan, atau sengketa keuangan yang membutuhkan bukti audit forensik yang valid secara hukum.",
                "en": "Forensic investigations are critical when addressing suspected fraud, asset misappropriation, procurement irregularities, or legal financial disputes requiring court-admissible evidence."
            }
        }
    ],
    "litigation": [
        {
            "question": {
                "id": "Bagaimana peran Limoria Tech dalam proses litigasi keuangan?",
                "en": "What role does Limoria Tech play in financial litigation proceedings?"
            },
            "answer": {
                "id": "Kami bertindak sebagai ahli keuangan independen untuk menghitung kerugian materiil, menyiapkan laporan analisis ahli, serta memberikan keterangan ahli di hadapan pengadilan atau arbitrase.",
                "en": "We serve as independent financial expert witnesses, calculating economic damages, preparing comprehensive expert reports, and delivering testimony in court or arbitration."
            }
        }
    ],
    "liquidator": [
        {
            "question": {
                "id": "Apa saja tanggung jawab likuidator dalam pembubaran perseroan?",
                "en": "What are a liquidator's core responsibilities in corporate dissolution?"
            },
            "answer": {
                "id": "Likuidator bertugas mencatat dan membereskan seluruh aset perseroan, menyelesaikan kewajiban kepada kreditur dan pajak, membagikan sisa kekayaan kepada pemegang saham, serta mengumumkan pembubaran resmi sesuai UU PT.",
                "en": "The liquidator inventories corporate assets, settles creditor and tax obligations, distributes residual capital to shareholders, and publishes formal legal dissolution notices."
            }
        }
    ],
    "curator": [
        {
            "question": {
                "id": "Apa perbedaan peran kurator dalam kepailitan dan pengurus dalam PKPU?",
                "en": "What is the difference between a bankruptcy curator and a PKPU administrator?"
            },
            "answer": {
                "id": "Pengurus mendampingi debitur menyusun rencana perdamaian restrukturisasi utang dalam proses PKPU, sedangkan kurator bertugas mengurus dan membereskan harta pailit debitur setelah putusan pailit berkekuatan hukum tetap.",
                "en": "Administrators assist debtors in restructuring debt settlement plans during PKPU, while curators manage and liquidate bankruptcy estates following final court rulings."
            }
        }
    ],
    "appraisal": [
        {
            "question": {
                "id": "Aset apa saja yang dapat dinilai dalam layanan Penilaian & Valuasi Aset?",
                "en": "What types of assets can be assessed under Asset Valuation services?"
            },
            "answer": {
                "id": "Kami melayani penilaian aset berwujud (properti komersial, tanah, pabrik, mesin industri) maupun aset tidak berwujud (brand, hak paten, software proprietary, dan valuasi ekuitas saham perusahaan).",
                "en": "We evaluate tangible assets (commercial properties, plants, heavy machinery) and intangible assets (trademarks, proprietary software, and corporate equity valuation)."
            }
        }
    ],
    "actuarial": [
        {
            "question": {
                "id": "Mengapa perusahaan memerlukan perhitungan aktuaria imbalan pasca-kerja (PSAK 24)?",
                "en": "Why do corporations require actuarial valuations under PSAK 24 / IAS 19?"
            },
            "answer": {
                "id": "Perhitungan aktuaria wajib dilakukan untuk menghitung estimasi kewajiban liabilitas imbalan kerja (pesangon pensiun dan penghargaan masa kerja) sesuai ketentuan ketenagakerjaan dan standar akuntansi keuangan yang berlaku.",
                "en": "Actuarial computations are mandatory to determine post-employment liabilities (severance pay and long-service awards) in full compliance with labor laws and PSAK 24 / IAS 19 standards."
            }
        }
    ],
    "merger": [
        {
            "question": {
                "id": "Bagaimana Limoria Tech mendampingi proses merger antar perusahaan?",
                "en": "How does Limoria Tech advise corporate mergers?"
            },
            "answer": {
                "id": "Kami melakukan Financial & Tax Due Diligence komprehensif, evaluasi struktur rasio penggabungan saham, mitigasi risiko liabilitas tersembunyi, hingga perencanaan integrasi sistem pasca-merger.",
                "en": "We perform comprehensive Financial & Tax Due Diligence, share exchange ratio valuations, hidden liability risk mitigation, and post-merger integration planning."
            }
        }
    ],
    "acquisition": [
        {
            "question": {
                "id": "Langkah apa yang paling krusial dalam proses akuisisi perusahaan?",
                "en": "What is the most critical phase during corporate acquisitions?"
            },
            "answer": {
                "id": "Tahapan uji tuntas (due diligence) yang mendalam dan penentuan valuasi wajar adalah kunci utama untuk melindungi investor dari potensi risiko hukum, kewajiban pajak tersembunyi, serta memastikan sinergi nilai bisnis.",
                "en": "Rigorous financial due diligence and fair enterprise valuation are paramount to shield acquirers from undisclosed liabilities while validating strategic synergy."
            }
        }
    ]
}

# Attach faqs to services
updated_count = 0
for s in services:
    slug = s.get("slug")
    if slug in faqs_data:
        s["faqs"] = faqs_data[slug]
        updated_count += 1

with open('src/data/services.json', 'w', encoding='utf-8') as f:
    json.dump(services, f, indent=2, ensure_ascii=False)

print(f"Successfully attached FAQs to {updated_count} services in src/data/services.json")
