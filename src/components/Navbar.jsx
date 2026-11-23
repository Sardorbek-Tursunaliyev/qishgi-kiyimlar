import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { ShoppingBag, ChevronRight, Menu, X } from "lucide-react";

function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [activeSection, setActiveSection] = useState("puffer");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "puffer", label: t.nav.puffer },
    { id: "products", label: t.nav.products },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const scrollPosition = window.scrollY + 280;
      const ids = ["puffer", "products", "about", "contact"];

      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(ids[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0c0e]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brend Logotipi */}
        <div
          onClick={() => scrollTo("puffer")}
          className="flex items-center gap-2.5 cursor-pointer group select-none"
        >
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black font-black text-sm tracking-tighter transition-transform group-hover:scale-105">
            JW
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-[0.25em] text-white">
              JACKET WARRIORS
            </span>
            <span className="text-[9px] tracking-widest text-white/40 uppercase font-mono">
              STUDIO EDITION
            </span>
          </div>
        </div>

        {/* Desktop Navigatsiya Linklari */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/[0.08] backdrop-blur-md rounded-full px-2 py-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-black bg-white shadow-sm font-semibold"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* O'ng tomon: Til tanlash va Savat */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Til almashtirish (UZ / RU / EN) */}
          <div className="flex items-center bg-white/[0.04] border border-white/[0.08] rounded-full p-0.5 text-[11px] font-mono">
            {["uz", "ru", "en"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 rounded-full uppercase transition-all cursor-pointer ${
                  lang === l
                    ? "bg-white text-black font-bold shadow-sm"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Savat tugmasi */}
          <button
            onClick={() => scrollTo("products")}
            className="flex items-center gap-2 bg-white text-black hover:bg-white/90 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-sm cursor-pointer active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.nav.cart}</span>
            <span className="w-4 h-4 rounded-full bg-black text-white text-[10px] flex items-center justify-center font-bold">
              0
            </span>
          </button>

          {/* Mobil Menyu tugmasi */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobil Menyu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-[#0c0d10] border-b border-white/10 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="w-full text-left py-2.5 px-4 rounded-xl text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition flex items-center justify-between"
            >
              <span>{item.label}</span>
              <ChevronRight className="w-4 h-4 text-white/40" />
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
