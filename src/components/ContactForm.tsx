import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner@2.0.3";
import { Send, Zap } from "lucide-react";
import { useLanguage } from "../utils/i18n";

export function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send the data to a server
    console.log("Form submitted:", formData);
    
    toast.success(t.form.success_title, {
      description: t.form.success_desc
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      message: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-slate-700 font-bold">{t.form.name_label}</Label>
        <Input
          id="name"
          type="text"
          placeholder={t.form.name_placeholder}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full bg-slate-50 border-slate-200 focus:border-amber-500 focus:ring-amber-500 h-12 rounded-xl"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-700 font-bold">{t.form.email_label}</Label>
          <Input
            id="email"
            type="email"
            placeholder={t.form.email_placeholder}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full bg-slate-50 border-slate-200 focus:border-amber-500 focus:ring-amber-500 h-12 rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-slate-700 font-bold">{t.form.phone_label}</Label>
          <Input
            id="phone"
            type="tel"
            placeholder={t.form.phone_placeholder}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="w-full bg-slate-50 border-slate-200 focus:border-amber-500 focus:ring-amber-500 h-12 rounded-xl"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="serviceType" className="text-slate-700 font-bold">{t.form.service_label}</Label>
        <Select 
          value={formData.serviceType} 
          onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
          required
        >
          <SelectTrigger className="w-full bg-slate-50 border-slate-200 focus:ring-amber-500 h-12 rounded-xl">
            <SelectValue placeholder={t.form.service_placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="home">{t.form.options.home}</SelectItem>
            <SelectItem value="restaurant">{t.form.options.restaurant}</SelectItem>
            <SelectItem value="commercial">{t.form.options.commercial}</SelectItem>
            <SelectItem value="repair">{t.form.options.repair}</SelectItem>
            <SelectItem value="consultation">{t.form.options.consultation}</SelectItem>
            <SelectItem value="other">{t.form.options.other}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-slate-700 font-bold">{t.form.message_label}</Label>
        <Textarea
          id="message"
          placeholder={t.form.message_placeholder}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          className="w-full min-h-[120px] bg-slate-50 border-slate-200 focus:border-amber-500 focus:ring-amber-500 rounded-xl p-4"
        />
      </div>

      <Button 
        type="submit" 
        className="group w-full bg-amber-500 text-slate-900 hover:bg-amber-400 transition-all h-14 text-lg font-bold rounded-xl shadow-lg shadow-amber-500/20 mt-2 relative overflow-hidden border-0"
      >
        {/* Light Beam Effect */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out skew-x-12" />
        
        <span className="relative z-10 flex items-center justify-center">
          <Zap size={18} className="mr-2 inline-block" />
          <span>{t.form.submit}</span>
        </span>
      </Button>
    </form>
  );
}
