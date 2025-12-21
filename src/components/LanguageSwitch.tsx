import React from 'react';
import { useLanguage } from '../utils/i18n';
import { motion } from 'motion/react';

export function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="relative inline-flex bg-slate-800 p-1 rounded-lg border border-slate-700 shadow-lg select-none">
      {/* The Rocker Mechanism */}
      <div className="flex gap-1">
        {/* CZ Button */}
        <button
          onClick={() => language !== 'cz' && toggleLanguage()}
          className={`
            w-10 h-8 rounded-md flex items-center justify-center text-xs font-black tracking-wider transition-all duration-200
            ${language === 'cz' 
              ? 'bg-amber-500 text-slate-900 shadow-[inset_0_3px_6px_rgba(0,0,0,0.4)] translate-y-[1px] border-b-0 border-amber-600' 
              : 'bg-slate-700 text-slate-400 shadow-[0_3px_0_rgba(0,0,0,0.3),0_1px_0_rgba(255,255,255,0.1)_inset] -translate-y-[1px] hover:bg-slate-600 cursor-pointer'
            }
          `}
        >
          CZ
        </button>

        {/* EN Button */}
        <button
          onClick={() => language !== 'en' && toggleLanguage()}
          className={`
            w-10 h-8 rounded-md flex items-center justify-center text-xs font-black tracking-wider transition-all duration-200
            ${language === 'en' 
              ? 'bg-amber-500 text-slate-900 shadow-[inset_0_3px_6px_rgba(0,0,0,0.4)] translate-y-[1px] border-b-0 border-amber-600' 
              : 'bg-slate-700 text-slate-400 shadow-[0_3px_0_rgba(0,0,0,0.3),0_1px_0_rgba(255,255,255,0.1)_inset] -translate-y-[1px] hover:bg-slate-600 cursor-pointer'
            }
          `}
        >
          EN
        </button>
      </div>
    </div>
  );
}
