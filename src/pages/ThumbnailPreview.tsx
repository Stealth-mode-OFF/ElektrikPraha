import { Thumbnail } from "../components/Thumbnail";
import { ThumbnailPhoto } from "../components/ThumbnailPhoto";
import { useState } from "react";

export function ThumbnailPreview() {
  const [activeStyle, setActiveStyle] = useState<'photo' | 'illustration'>('photo');

  return (
    <div className="min-h-screen bg-slate-950 p-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Social Media Thumbnail Generator</h2>
          <p className="text-slate-400">Profesionální náhled pro elektrikář-praha.com • 1200×630px</p>
        </div>

        {/* Style Switcher */}
        <div className="mb-8 flex justify-center gap-4">
          <button 
            onClick={() => setActiveStyle('photo')}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${
              activeStyle === 'photo' 
                ? 'bg-amber-500 text-slate-900 shadow-lg shadow-amber-500/30' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            📸 Realistická Fotka
          </button>
          <button 
            onClick={() => setActiveStyle('illustration')}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${
              activeStyle === 'illustration' 
                ? 'bg-amber-500 text-slate-900 shadow-lg shadow-amber-500/30' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            ⚡ Ilustrovaný Styl
          </button>
        </div>

        {/* Main Preview - 1200x630 (OpenGraph ratio) */}
        <div className="mb-12 bg-slate-900 rounded-2xl p-8 border border-slate-800">
          <h3 className="text-lg font-bold text-white mb-4">
            Open Graph / Social Media (1200×630) - {activeStyle === 'photo' ? '📸 Realistická verze' : '⚡ Ilustrovaná verze'}
          </h3>
          <div className="aspect-[1200/630] overflow-hidden rounded-lg shadow-2xl">
            {activeStyle === 'photo' ? <ThumbnailPhoto /> : <Thumbnail />}
          </div>
        </div>

        {/* Small Preview */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <h3 className="text-sm font-bold text-white mb-3">Facebook Post Preview</h3>
            <div className="aspect-[1200/630] overflow-hidden rounded-lg shadow-xl scale-50 origin-top-left">
              {activeStyle === 'photo' ? <ThumbnailPhoto /> : <Thumbnail />}
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <h3 className="text-sm font-bold text-white mb-3">Google Search Preview</h3>
            <div className="aspect-[1200/630] overflow-hidden rounded-lg shadow-xl scale-50 origin-top-left">
              {activeStyle === 'photo' ? <ThumbnailPhoto /> : <Thumbnail />}
            </div>
          </div>
        </div>

        {/* Download Instructions */}
        <div className="mt-12 bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-amber-500 mb-4">📸 Jak exportovat thumbnail:</h3>
          <ol className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="bg-amber-500 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm shrink-0">1</span>
              <span>Otevřete Chrome DevTools (F12 nebo Cmd+Opt+I)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-amber-500 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm shrink-0">2</span>
              <span>Klikněte na element s třídou <code className="bg-slate-800 px-2 py-1 rounded text-blue-400">.aspect-[1200/630]</code></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-amber-500 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm shrink-0">3</span>
              <span>Pravé tlačítko → "Capture node screenshot"</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-amber-500 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm shrink-0">4</span>
              <span>Obrázek se stáhne jako PNG (1200×630 px)</span>
            </li>
          </ol>

          <div className="mt-6 pt-6 border-t border-amber-500/20">
            <h4 className="font-bold text-amber-400 mb-2">Použití:</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>✅ Open Graph meta tag (Facebook, LinkedIn)</li>
              <li>✅ Twitter Card</li>
              <li>✅ Google Business Profile cover</li>
              <li>✅ Website preview v Google Search</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}