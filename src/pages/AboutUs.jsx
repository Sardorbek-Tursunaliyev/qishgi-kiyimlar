import { useLanguage } from "../context/LanguageContext";
import { Flame, Shield, Compass, Sparkles, CheckCircle2 } from "lucide-react";

function AboutUs() {
  const { t } = useLanguage();

  const featureIcons = [
    <Flame className="w-5 h-5 text-orange-400" />,
    <Shield className="w-5 h-5 text-blue-400" />,
    <Compass className="w-5 h-5 text-emerald-400" />,
  ];

  const features = [
    { num: t.about.f1Number, title: t.about.f1Title, desc: t.about.f1Desc, icon: featureIcons[0] },
    { num: t.about.f2Number, title: t.about.f2Title, desc: t.about.f2Desc, icon: featureIcons[1] },
    { num: t.about.f3Number, title: t.about.f3Title, desc: t.about.f3Desc, icon: featureIcons[2] },
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-28 px-6 md:px-12 bg-[#0b0c0e] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Tepa Bo'lim: Sarlavha, Hikoya va Editorial Lifestyle Surat */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Chap tomon: Filosofiya va Brend Tarixi */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 w-fit mb-5">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-[10px] tracking-[0.2em] font-mono font-bold text-white/80 uppercase">
                {t.about.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white mb-6 whitespace-pre-line">
              {t.about.title}
            </h2>

            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8">
              {t.about.story}
            </p>

            {/* Standartlar ro'yxati */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-white/[0.08]">
              <div className="flex items-center gap-2.5 text-xs text-white/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Certified 800+ Goose Down</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-white/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Triple DWR Water Repellent</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-white/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Heavy-Duty YKK Vision Zips</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-white/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Animal Cruelty Fill</span>
              </div>
            </div>
          </div>

          {/* O'ng tomon: Katta Editorial Rasm (model.png) */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Orqa fon nur effekti */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-orange-500/15 to-amber-500/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-80 transition duration-700 pointer-events-none" />

              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#141518] shadow-2xl">
                <img
                  src="/model.png"
                  alt="Jacket Warriors Lifestyle"
                  className="w-full h-[460px] sm:h-[540px] md:h-[580px] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient qoplama */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Shisha (Glass) ma'lumot nishoni */}
                <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xl">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-orange-400 font-bold block mb-0.5">
                      {t.about.modelTag}
                    </span>
                    <p className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                      {t.about.modelTitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white border border-white/10 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>{t.about.modelStatus}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* O'rta Bo'lim: 3 ta Texnologiya Kartochkasi */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {t.about.featuresTitle}
            </h3>
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
              ENGINEERING MATRIX
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-orange-400">
                    {f.num}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{f.title}</h4>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pastki Bo'lim: Katta Statistika Plitkasi */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.08] grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
          {t.about.stats.map((s, idx) => (
            <div key={idx} className="pt-4 sm:pt-0 sm:px-4">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-mono">
                {s.value}
              </p>
              <p className="text-white/50 text-xs mt-2 font-medium tracking-wide">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
