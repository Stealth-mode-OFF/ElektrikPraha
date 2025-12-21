import { ContactForm } from "../components/ContactForm";
import { ServiceCard } from "../components/ServiceCard";
import { PricingSection } from "../components/PricingSection";
import { LocationSection } from "../components/LocationSection";
import { ProcessSteps } from "../components/ProcessSteps";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { TrustBadges } from "../components/TrustBadges";
import { QuickContactForm } from "../components/QuickContactForm";
import { Phone, Mail, MapPin, CheckCircle2, MessageCircle, Home, Building2, UtensilsCrossed } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import heroImage from "figma:asset/7a871cec9133c323f0b8c1609ec534ec4b63d02c.png";
import { useLanguage } from "../utils/i18n";
import { SectionReveal } from "../components/SectionReveal";
import { MetaTags } from "../components/SEO/MetaTags";
import { Schema, generateLocalBusinessSchema } from "../components/SEO/Schema";
import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

export function HomePage() {
  const { t, language } = useLanguage();

  return (
    <>
      <MetaTags 
        title="Elektrikář Praha – pohotovost, revize, opravy | Jaroslav Soukup"
        description="Profesionální elektrikář Praha a okolí. Nonstop pohotovost, revize, opravy, rekonstrukce. Volejte 777 889 581. Rychlý výjezd, férové ceny."
        canonical="https://elektrikar-praha.com"
      />
      
      <Schema 
        type="LocalBusiness"
        data={generateLocalBusinessSchema()}
      />

      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span className="text-xs font-bold tracking-wide text-amber-100">{t.hero.badge}</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                {t.hero.title_line1}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">{t.hero.title_line2}</span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg font-light border-l-2 border-amber-500/50 pl-6">
                {t.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <a 
                  href="tel:+420777889581" 
                  className="group bg-amber-500 text-slate-900 px-8 py-4 rounded-xl hover:bg-amber-400 transition-colors flex items-center justify-center gap-3 shadow-lg shadow-amber-500/20"
                >
                  <Phone size={28} className="fill-slate-900" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] font-bold tracking-wide opacity-80 mb-1">
                      {language === 'cz' ? 'Zavolat Hned' : 'Call Now'}
                    </span>
                    <span className="text-2xl font-bold whitespace-nowrap">
                      777 889 581
                    </span>
                  </div>
                </a>
                <a 
                  href="https://wa.me/420777889581"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl font-bold border-2 border-green-500 bg-green-500/10 hover:bg-green-500 hover:text-white transition-colors text-center text-green-400 flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-sm text-slate-400 mb-4 font-medium">
                  {language === 'cz' ? '🚀 Nebo nechte kontakt a já vám zavolám:' : '🚀 Or leave contact and I\'ll call you:'}
                </p>
                <QuickContactForm variant="inline" />
              </div>

              <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10">
                {[
                  { label: t.hero.badges.fair, desc: t.hero.badges.fair_desc },
                  { label: t.hero.badges.no_hidden, desc: t.hero.badges.no_hidden_desc },
                  { label: t.hero.badges.personal, desc: t.hero.badges.personal_desc }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center gap-2 mb-1 text-amber-400">
                      <CheckCircle2 size={18} />
                      <span className="font-bold text-sm uppercase tracking-wide">{item.label}</span>
                    </div>
                    <p className="text-xs text-slate-500 pl-6">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700 bg-slate-900 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <ImageWithFallback 
                  src={heroImage}
                  alt="Jaroslav Soukup - Elektrikář Praha"
                  className="w-full h-auto object-cover grayscale contrast-125 group-hover:grayscale-[0.5] transition-all duration-700"
                />
              </div>
            </div>
          </div>

          <div className="mt-20">
            <TrustBadges />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <SectionReveal>
        <section id="pribeh" className="py-16 bg-amber-500 text-slate-900 border-y-4 border-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
                {t.story.title}
              </h2>
              <p className="text-xl md:text-2xl font-bold leading-relaxed mb-6">
                {t.story.p1}
              </p>
              <div className="inline-block border-2 border-slate-900 bg-slate-900 text-amber-500 px-6 py-2 rounded font-bold uppercase tracking-widest text-sm shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                {t.story.highlight}
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Process Steps */}
      <SectionReveal>
        <ProcessSteps />
      </SectionReveal>

      {/* Services Section */}
      <SectionReveal>
        <section id="sluzby" className="py-32 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-3xl">
                <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-amber-600"></span>
                  {t.services.eyebrow}
                </h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                  {t.services.title}
                </h3>
              </div>
              <p className="text-slate-600 max-w-md text-right md:text-left font-medium text-lg">
                {t.services.subtitle}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              <Link to="/rekonstrukce-elektroinstalace-byt-dum">
                <ServiceCard
                  icon={<Home className="text-white" size={24} />}
                  title={t.services.cards.home.title}
                  description={t.services.cards.home.desc}
                  features={t.services.cards.home.items}
                  image="https://images.unsplash.com/photo-1636077350194-2f86d7a859a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYW1pbHklMjBob3VzZSUyMGludGVyaW9yJTIwbGl2aW5nJTIwcm9vbSUyMGxpZ2h0aW5nJTIwY296eSUyMGV2ZW5pbmd8ZW58MXx8fHwxNzY0MDM3NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                />
              </Link>
              <Link to="/rekonstrukce-elektroinstalace-byt-dum">
                <ServiceCard
                  icon={<Building2 className="text-white" size={24} />}
                  title={t.services.cards.flats.title}
                  description={t.services.cards.flats.desc}
                  features={t.services.cards.flats.items}
                  image="https://images.unsplash.com/photo-1632693810905-ce553d94e9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXB0eSUyMHJlbm92YXRlZCUyMGFwYXJ0bWVudCUyMGludGVyaW9yJTIwd2hpdGUlMjB3YWxscyUyMHdvb2QlMjBmbG9vciUyMGRheWxpZ2h0JTIwbm8lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY0MDM3NjY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                />
              </Link>
              <Link to="/rekonstrukce-elektroinstalace-byt-dum">
                <ServiceCard
                  icon={<UtensilsCrossed className="text-white" size={24} />}
                  title={t.services.cards.gastro.title}
                  description={t.services.cards.gastro.desc}
                  features={t.services.cards.gastro.items}
                  image="https://images.unsplash.com/photo-1763054781554-862cb8dd6bc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjByZW5vdmF0aW9uJTIwZmluaXNoZWQlMjBsaWdodGluZyUyMGF0bW9zcGhlcmV8ZW58MXx8fHwxNzY0MDM3MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                />
              </Link>
            </div>
            
            <div className="mt-16 text-center">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {[
                  { title: 'Elektropohotovost 24/7', slug: 'elektropohotovost-praha-24-7' },
                  { title: 'Revize elektro', slug: 'revize-elektro-praha' },
                  { title: 'Opravy zásuvek a vypínačů', slug: 'opravy-zasuvky-vypinace' },
                  { title: 'Rozvaděč, jističe, chrániče', slug: 'rozvadec-jistice-proudovy-chranic' },
                ].map((service, i) => (
                  <Link 
                    key={i}
                    to={`/${service.slug}`}
                    className="p-4 bg-slate-50 hover:bg-amber-50 rounded-xl border-2 border-slate-200 hover:border-amber-300 transition-all text-center font-bold text-slate-900 hover:text-amber-700"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Pricing Section */}
      <SectionReveal>
        <PricingSection />
      </SectionReveal>

      {/* Location Section */}
      <SectionReveal>
        <LocationSection />
      </SectionReveal>

      {/* Testimonials Section */}
      <SectionReveal>
        <TestimonialsSection />
      </SectionReveal>

      {/* Contact Section */}
      <SectionReveal>
        <section id="kontakt" className="py-32 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-20">
                <div>
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
                    {t.contact.title}
                  </h2>
                  <p className="text-slate-400 mb-12 text-xl font-light leading-relaxed">
                    {t.contact.desc}
                  </p>

                  <div className="space-y-6">
                    <a href="tel:+420777889581" className="group flex items-center gap-6 p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all hover:scale-[1.02] hover:shadow-2xl">
                      <div className="w-14 h-14 bg-amber-500 text-slate-900 flex items-center justify-center rounded-xl shadow-lg shadow-amber-500/20">
                        <Phone size={28} />
                      </div>
                      <div>
                        <span className="text-sm text-slate-400 uppercase font-bold tracking-wider block mb-1">{t.contact.call_action}</span>
                        <span className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors whitespace-nowrap">777 889 581</span>
                      </div>
                    </a>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <a href="https://wa.me/420777889581" target="_blank" rel="noopener noreferrer" className="group p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all">
                        <MessageCircle size={28} className="text-green-500 mb-4" />
                        <span className="text-sm text-slate-400 uppercase font-bold tracking-wider block mb-1">WhatsApp</span>
                        <span className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">{t.contact.message_action}</span>
                      </a>

                      <a href="mailto:jar.soukup@seznam.cz" className="group p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all">
                        <Mail size={28} className="text-slate-300 mb-4" />
                        <span className="text-sm text-slate-400 uppercase font-bold tracking-wider block mb-1">{t.contact.email_action}</span>
                        <span className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors break-words">jar.soukup@seznam.cz</span>
                      </a>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10 flex items-start gap-4">
                      <MapPin className="text-amber-500 mt-1 shrink-0" size={24} />
                      <div>
                        <span className="block text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">{t.contact.invoice_data}</span>
                        <span className="text-slate-300 font-mono text-sm leading-relaxed opacity-80">
                          Jaroslav Soukup • Náměstí pplk. Vlčka 684/9 • 198 00 Praha 9<br/>
                          IČO: 14115280
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 rounded-3xl p-1 shadow-2xl shadow-slate-900/30 relative overflow-hidden group hover:shadow-amber-500/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#f59e0b,#f59e0b_10px,#0f172a_10px,#0f172a_20px)] opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  
                  <div className="bg-white rounded-[20px] p-8 md:p-10 relative h-full overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 opacity-[0.07] pointer-events-none group-hover:opacity-[0.12] transition-opacity duration-500 rotate-12">
                      <Zap size={250} className="text-slate-900" />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200">
                            {t.contact.form_card.badge}
                          </span>
                          <h3 className="font-black text-4xl text-slate-900 mb-2 leading-tight">
                            {t.contact.form_card.title_line1} <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">{t.contact.form_card.title_line2}</span>
                          </h3>
                        </div>
                        <div className="hidden md:flex w-16 h-16 bg-amber-500 text-slate-900 rounded-xl items-center justify-center transform rotate-3 shadow-lg border-4 border-white group-hover:rotate-12 transition-transform duration-300">
                          <MessageCircle size={32} className="animate-bounce" style={{ animationDuration: '2s' }} />
                        </div>
                      </div>
                      
                      <p className="text-slate-600 mb-8 text-lg leading-relaxed font-medium">
                        {t.contact.form_card.desc}
                      </p>
                      
                      <div className="relative">
                        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-slate-200 rounded-r"></div>
                        <ContactForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>
    </>
  );
}
