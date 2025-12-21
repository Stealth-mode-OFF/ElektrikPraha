import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../utils/i18n";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isStickyBarVisible, setIsStickyBarVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Match the StickyContactBar visibility logic
      setIsStickyBarVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          bottom: isStickyBarVisible ? "6.5rem" : "6rem" // 104px vs 96px
        }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed right-4 sm:right-6 z-[90]"
        style={{ bottom: isStickyBarVisible ? "6.5rem" : "6rem" }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-110 flex items-center justify-center"
          aria-label="WhatsApp"
        >
          {/* Pulse Animation */}
          <span className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-pulse"></span>
          
          {/* Icon */}
          <MessageCircle 
            size={28} 
            fill="white" 
            className="relative z-10"
          />

          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
            1
          </span>
        </button>
      </motion.div>

      {/* Popup Message */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed right-4 sm:right-6 z-[90] w-80 max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-3rem)]"
            style={{ bottom: isStickyBarVisible ? "11rem" : "10rem" }}
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              {/* Header */}
              <div className="bg-green-500 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <MessageCircle size={24} className="text-green-500" />
                  </div>
                  <div>
                    <p className="font-bold">Jaroslav Soukup</p>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="w-2 h-2 bg-green-300 rounded-full"></span>
                      <span>{language === 'cz' ? 'Odpovím vám ještě dnes' : 'I will answer you today'}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-green-600 rounded-lg p-1 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Message */}
              <div className="p-4 bg-slate-50">
                <div className="bg-white rounded-xl rounded-tl-none p-4 shadow-sm border border-slate-100">
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {language === 'cz' 
                      ? 'Dobrý den, potřebujete elektrikáře? Napište mi, s čím můžu pomoct – ozvu se vám co nejdříve.'
                      : 'Hello, do you need an electrician? Message me with what you need help with – I\'ll get back to you as soon as possible.'
                    }
                  </p>
                  <p className="text-xs text-slate-400 mt-2">
                    {language === 'cz' ? 'Právě teď' : 'Just now'}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 bg-white">
                <a
                  href="https://wa.me/420777889581"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
                >
                  {language === 'cz' ? 'Zahájit konverzaci' : 'Start Conversation'}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
