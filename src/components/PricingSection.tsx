import { Check, HelpCircle, Info, Zap, CheckCircle2, Home, MapPin, Clock, Phone, Truck, ThumbsUp, MessageCircle } from "lucide-react";
import { useLanguage } from "../utils/i18n";

export function PricingSection() {
  const { t, language } = useLanguage();

  return (
    <section id="cenik" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Technical Blueprint Background */}
      <div className="absolute inset-0 opacity-[0.07] mix-blend-multiply pointer-events-none bg-fixed" 
           style={{ 
             backgroundImage: `url('https://images.unsplash.com/photo-1721244654346-9be0c0129e36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXJpbmclMjBibHVlcHJpbnQlMjBzY2hlbWF0aWMlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQwMzc3MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
             backgroundSize: 'cover',
             backgroundPosition: 'center'
           }}>
      </div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Context */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-amber-600"></span>
                {t.pricing.title}
              </h2>
              <h3 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                {t.pricing.headline_line1}.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-400">{t.pricing.headline_line2}.</span>
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                {t.pricing.subtitle}
              </p>
            </div>
          </div>

          {/* Right: Price List */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
              <div className="p-1.5 bg-gradient-to-r from-amber-500 via-slate-900 to-amber-500"></div>
              
              <div className="divide-y divide-slate-100">
                {/* Pricing list removed */}
              </div>
              
              <div className="p-4 bg-slate-50 border-t border-slate-100 text-center flex justify-center gap-6">
                 <p className="text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    {t.pricing.vat_note}
                 </p>
                 <p className="text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    {t.pricing.min_charge}
                 </p>
              </div>
            </div>

            {/* CTA Section - Get Your Quote */}
            <div className="mt-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-10 shadow-2xl border border-slate-700 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#f59e0b 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              </div>
              
              {/* Decorative Zap */}
              <div className="absolute -right-10 -top-10 opacity-10 rotate-12">
                <Zap size={200} className="text-amber-500" />
              </div>

              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-md mb-6">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    {language === 'cz' ? 'Nezávazná konzultace' : 'Free Consultation'}
                  </span>
                </div>

                <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                  {language === 'cz' ? 'Chcete znát cenu?' : 'Want to Know the Price?'}
                </h4>
                
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  {language === 'cz' 
                    ? 'Zavolejte nebo napište. Ozvu se vám ještě dnes. Probereme vše, co potřebujete, a navrhnu vám řešení a předběžnou kalkulaci.'
                    : 'Call or write. I\'ll answer today. We\'ll discuss your needs, and I\'ll propose a solution and estimate.'
                  }
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="tel:+420777889581"
                    className="group w-full sm:w-auto bg-amber-500 text-slate-900 px-8 py-4 rounded-xl hover:bg-amber-400 transition-all flex items-center justify-center gap-3 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-1 font-bold"
                  >
                    <Phone size={24} fill="currentColor" className="group-hover:animate-pulse" />
                    <div className="text-left">
                      <div className="text-xs uppercase tracking-wide opacity-80">
                        {language === 'cz' ? 'Zavolat hned' : 'Call now'}
                      </div>
                      <div className="text-xl font-black">777 889 581</div>
                    </div>
                  </a>

                  <a 
                    href="#kontakt"
                    className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold border-2 border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all text-center text-white hover:shadow-xl backdrop-blur-sm flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    <span>{language === 'cz' ? 'Nebo mi napište' : 'Or Send a Message'}</span>
                  </a>
                </div>

                {/* Trust indicators */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-500" />
                    <span>{language === 'cz' ? 'Odpovím ještě dnes' : 'Reply today'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-500" />
                    <span>{language === 'cz' ? 'Konzultace zdarma' : 'Free consultation'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
