import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const jackets = [
  { id: 1, name: "Black", bg: "#1c1c1c", shade: "#2b2b2b", image: "/Black.png" },
  { id: 2, name: "Red", bg: "#9b0a1e", shade: "#e11d48", image: "/Red.png" },
  { id: 3, name: "Orange", bg: "#a3480f", shade: "#f97316", image: "/Orange.png" },
  { id: 4, name: "White", bg: "#4b5563", shade: "#f3f4f6", image: "/White.png" },
];

const sizes = [38, 39, 40];

function PufferJacket() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const [size, setSize] = useState(38);

  const jacket = jackets[active];

  return (
    <motion.section
      id="puffer"
      animate={{ backgroundColor: jacket.bg }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-screen overflow-hidden text-white"
    >
      {/* Chap tomon: matn */}
      <div className="absolute left-8 md:left-16 top-1/3 z-10 max-w-sm">
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
          {t.hero.title1} <br /> {t.hero.title2}
        </h1>
        <p className="mt-5 text-sm text-white/70 leading-relaxed">
          {t.hero.desc}
        </p>
        <button
          onClick={() => {
            document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-7 px-6 py-2.5 rounded-full bg-white text-black text-sm hover:scale-105 transition cursor-pointer font-medium shadow-lg"
        >
          {t.hero.getLook}
        </button>
      </div>

      {/* Markaz: katta kurtka animatsiyasi */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={jacket.id}
            initial={{ opacity: 0, y: -80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            {jacket.image ? (
              <img
                src={jacket.image}
                alt={jacket.name}
                className="h-[65vh] md:h-[70vh] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]"
              />
            ) : (
              <div
                style={{ backgroundColor: jacket.shade }}
                className="w-64 h-[55vh] rounded-[40%] shadow-2xl"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* O'ng tomon: narx va o'lcham */}
      <div className="absolute right-8 md:right-16 top-1/3 text-right z-10">
        <p className="text-4xl font-semibold">$149</p>
        <p className="text-white/50 line-through">$199</p>

        <p className="mt-8 text-xs text-white/70">{t.hero.chooseSize}</p>
        <div className="mt-2 flex gap-2 justify-end">
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`w-10 h-10 rounded-full text-sm transition cursor-pointer ${
                size === s
                  ? "bg-white text-black font-semibold shadow-md"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Pastki markaz: shior */}
      <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-sm md:text-base text-white/90 whitespace-pre-line select-none">
        {t.hero.footerTag}
      </p>

      {/* Pastki o'ng: kichik kurtkalar (rang tanlash) */}
      <div className="absolute bottom-8 right-8 md:right-16 flex gap-3 z-10">
        {jackets.map((j, i) => (
          <button
            key={j.id}
            onClick={() => setActive(i)}
            style={{ backgroundColor: j.shade }}
            className={`w-14 h-14 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
              active === i
                ? "ring-2 ring-white scale-110 shadow-2xl"
                : "opacity-60 hover:opacity-100 hover:scale-105"
            }`}
            aria-label={j.name}
            title={j.name}
          >
            {j.image && (
              <img
                src={j.image}
                alt={j.name}
                className="w-full h-full object-cover"
              />
            )}
          </button>
        ))}
      </div>
    </motion.section>
  );
}

export default PufferJacket;
