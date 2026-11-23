import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Phone, Mail, MapPin, Send, CheckCircle2, Sparkles } from "lucide-react";

function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", contact: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const channelIcons = [
    <Phone className="w-4 h-4 text-orange-400" />,
    <Mail className="w-4 h-4 text-orange-400" />,
    <MapPin className="w-4 h-4 text-orange-400" />,
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", contact: "", message: "" });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-28 px-6 md:px-12 bg-[#090a0c] border-t border-white/[0.06] flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Chap ustun: Concierge ma'lumotlari */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 w-fit mb-4">
              <Sparkles className="w-3 h-3 text-orange-400" />
              <span className="text-[10px] tracking-[0.2em] font-mono font-bold text-white/70 uppercase">
                {t.contact.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
              {t.contact.title}
            </h2>

            <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-10 max-w-md">
              {t.contact.subtitle}
            </p>

            {/* 3 ta Aloqa Kanali Plitkasi */}
            <div className="space-y-4">
              {t.contact.channels.map((ch, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    {channelIcons[i]}
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-0.5">
                      {ch.title}
                    </h4>
                    <p className="text-sm font-semibold text-white tracking-wide">
                      {ch.value}
                    </p>
                    <p className="text-[11px] text-white/40 mt-0.5">{ch.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* O'ng ustun: Aloqa Formasi */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl shadow-2xl relative">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {t.contact.formTitle}
                </h3>
                <span className="text-xs text-white/40 font-mono">
                  Guaranteed response within 15 minutes
                </span>
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Murojaatingiz qabul qilindi!
                  </h4>
                  <p className="text-xs text-white/60 max-w-sm">
                    {t.contact.submitted}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-white/60 mb-2">
                        {t.contact.nameLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder={t.contact.namePlaceholder}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-white/60 mb-2">
                        {t.contact.contactLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) =>
                          setFormData({ ...formData, contact: e.target.value })
                        }
                        placeholder={t.contact.contactPlaceholder}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/60 mb-2">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-white/90 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-xl active:scale-95 mt-4"
                  >
                    <span>{t.contact.submitBtn}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
