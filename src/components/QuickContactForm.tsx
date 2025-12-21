import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner@2.0.3";
import { Zap, Phone, Mail } from "lucide-react";
import { useLanguage } from "../utils/i18n";

interface QuickContactFormProps {
  variant?: 'inline' | 'card';
  className?: string;
}

export function QuickContactForm({ variant = 'inline', className = '' }: QuickContactFormProps) {
  const { language } = useLanguage();
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    console.log("Quick contact submitted:", contact);
    
    toast.success(
      language === 'cz' ? 'Skvělé! Ozvu se vám!' : 'Great! I\'ll contact you!',
      {
        description: language === 'cz' 
          ? 'Vaše kontakt jsem obdržel. Zavolám nebo napíšu do 2 hodin.'
          : 'I received your contact. I\'ll call or write within 2 hours.'
      }
    );
    
    setContact("");
    setLoading(false);
  };

  if (variant === 'card') {
    return (
      <div className={`bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 border-2 border-amber-200 shadow-lg ${className}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-amber-500 text-slate-900 rounded-xl flex items-center justify-center">
            <Zap size={24} fill="currentColor" />
          </div>
          <div>
            <h3 className="font-black text-slate-900 text-lg">
              {language === 'cz' ? 'Rychlý kontakt' : 'Quick Contact'}
            </h3>
            <p className="text-sm text-slate-600">
              {language === 'cz' ? 'Ozvu se ještě dnes' : 'Reply today'}
            </p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="text"
            placeholder={language === 'cz' ? 'Telefon nebo email' : 'Phone or email'}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            className="w-full bg-white border-amber-300 focus:border-amber-500 focus:ring-amber-500 h-12 rounded-xl"
          />
          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-amber-500 text-slate-900 hover:bg-amber-600 h-12 rounded-xl font-black shadow-lg hover:shadow-xl transition-all"
          >
            {loading ? (
              <span className="animate-pulse">{language === 'cz' ? 'Odesílám...' : 'Sending...'}</span>
            ) : (
              <>
                <Zap size={18} className="mr-2" />
                {language === 'cz' ? 'Zavolejte mi zpět' : 'Call me back'}
              </>
            )}
          </Button>
        </form>
      </div>
    );
  }

  // Inline variant
  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <Input
        type="text"
        placeholder={language === 'cz' ? '📞 Váš telefon nebo email' : '📞 Your phone or email'}
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
        className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-amber-400 focus:ring-amber-400 h-14 rounded-xl backdrop-blur-sm"
      />
      <Button 
        type="submit" 
        disabled={loading}
        className="bg-amber-500 text-slate-900 hover:bg-amber-600 px-8 h-14 rounded-xl font-black shadow-xl hover:shadow-2xl transition-all whitespace-nowrap"
      >
        {loading ? (
          <span className="animate-pulse">{language === 'cz' ? 'Odesílám...' : 'Sending...'}</span>
        ) : (
          <>
            <Zap size={18} className="mr-2" />
            {language === 'cz' ? 'Zavolejte mi!' : 'Call me back!'}
          </>
        )}
      </Button>
    </form>
  );
}
