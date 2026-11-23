import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { ShoppingBag, Check, Sparkles } from "lucide-react";

const productsData = [
  {
    id: 1,
    nameKey: "pufferBlack",
    color: "Black",
    colorName: "Matte Black",
    dotColor: "#1c1c1c",
    badge: "Bestseller",
    image: "/Black.png",
    price: 149,
    oldPrice: 199,
  },
  {
    id: 2,
    nameKey: "pufferRed",
    color: "Red",
    colorName: "Burgundy Red",
    dotColor: "#9b0a1e",
    badge: "New Release",
    image: "/Red.png",
    price: 149,
    oldPrice: 199,
  },
  {
    id: 3,
    nameKey: "pufferOrange",
    color: "Orange",
    colorName: "Ember Orange",
    dotColor: "#a3480f",
    badge: "Limited Edition",
    image: "/Orange.png",
    price: 149,
    oldPrice: 199,
  },
  {
    id: 4,
    nameKey: "pufferWhite",
    color: "White",
    colorName: "Arctic White",
    dotColor: "#e2e8f0",
    badge: "Trending",
    image: "/White.png",
    price: 149,
    oldPrice: 199,
  },
];

function AllProducts() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");
  const [addedItem, setAddedItem] = useState(null);

  const filterOptions = [
    { id: "All", label: t.products.all },
    { id: "Black", label: t.hero.colors.Black },
    { id: "Red", label: t.hero.colors.Red },
    { id: "Orange", label: t.hero.colors.Orange },
    { id: "White", label: t.hero.colors.White },
  ];

  const filteredProducts =
    activeFilter === "All"
      ? productsData
      : productsData.filter((p) => p.color === activeFilter);

  const handleAdd = (id) => {
    setAddedItem(id);
    setTimeout(() => setAddedItem(null), 1800);
  };

  return (
    <section
      id="products"
      className="relative w-full min-h-screen py-28 px-6 md:px-12 bg-[#090a0c] border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Tepa Bo'lim Headeri */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-3">
              <Sparkles className="w-3 h-3 text-orange-400" />
              <span className="text-[10px] tracking-[0.2em] font-mono font-semibold text-white/70 uppercase">
                {t.products.badge}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              {t.products.title}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-white/50 max-w-lg leading-relaxed">
              {t.products.subtitle}
            </p>
          </div>

          {/* Filtr Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white/[0.03] p-1.5 rounded-full border border-white/[0.08] backdrop-blur-md">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveFilter(opt.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === opt.id
                    ? "bg-white text-black font-semibold shadow-md"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mahsulotlar Kartochkalari Gridi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {filteredProducts.map((p) => {
            const isAdded = addedItem === p.id;

            return (
              <div
                key={p.id}
                className="group relative rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 p-5 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/80"
              >
                {/* Tepa Badge va Status */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/[0.06] text-white/80 font-medium">
                    {p.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>{t.products.inStock}</span>
                  </div>
                </div>

                {/* Studio Rasm Maydoni */}
                <div className="relative w-full h-72 flex items-center justify-center my-4 overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent">
                  <img
                    src={p.image}
                    alt={p.colorName}
                    className="max-h-60 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105 drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)]"
                  />
                </div>

                {/* Mahsulot Ma'lumotlari */}
                <div className="pt-2">
                  {/* Rang va Nomi */}
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-white/20"
                      style={{ backgroundColor: p.dotColor }}
                    />
                    <span className="text-xs text-white/50 font-mono">
                      {p.colorName}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight mb-2">
                    {t.products[p.nameKey]}
                  </h3>

                  {/* Narx va O'lchamlar */}
                  <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-white/[0.06]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-black text-white">
                        ${p.price}
                      </span>
                      <span className="text-xs text-white/40 line-through">
                        ${p.oldPrice}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-white/40">
                      EU 38 - 42
                    </span>
                  </div>

                  {/* Savatga qo'shish tugmasi */}
                  <button
                    onClick={() => handleAdd(p.id)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer active:scale-95 ${
                      isAdded
                        ? "bg-emerald-500 text-black shadow-lg"
                        : "bg-white text-black hover:bg-white/90 shadow-md"
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Qo'shildi!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>{t.products.addToCart}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AllProducts;
