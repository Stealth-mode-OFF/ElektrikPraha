import { useParams, Link } from 'react-router-dom';
import { services, Service as ServiceType } from '../data/services';
import { MetaTags } from '../components/SEO/MetaTags';
import { Schema, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '../components/SEO/Schema';
import { Breadcrumbs } from '../components/SEO/Breadcrumbs';
import { Phone, CheckCircle2, AlertTriangle, Clock, Euro } from 'lucide-react';
import { SectionReveal } from '../components/SectionReveal';
import { ContactForm } from '../components/ContactForm';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Služba nenalezena</h1>
          <Link to="/" className="text-amber-600 hover:underline">Zpět na hlavní stránku</Link>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <MetaTags 
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`https://elektrikar-praha.com/${service.slug}`}
      />
      
      <Schema 
        type="Service"
        data={generateServiceSchema(service)}
      />
      
      <Schema 
        type="FAQPage"
        data={generateFAQSchema(service.faq)}
      />
      
      <Schema 
        type="BreadcrumbList"
        data={generateBreadcrumbSchema([
          { name: 'Služby', url: 'https://elektrikar-praha.com/#sluzby' },
          { name: service.title, url: `https://elektrikar-praha.com/${service.slug}` }
        ])}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-slate-950 text-white pt-32 pb-16">
          <div className="container mx-auto px-6">
            <Breadcrumbs items={[
              { name: 'Služby', url: '/#sluzby' },
              { name: service.title, url: `/${service.slug}` }
            ]} />
            
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-md mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span className="text-xs font-bold tracking-wide text-amber-400">SLUŽBA</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {service.heroTitle}
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {service.heroSubtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+420777889581"
                  className="group bg-amber-500 text-slate-900 px-8 py-4 rounded-xl hover:bg-amber-400 transition-colors flex items-center justify-center gap-3 shadow-lg shadow-amber-500/20"
                >
                  <Phone size={24} className="fill-slate-900" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] font-bold tracking-wide opacity-80 mb-1">
                      Zavolat Hned
                    </span>
                    <span className="text-2xl font-bold whitespace-nowrap">
                      777 889 581
                    </span>
                  </div>
                </a>
                
                <a 
                  href="#kontakt"
                  className="px-8 py-4 rounded-xl font-bold border-2 border-white/20 hover:bg-white/10 transition-colors text-center flex items-center justify-center"
                >
                  Nezávazná poptávka
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pro koho */}
        <SectionReveal>
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Pro koho je tato služba určena</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.forWhom.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle2 className="text-amber-500 shrink-0" size={20} />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        </SectionReveal>
        
        {/* Symptoms */}
        <SectionReveal>
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">{service.symptoms.title}</h2>
              <ul className="space-y-3">
                {service.symptoms.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                    <CheckCircle2 className="text-amber-600 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        </SectionReveal>
        
        {/* Causes */}
        <SectionReveal>
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Typické příčiny</h2>
              <ul className="space-y-3">
                {service.causes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold shrink-0">→</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        </SectionReveal>
        
        {/* Risks */}
        <SectionReveal>
        <section className="py-16 bg-red-50 border-y-4 border-red-500">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="text-red-600" size={32} />
                <h2 className="text-3xl font-bold text-red-900">{service.risks.title}</h2>
              </div>
              <ul className="space-y-3">
                {service.risks.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-red-500">
                    <AlertTriangle className="text-red-600 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        </SectionReveal>
        
        {/* Process */}
        <SectionReveal>
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-10">
                <Clock className="text-amber-600" size={32} />
                <h2 className="text-3xl font-bold">{service.process.title}</h2>
              </div>
              
              <div className="space-y-6">
                {service.process.steps.map((step, i) => (
                  <div key={i} className="relative pl-8 pb-8 border-l-2 border-amber-200 last:border-l-0 last:pb-0">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        </SectionReveal>
        
        {/* Pricing */}
        <SectionReveal>
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Euro className="text-amber-600" size={32} />
                <h2 className="text-3xl font-bold">{service.pricing.title}</h2>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-amber-200 mb-6">
                <div className="text-center mb-6">
                  <span className="text-5xl font-black text-amber-600">{service.pricing.basePrice}</span>
                  <p className="text-slate-600 mt-2">{service.pricing.description}</p>
                </div>
                
                <ul className="space-y-2">
                  {service.pricing.factors.map((factor, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="text-amber-500 shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-700">{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-amber-100 p-6 rounded-xl border-2 border-amber-300">
                <p className="text-slate-800 font-medium text-center">
                  💡 <strong>Férové ceny:</strong> Vždy potvrzuji cenu předem, po diagnostice na místě. Žádné "černé díry" nebo skryté poplatky.
                </p>
              </div>
            </div>
          </div>
        </section>
        </SectionReveal>
        
        {/* Testimonials */}
        {service.testimonials && service.testimonials.length > 0 && (
          <SectionReveal>
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">Reference</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.testimonials.map((testimonial, i) => (
                    <div key={i} className="bg-slate-50 p-6 rounded-xl border-l-4 border-amber-500">
                      <p className="text-slate-700 mb-4 italic">"{testimonial.text}"</p>
                      <div className="text-sm">
                        <p className="font-bold text-slate-900">{testimonial.author}</p>
                        <p className="text-slate-600">{testimonial.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          </SectionReveal>
        )}
        
        {/* FAQ */}
        <SectionReveal>
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-10">Často kladené otázky</h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {service.faq.map((item, i) => (
                  <AccordionItem 
                    key={i} 
                    value={`item-${i}`}
                    className="bg-white rounded-lg border border-slate-200 px-6"
                  >
                    <AccordionTrigger className="text-left font-bold hover:text-amber-600 py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700 leading-relaxed pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
        </SectionReveal>
        
        {/* CTA Contact */}
        <SectionReveal>
        <section id="kontakt" className="py-20 bg-slate-950 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Potřebujete tuto službu?</h2>
                <p className="text-slate-300 text-xl">Zavolejte nebo napište – poradím a domluvu termín</p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-10">
                {/* Phone CTA */}
                <div className="flex flex-col justify-center">
                  <a 
                    href="tel:+420777889581"
                    className="group bg-amber-500 text-slate-900 px-8 py-6 rounded-xl hover:bg-amber-400 transition-colors flex items-center justify-center gap-4 shadow-lg shadow-amber-500/20 mb-6"
                  >
                    <Phone size={32} className="fill-slate-900" />
                    <div className="flex flex-col items-start leading-none">
                      <span className="text-sm font-bold tracking-wide opacity-80 mb-2">
                        Zavolat Hned
                      </span>
                      <span className="text-3xl font-bold whitespace-nowrap">
                        777 889 581
                      </span>
                    </div>
                  </a>
                  
                  <p className="text-slate-400 text-center text-sm">
                    Typická doba odezvy: 30–90 minut v Praze
                  </p>
                </div>
                
                {/* Contact Form */}
                <div className="bg-white rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Nebo napište</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
        </SectionReveal>
      </div>
    </>
  );
}
