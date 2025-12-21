import { useLanguage } from "../utils/i18n";
import { Zap } from "lucide-react";

export function ThumbnailPhoto() {
  const { language } = useLanguage();
  
  const headline = language === 'cz' 
    ? { line1: 'ELEKTRIKÁŘ', line2: 'PRAHA' }
    : { line1: 'ELECTRICIAN', line2: 'PRAGUE' };

  return (
    <div className="relative w-full h-[630px] overflow-hidden bg-slate-900">
      {/* Background Photo - Professional Electrician */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1564943608180-39066aa78292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBlbGVjdHJpY2lhbiUyMHdvcmslMjB0b29scyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NjMyNTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Professional electrician - Jaroslav Soukup"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Dark gradient overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>

      {/* Animated Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent"></div>

      {/* Logo/Icon - Top Left */}
      <div className="absolute top-12 left-16 flex items-center gap-4">
        <div className="bg-amber-500 text-slate-900 p-4 rounded-2xl shadow-2xl shadow-amber-500/30">
          <Zap size={40} fill="currentColor" />
        </div>
      </div>

      {/* Main Content - Center Left */}
      <div className="absolute inset-0 flex flex-col items-start justify-center px-16">
        <div className="text-left max-w-3xl">
          {/* NAME - Most Important! */}
          <div className="mb-8">
            <div className="inline-block bg-amber-500/20 backdrop-blur-sm border-2 border-amber-500 px-8 py-3 rounded-2xl mb-6">
              <p className="text-3xl font-black text-amber-500 tracking-wider drop-shadow-2xl uppercase">
                Jaroslav Soukup
              </p>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-[120px] font-black text-white leading-[0.85] tracking-tighter mb-4 drop-shadow-2xl">
            {headline.line1}
          </h1>
          <h2 className="text-[120px] font-black leading-[0.85] tracking-tighter drop-shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #f97316 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
            {headline.line2}
          </h2>

          {/* Accent Line */}
          <div className="flex items-center gap-4 mt-8">
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-lg shadow-amber-500/50"></div>
            <Zap className="text-amber-500" size={28} fill="currentColor" />
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-lg shadow-amber-500/50"></div>
          </div>

          {/* Subtitle */}
          <p className="text-2xl font-bold text-white/90 mt-8 tracking-wide uppercase drop-shadow-lg">
            {language === 'cz' ? '24/7 • Revize • Opravy • Rekonstrukce' : '24/7 • Inspections • Repairs • Renovations'}
          </p>
        </div>
      </div>

      {/* Contact Info - Bottom Right */}
      <div className="absolute bottom-10 right-16 text-right">
        <p className="text-xl font-bold text-white/80 tracking-wider drop-shadow-lg mb-2">
          ⚡ +420 777 889 581
        </p>
        <p className="text-lg text-amber-500/80 tracking-wider drop-shadow-lg">
          elektrikar-praha.com
        </p>
      </div>
    </div>
  );
}