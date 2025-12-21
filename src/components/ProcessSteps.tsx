import { Phone, FileText, Wrench, CheckSquare } from "lucide-react";
import { useLanguage } from "../utils/i18n";

export function ProcessSteps() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <Phone size={24} />,
      title: t.processSection.steps.contact.title,
      desc: t.processSection.steps.contact.desc
    },
    {
      icon: <FileText size={24} />,
      title: t.processSection.steps.quote.title,
      desc: t.processSection.steps.quote.desc
    },
    {
      icon: <Wrench size={24} />,
      title: t.processSection.steps.work.title,
      desc: t.processSection.steps.work.desc
    },
    {
      icon: <CheckSquare size={24} />,
      title: t.processSection.steps.handover.title,
      desc: t.processSection.steps.handover.desc
    }
  ];

  return (
    <section className="bg-slate-950 text-white py-24 border-b border-slate-800 relative overflow-hidden">
       {/* Background Glow & Noise */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-3">{t.processSection.eyebrow}</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold">{t.processSection.title}</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-12 relative">
          {/* The "Live Wire" Connection Line (Desktop only) */}
          <div className="hidden md:block absolute top-[3.5rem] left-[10%] right-[10%] h-[2px] bg-slate-800 overflow-hidden rounded-full z-0">
             {/* Animated Current Pulse */}
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-amber-500 to-transparent w-[20%] animate-pulse-flow opacity-80 shadow-[0_0_15px_rgba(245,158,11,0.8)]"></div>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="relative group z-10">
              <div className="flex flex-col items-center text-center">
                
                {/* Hexagon / Industrial Shape Container */}
                <div className="w-24 h-24 relative mb-8 group-hover:-translate-y-2 transition-transform duration-500">
                  {/* Animated Border Ring */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl shadow-black flex items-center justify-center group-hover:border-amber-500/50 transition-colors duration-500 z-10">
                    <div className="text-slate-400 group-hover:text-amber-500 transition-colors duration-300 transform group-hover:scale-110">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Glow Effect behind */}
                  <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Number Tag looking like a fuse label */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-amber-600 text-white text-sm font-bold rounded-lg flex items-center justify-center shadow-lg border border-amber-400/50 z-20 font-mono">
                    0{index + 1}
                  </div>
                </div>
                
                <h3 className="font-bold text-xl mb-3 text-slate-100 group-hover:text-amber-400 transition-colors">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed px-2 font-medium border-t border-white/5 pt-4 w-full">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse-flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(500%); }
        }
        .animate-pulse-flow {
          animation: pulse-flow 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}
