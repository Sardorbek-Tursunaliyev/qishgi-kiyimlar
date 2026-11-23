import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#08090a] border-t border-white/[0.06] py-12 px-6 md:px-12 text-white/40 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-white text-black font-black text-xs flex items-center justify-center">
            JW
          </div>
          <span className="font-bold tracking-widest text-white text-xs">
            JACKET WARRIORS
          </span>
          <span className="text-white/20">|</span>
          <p className="text-[11px] text-white/50">{t.footer.desc}</p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-[11px]">
          {t.footer.links.map((link, idx) => (
            <a
              key={idx}
              href="#products"
              className="hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
          <span className="text-white/30">
            © 2026 Jacket Warriors. {t.footer.rights}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
