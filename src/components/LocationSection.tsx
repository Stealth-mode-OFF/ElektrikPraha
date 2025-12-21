import { MapPin, Navigation, HelpCircle } from "lucide-react";
import { useLanguage } from "../utils/i18n";

export function LocationSection() {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-widest">
              <MapPin size={14} />
              {language === 'cz' ? 'Lokalita' : 'Location'}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              {language === 'cz' ? 'Kde všude působím?' : 'Where do I operate?'}
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-amber-500 pl-6">
              {language === 'cz'
                ? 'Standardně působím v Praze a středních Čechách. Jsem ale flexibilní – když to dává smysl, rád za vámi přijedu i dál. Vše je o domluvě.'
                : 'I primarily operate in Prague and Central Bohemia. However, I am flexible – if it makes sense, I will gladly travel further. Everything is negotiable.'
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex-1">
                <div className="bg-amber-100 p-3 rounded-lg text-amber-600">
                   <MapPin size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-slate-900">{language === 'cz' ? 'Praha' : 'Prague'}</h4>
                   <p className="text-sm text-slate-500">{language === 'cz' ? 'Celé hlavní město' : 'Capital city'}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex-1">
                <div className="bg-amber-100 p-3 rounded-lg text-amber-600">
                   <Navigation size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-slate-900">{language === 'cz' ? 'Střední Čechy' : 'Central Bohemia'}</h4>
                   <p className="text-sm text-slate-500">{language === 'cz' ? 'Okolí Prahy' : 'Surroundings'}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex-1">
                <div className="bg-amber-100 p-3 rounded-lg text-amber-600">
                   <HelpCircle size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-slate-900">{language === 'cz' ? 'Jinde?' : 'Elsewhere?'}</h4>
                   <p className="text-sm text-slate-500">{language === 'cz' ? 'Dle domluvy' : 'Upon agreement'}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 order-1 lg:order-2 group">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163953.53580436422!2d14.316823902164478!3d50.05980582092143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2sPrague!5e0!3m2!1sen!2scz!4v1710000000000!5m2!1sen!2scz" 
               width="100%" 
               height="100%" 
               style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Map of Prague"
               className="group-hover:filter-none transition-all duration-700"
             ></iframe>
             
             {/* Overlay to match theme */}
             <div className="absolute inset-0 bg-amber-500/10 pointer-events-none mix-blend-multiply group-hover:bg-transparent transition-colors duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
