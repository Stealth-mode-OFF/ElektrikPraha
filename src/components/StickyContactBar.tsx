import { Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../utils/i18n";

export function StickyContactBar() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[80] bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 shadow-2xl border-t-4 border-amber-400"
        >
          <div className="container mx-auto px-4 py-3 md:py-2">
            <div className="flex items-center justify-between gap-4">
              {/* Left: Message */}
              <div className="hidden md:flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-bold text-sm tracking-wide">
                  {language === 'cz' ? 'Dostupný • Odpovím ještě dnes' : 'Available • Reply today'}
                </span>
              </div>

              {/* Mobile: Just the actions */}
              <div className="flex-1 md:hidden">
                <span className="font-bold text-xs tracking-wide">
                  {language === 'cz' ? 'Potřebujete elektrikáře?' : 'Need an Electrician?'}
                </span>
              </div>

              {/* Right: Action Buttons */}
              <div className="flex items-center gap-3">
                <a 
                  href="https://wa.me/420777889581" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-2 bg-green-600 text-white px-4 py-2.5 rounded-lg hover:bg-green-700 transition-colors font-bold shadow-md"
                >
                  <MessageCircle size={20} fill="white" />
                  <span className="hidden lg:inline">WhatsApp</span>
                </a>

                <a 
                  href="tel:+420777889581"
                  className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg hover:bg-slate-800 transition-colors font-bold shadow-md"
                >
                  <Phone size={20} fill="white" />
                  <span className="tracking-wide">777 889 581</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
