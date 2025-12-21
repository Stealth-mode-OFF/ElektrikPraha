import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { Zap, Phone, Menu, X, ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { LanguageProvider, useLanguage } from './utils/i18n';
import { LanguageSwitch } from './components/LanguageSwitch';
import { StickyContactBar } from './components/StickyContactBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicePage } from './pages/ServicePage';
import { LocationPage } from './pages/LocationPage';
import { LocationsHub } from './pages/LocationsHub';
import { BlogArticlePage } from './pages/BlogArticlePage';
import { BlogHub } from './pages/BlogHub';
import { ThumbnailPreview } from './pages/ThumbnailPreview';
import { OGImageDownload } from './pages/OGImageDownload';

// SEO
import { Schema, generateLocalBusinessSchema } from './components/SEO/Schema';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightsOn, setIsLightsOn] = useState(true);
  const [isStickyBarVisible, setIsStickyBarVisible] = useState(false);
  const { t, toggleLanguage } = useLanguage();
  const location = useLocation();

  const toggleLights = () => {
    setIsLightsOn(!isLightsOn);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsStickyBarVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className={`min-h-screen font-sans text-slate-900 selection:bg-amber-500 selection:text-white transition-colors duration-1000 ${!isLightsOn ? 'bg-slate-950' : 'bg-white'}`}>
      
      {/* Global Schema */}
      <Schema 
        type="LocalBusiness"
        data={generateLocalBusinessSchema()}
      />
      
      {/* Master Switch */}
      <motion.div 
        drag
        dragMomentum={false}
        whileDrag={{ scale: 1.1, rotate: -5 }}
        className="fixed left-2 sm:left-4 z-[100] cursor-grab touch-none group bottom-24 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <div className="relative">
          <div className={`w-14 sm:w-16 h-20 sm:h-24 bg-slate-700 rounded-lg border-[3px] border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] flex flex-col items-center p-1.5 relative overflow-hidden transition-colors duration-300 ${isLightsOn ? 'bg-slate-200' : 'bg-slate-800'}`}>
            <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,#000_5px,#000_6px)] pointer-events-none"></div>
            
            {[
              'top-1 left-1', 'top-1 right-1', 'bottom-1 left-1', 'bottom-1 right-1'
            ].map((pos, i) => (
              <div key={i} className={`absolute ${pos} w-1.5 h-1.5 rounded-full bg-slate-400 border border-slate-900 flex items-center justify-center shadow-sm`}>
                <div className={`w-full h-[1px] bg-slate-800 ${i % 2 === 0 ? 'rotate-45' : '-rotate-45'}`}></div>
              </div>
            ))}
            
            <div className="mt-1.5 bg-slate-900 text-amber-500 px-1 py-0.5 text-[6px] font-black tracking-wide border border-amber-500/50 rounded text-center uppercase whitespace-nowrap z-10">
              {t.switch.label}
            </div>
            
            <div className="flex-1 w-full flex items-center justify-center relative my-0.5">
              <div className="w-6 h-10 bg-slate-900 rounded-md border-2 border-slate-600 relative overflow-hidden p-0.5">
                <motion.div 
                  className={`w-full h-1/2 rounded border-2 border-slate-900 shadow-sm z-10 relative cursor-pointer ${isLightsOn ? 'bg-gradient-to-br from-amber-300 to-amber-600 top-0 mb-auto' : 'bg-gradient-to-br from-red-400 to-red-700 top-[100%] -translate-y-full mt-auto'}`}
                  layout
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  onClick={toggleLights}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-[1px] bg-black/20 shadow-sm"></div>
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-[1px] bg-black/20 shadow-sm"></div>
                  <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-[1px] bg-black/20 shadow-sm"></div>
                </motion.div>
                <div className="absolute inset-0 bg-black/50 shadow-inner"></div>
              </div>
            </div>
            
            <div className="w-full flex justify-between px-1 mb-0.5">
              <div className={`flex flex-col items-center transition-all duration-300 ${isLightsOn ? 'opacity-30 grayscale' : 'opacity-100'}`}>
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)]"></div>
                <span className="text-[6px] font-bold text-slate-500 mt-0.5">OFF</span>
              </div>
              <div className={`flex flex-col items-center transition-all duration-300 ${!isLightsOn ? 'opacity-30 grayscale' : 'opacity-100'}`}>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.8)]"></div>
                <span className="text-[6px] font-bold text-slate-500 mt-0.5">ON</span>
              </div>
            </div>
          </div>
          
          <div className={`absolute left-full top-1/2 -translate-y-1/2 ml-4 transition-all duration-500 ${!isLightsOn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
            <div className="flex items-center">
              <ArrowLeft className="text-amber-500 w-8 h-8 stroke-[2] animate-pulse mr-2" />
              <span className="text-amber-500 font-serif italic text-xl whitespace-nowrap" style={{ textShadow: '0 0 10px rgba(245,158,11,0.8)' }}>
                {t.switch.hint}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Blackout Overlay */}
      <div className={`fixed inset-0 bg-slate-950/98 z-[90] pointer-events-none transition-opacity duration-500 flex items-center justify-center ${!isLightsOn ? 'opacity-100 pointer-events-auto' : 'opacity-0'}`}>
        <div className="text-center px-6 max-w-2xl relative">
          <div className="inline-flex items-center justify-center p-4 bg-slate-900 rounded-full mb-8 shadow-[0_0_50px_rgba(245,158,11,0.2)]">
            <Zap size={48} className="text-amber-500 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            {t.switch.blackout_title}<br/>
            <span className="text-amber-500">{t.switch.blackout_subtitle}</span>
          </h2>
          <p className="text-slate-400 text-xl mb-10">
            {t.switch.blackout_desc}
          </p>
        </div>
      </div>

      {/* Mobile Top Bar */}
      <div className="bg-amber-500 text-slate-900 py-2 px-4 text-center font-bold text-sm md:hidden relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-white/10 -skew-x-12 transform -translate-x-1/2"></div>
        <a href="tel:+420777889581" className="flex items-center justify-center gap-2 relative z-10">
          <Phone size={16} fill="currentColor" />
          <span className="tracking-wide">{t.nav.mobile_call}</span>
        </a>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-slate-900 text-amber-500 p-2.5 rounded-xl shadow-lg shadow-amber-500/10 group-hover:scale-105 transition-transform duration-300">
              <Zap size={22} fill="currentColor" />
            </div>
            <div className="leading-none">
              <h1 className="text-lg font-extrabold text-slate-900 tracking-tight uppercase group-hover:text-amber-600 transition-colors">
                Jaroslav Soukup
              </h1>
              <p className="text-[11px] text-slate-500 font-bold tracking-[0.2em] uppercase mt-1">Elektrikář Praha</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 font-bold text-sm text-slate-600 tracking-wide">
            <Link to="/#sluzby" className="relative py-2 hover:text-slate-900 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 after:transition-all hover:after:w-full">
              {t.nav.services}
            </Link>
            <Link to="/lokality" className="relative py-2 hover:text-slate-900 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 after:transition-all hover:after:w-full">
              Lokality
            </Link>
            <Link to="/poradna" className="relative py-2 hover:text-slate-900 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 after:transition-all hover:after:w-full">
              Poradna
            </Link>
            <LanguageSwitch />
            <a 
              href="/#kontakt" 
              className="bg-slate-900 text-white px-7 py-3 rounded-full hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/20 hover:-translate-y-0.5 flex items-center gap-2 group"
            >
              {t.nav.cta}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <div className="scale-90 origin-right">
              <LanguageSwitch />
            </div>
            <button 
              className="p-2 text-slate-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl absolute w-full left-0 top-20 shadow-2xl py-6 px-6 flex flex-col gap-2 animate-in slide-in-from-top-5 fade-in duration-300">
            <Link to="/#sluzby" className="text-xl font-bold py-3 px-4 rounded-lg hover:bg-slate-50">{t.nav.services}</Link>
            <Link to="/lokality" className="text-xl font-bold py-3 px-4 rounded-lg hover:bg-slate-50">Lokality</Link>
            <Link to="/poradna" className="text-xl font-bold py-3 px-4 rounded-lg hover:bg-slate-50">Poradna</Link>
            <a href="/#kontakt" className="mt-4 bg-slate-900 text-white text-center py-4 font-bold rounded-xl shadow-lg">{t.nav.contact}</a>
          </div>
        )}
      </header>

      {/* Routes */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thumbnail" element={<ThumbnailPreview />} />
        <Route path="/og-image" element={<OGImageDownload />} />
        <Route path="/lokality" element={<LocationsHub />} />
        <Route path="/poradna" element={<BlogHub />} />
        <Route path="/poradna/:slug" element={<BlogArticlePage />} />
        <Route path="/:slug" element={<ServiceOrLocationRouter />} />
      </Routes>

      {/* Sticky Contact Bar */}
      {isStickyBarVisible && <StickyContactBar />}

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* Toaster */}
      <Toaster />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-500 text-slate-900 p-3 rounded-xl">
                  <Zap size={24} fill="currentColor" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Jaroslav Soukup</h3>
                  <p className="text-sm text-slate-400">Elektrikář Praha</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Profesionální elektrikářské služby pro Prahu a okolí. Opravy, revize, rekonstrukce, pohotovost 24/7.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/elektrikar.jaroslav.soukup" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors">
                  F
                </a>
                <a href="https://www.instagram.com/elektrikar.praha" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors">
                  I
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Služby</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/elektropohotovost-praha-24-7" className="hover:text-amber-400 transition-colors">Elektropohotovost 24/7</Link></li>
                <li><Link to="/revize-elektro-praha" className="hover:text-amber-400 transition-colors">Revize elektro</Link></li>
                <li><Link to="/opravy-zasuvky-vypinace" className="hover:text-amber-400 transition-colors">Opravy zásuvek</Link></li>
                <li><Link to="/rekonstrukce-elektroinstalace-byt-dum" className="hover:text-amber-400 transition-colors">Rekonstrukce</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Lokality</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/elektrikar-praha-1" className="hover:text-amber-400 transition-colors">Praha 1</Link></li>
                <li><Link to="/elektrikar-praha-4" className="hover:text-amber-400 transition-colors">Praha 4</Link></li>
                <li><Link to="/elektrikar-praha-6" className="hover:text-amber-400 transition-colors">Praha 6</Link></li>
                <li><Link to="/lokality" className="hover:text-amber-400 transition-colors">Všechny lokality</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Jaroslav Soukup – Elektrikář Praha. IČO: 14115280</p>
            <p className="mt-2">Náměstí pplk. Vlčka 684/9, 198 00 Praha 9</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Router component to handle both service and location pages
function ServiceOrLocationRouter() {
  const { slug } = useParams<{ slug: string }>();
  const { services } = require('./data/services');
  const { allLocations } = require('./data/locations');
  
  const isService = services.some((s: any) => s.slug === slug);
  const isLocation = allLocations.some((l: any) => l.slug === slug);
  
  if (isService) {
    return <ServicePage />;
  } else if (isLocation) {
    return <LocationPage />;
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Stránka nenalezena</h1>
        <Link to="/" className="text-amber-600 hover:underline">Zpět na hlavní stránku</Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </Router>
  );
}