"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "IT Consultancy & Architecture",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success !== false) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "IT Consultancy & Architecture",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(
          result.message || "Gagal mengirim pesan. Silakan hubungi kami via WhatsApp atau Email langsung."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Koneksi terganggu. Silakan hubungi kami melalui WhatsApp atau email resmi kami."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === "success" && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold block">
              {t("contact.successTitle", "Pesan Berhasil Terkirim!")}
            </strong>
            <span>
              {t(
                "contact.successDesc",
                "Terima kasih atas minat Anda. Tim konsultan Limoria Tech akan segera menghubungi Anda."
              )}
            </span>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold block">
              {t("contact.errorTitle", "Pengiriman Terkendala")}
            </strong>
            <span>{errorMessage}</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label={t("contact.fullName", "Nama Lengkap *")}
          placeholder="Contoh: Budi Santoso"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          label={t("contact.emailLabel", "Email Perusahaan / Pribadi *")}
          type="email"
          placeholder="budi@perusahaan.com"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label={t("contact.phoneLabel", "Nomor Telepon / WhatsApp *")}
          placeholder="08123456789"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <Input
          label={t("contact.companyLabel", "Nama Perusahaan / Organisasi")}
          placeholder="PT Maju Bersama"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          {t("contact.serviceLabel", "Layanan yang Diminati")}
        </label>
        <select
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        >
          <optgroup label="Tech Services">
            <option value="Business Research">Business Research</option>
            <option value="Strategic Planning">Strategic Planning</option>
            <option value="Market Analysis">Market Analysis</option>
            <option value="Website Applications">Website & Web Application</option>
            <option value="Mobile Applications">Mobile Application (Android & iOS)</option>
            <option value="Desktop Applications">Desktop Application</option>
            <option value="Solusi IT Inovatif">Solusi IT Inovatif</option>
            <option value="Transformasi Digital">Transformasi Digital & API</option>
          </optgroup>
          <optgroup label="Digital Financial Services">
            <option value="Accounting & Financial Statement">Accounting & Financial Statement</option>
            <option value="Corporate Tax Planning">Corporate Tax Planning & Filing</option>
            <option value="Financial Audit & Assurance">Independent Financial Audit</option>
            <option value="Forensic Investigation">Forensic Investigation & Fraud Audit</option>
            <option value="Litigation Support">Litigation Support & Expert Witness</option>
            <option value="Liquidator Services">Corporate Liquidator & Winding-Up</option>
            <option value="Digital Financial Platform">Digital Financial Platform & ERP</option>
            <option value="Asset Appraisal & Valuation">Asset Appraisal & Business Valuation</option>
            <option value="Actuarial PSAK 24">Actuarial Valuation (PSAK 24)</option>
            <option value="Merger & Acquisition Advisory">Merger & Acquisition (M&A)</option>
          </optgroup>
        </select>
      </div>

      <Textarea
        label={t("contact.msgLabel", "Deskripsi Kebutuhan atau Tantangan *")}
        placeholder="Ceritakan gambaran singkat kebutuhan sistem, skala proyek, atau target waktu yang Anda rencanakan..."
        rows={4}
        required
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />

      <div className="pt-2">
        <Button
          type="submit"
          size="lg"
          variant="primary"
          loading={status === "loading"}
          className="w-full justify-center"
        >
          <Send className="w-4 h-4" />
          <span>{t("contact.sendBtn", "Kirim Permintaan Konsultasi")}</span>
        </Button>
      </div>
    </form>
  );
}
