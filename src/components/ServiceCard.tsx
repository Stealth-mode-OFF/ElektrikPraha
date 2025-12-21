import { Check, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../utils/i18n";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export function ServiceCard({ icon, title, description, features, image }: ServiceCardProps) {
  const { language } = useLanguage();

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 border border-slate-100 flex flex-col h-full">
      {/* Image Section - Clean, No Text */}
      <div className="relative h-60 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500 z-10" />
        <ImageWithFallback 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
      </div>

      {/* Content Section */}
      <div className="p-8 relative flex flex-col flex-grow">
        
        {/* Header with Icon & Title - Moved under image with effect */}
        <div className="flex items-center gap-5 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 flex items-center justify-center text-amber-500 group-hover:scale-110 group-hover:border-amber-500/30 group-hover:text-amber-600 group-hover:shadow-amber-500/20 transition-all duration-300 shrink-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 transform group-hover:rotate-12 transition-transform duration-300 bg-[rgb(0,0,0)]">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-extrabold text-slate-900 leading-tight group-hover:text-amber-600 transition-colors">
            {title}
          </h3>
        </div>

        <p className="text-slate-600 mb-8 leading-relaxed text-[15px] font-medium">
          {description}
        </p>
        
        <div className="mt-auto">
          <div className="h-px w-full bg-slate-100 mb-6"></div>
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-slate-700 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                <div className="mt-0.5 w-5 h-5 rounded-full bg-amber-50 flex items-center justify-center shrink-0 border border-amber-100">
                  <Check className="text-amber-600 w-3 h-3" strokeWidth={3} />
                </div>
                <span className="font-medium text-slate-600 group-hover:text-slate-900 transition-colors">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div
            className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white py-3 px-4 rounded-xl group-hover:bg-amber-500 group-hover:text-slate-900 transition-all font-bold group/btn cursor-pointer"
          >
            <span>{language === 'cz' ? 'Zobrazit detail' : 'View Details'}</span>
            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}