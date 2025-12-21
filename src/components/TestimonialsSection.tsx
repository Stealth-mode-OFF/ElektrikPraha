import { Quote, Star } from "lucide-react";
import { useLanguage } from "../utils/i18n";

export function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-slate-50 relative">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.4 }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-16">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-amber-600"></span>
            {t.testimonials.eyebrow}
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.testimonials.title}<br/>
            <span className="text-slate-400 font-normal">{t.testimonials.subtitle}</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.reviews.map((review) => (
            <div 
              key={review.id} 
              className={`relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1 ${
                review.highlight 
                  ? 'bg-white border-amber-200 shadow-xl shadow-amber-900/5 border-t-4 border-t-amber-500' 
                  : 'bg-white border border-slate-100 shadow-lg shadow-slate-200/50'
              }`}
            >
              <Quote className={`absolute top-6 right-6 w-10 h-10 opacity-10 ${review.highlight ? 'text-amber-600' : 'text-slate-400'}`} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-500 text-amber-500" />
                ))}
              </div>

              <p className="text-slate-700 mb-8 leading-relaxed font-medium italic text-[15px]">
                "{review.text}"
              </p>

              <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-6">
                <div>
                  <p className="font-bold text-slate-900 text-base">{review.name}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-bold mt-0.5">{review.role}</p>
                </div>
                
                {review.link && (
                  <a 
                    href={review.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold hover:bg-amber-100 hover:text-amber-700 transition-colors"
                  >
                    Web
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
