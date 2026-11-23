import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import PufferJacket from "./pages/PufferJacket";
import AllProducts from "./pages/AllProducts";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
      <div className="relative w-full min-h-screen bg-[#0b0c0e] text-[#f4f4f5] selection:bg-orange-500 selection:text-black">
        {/* Yuqori premium navigatsiya */}
        <Navbar />

        {/* Landing Page Bo'limlari */}
        <main className="w-full">
          <PufferJacket />
          <AllProducts />
          <AboutUs />
          <Contact />
        </main>

        {/* Professional Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
