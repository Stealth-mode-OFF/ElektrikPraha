import { Zap } from "lucide-react";

export function Thumbnail() {
  return (
    <div className="relative w-full h-[630px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern - Electric Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 50px,
            rgba(245, 158, 11, 0.05) 50px,
            rgba(245, 158, 11, 0.05) 52px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 50px,
            rgba(245, 158, 11, 0.05) 50px,
            rgba(245, 158, 11, 0.05) 52px
          )`
        }}></div>
      </div>

      {/* Glowing Amber Orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Circuit-like accent lines - Orange/Amber */}
      <div className="absolute top-1/2 -translate-y-1/2 right-12 w-1 h-64 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent"></div>
      <div className="absolute top-1/2 -translate-y-1/2 right-12 w-24 h-1 bg-gradient-to-r from-amber-500/30 to-transparent"></div>
      <div className="absolute top-1/2 -translate-y-1/2 right-[84px] translate-y-32 w-1 h-32 bg-gradient-to-b from-amber-500/30 to-transparent"></div>

      {/* Left side accent */}
      <div className="absolute top-1/2 -translate-y-1/2 left-12 w-1 h-40 bg-gradient-to-b from-transparent via-orange-500/20 to-transparent"></div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-12">
        {/* Branding Badge - Top */}
        <div className="absolute top-10 left-12">
          <div className="inline-block bg-amber-500/20 backdrop-blur-sm border-2 border-amber-500/50 px-6 py-2 rounded-xl">
            <p className="text-lg font-black text-amber-500 tracking-wider drop-shadow-lg uppercase">
              Jaroslav Soukup
            </p>
          </div>
        </div>

        {/* Icon - Big & Bold */}
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full"></div>
          <div className="relative bg-gradient-to-br from-amber-500 to-orange-600 p-10 rounded-3xl shadow-2xl shadow-amber-500/30">
            <Zap size={80} className="text-slate-900" strokeWidth={2} fill="currentColor" />
          </div>
          {/* Accent dots */}
          <div className="absolute -top-3 -right-3 w-4 h-4 bg-amber-500 rounded-full shadow-[0_0_25px_rgba(245,158,11,0.8)] animate-pulse"></div>
          <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.6)]"></div>
        </div>

        {/* Main Headline - MASSIVE */}
        <h1 className="text-8xl font-black text-white tracking-tight text-center mb-4 leading-none drop-shadow-2xl">
          ELEKTRIKÁŘ
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500">
            PRAHA
          </span>
        </h1>

        {/* Decorative Line with Lightning */}
        <div className="mt-8 flex items-center gap-4">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-500 to-orange-500 rounded-full"></div>
          <Zap className="text-amber-500" size={24} fill="currentColor" />
          <div className="w-16 h-1 bg-gradient-to-l from-transparent via-orange-500 to-amber-500 rounded-full"></div>
        </div>

        {/* Tagline */}
        <p className="text-slate-400 text-xl tracking-[0.3em] uppercase font-bold text-center mt-6">
          24/7 • Opravy • Revize
        </p>
      </div>

      {/* Bottom Contact */}
      <div className="absolute bottom-8 right-12 text-right">
        <p className="text-amber-500 font-bold text-lg tracking-wider drop-shadow-lg">
          ⚡ +420 777 889 581
        </p>
      </div>
    </div>
  );
}