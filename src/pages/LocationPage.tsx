import { useParams, Link } from 'react-router-dom';
import { allLocations } from '../data/locations';
import { services } from '../data/services';
import { MetaTags } from '../components/SEO/MetaTags';
import { Schema, generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from '../components/SEO/Schema';
import { Breadcrumbs } from '../components/SEO/Breadcrumbs';
import { Phone, MapPin, Clock, Car, Building2, Wrench, CheckCircle2 } from 'lucide-react';
import { SectionReveal } from '../components/SectionReveal';
import { ContactForm } from '../components/ContactForm';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export function LocationPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = allLocations.find(l => l.slug === slug);
  
  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Lokalita nenalezena</h1>
          <Link to="/lokality" className="text-amber-600 hover:underline">Zpět na přehled lokalit</Link>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <MetaTags 
        title={location.metaTitle}
        description={location.metaDescription}
        canonical={`https://elektrikar-praha.com/${location.slug}`}
      />
      
      <Schema 
        type="LocalBusiness"
        data={generateLocalBusinessSchema(location.name)}
      />
      
      <Schema 
        type="FAQPage"
        data={generateFAQSchema(location.faq)}
      />
      
      <Schema 
        type="BreadcrumbList"
        data={generateBreadcrumbSchema([
          { name: 'Lokality', url: 'https://elektrikar-praha.com/lokality' },
          { name: location.name, url: `https://elektrikar-praha.com/${location.slug}` }
        ])}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-slate-950 text-white pt-32 pb-16">
          <div className="container mx-auto px-6">
            <Breadcrumbs items={[
              { name: 'Lokality', url: '/lokality' },
              { name: location.name, url: `/${location.slug}` }
            ]} />
            
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-md mb-6">
                <MapPin size={16} className="text-amber-400" />
                <span className="text-xs font-bold tracking-wide text-amber-400">{location.area}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {location.heroTitle}
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {location.heroSubtitle}
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="text-amber-400 shrink-0" size={24} />
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Dojezd</p>
                    <p className="font-bold">{location.arrivalTime}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Car className="text-amber-400 shrink-0" size={24} />
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Parkování</p>
                    <p className="font-bold text-sm">{location.parking}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Building2 className="text-amber-400 shrink-0" size={24} />
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Typ zástavby</p>
                    <p className="font-bold text-sm">{location.buildingTypes[0]}</p>
                  </div>
                </div>
              </div>
              
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
        
        {/* Building Types */}
        <SectionReveal>
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Typy zástavby v lokalitě {location.name}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {location.buildingTypes.map((type, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                    <Building2 className="text-amber-500 shrink-0" size={20} />
                    <span className="font-medium">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        </SectionReveal>
        
        {/* Common Issues */}
        <SectionReveal>
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Wrench className="text-amber-600" size={32} />
                <h2 className="text-3xl font-bold">Nejčastější zásahy v lokalitě {location.name}</h2>
              </div>
              
              <div className="space-y-6">
                {location.commonIssues.map((issue, i) => (
                  <div key={i} className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500">
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{issue.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{issue.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        </SectionReveal>
        
        {/* Case Studies */}
        {location.caseStudies.length > 0 && (
          <SectionReveal>
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-10">Příklady zakázek v lokalitě {location.name}</h2>
                
                <div className="space-y-6">
                  {location.caseStudies.map((caseStudy, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border-2 border-slate-100">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
                          <p className="text-sm text-amber-600 font-medium mb-4">
                            <MapPin size={14} className="inline mr-1" />
                            {caseStudy.location}
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6 ml-14">
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Problém:</h4>
                          <p className="text-slate-700">{caseStudy.problem}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Řešení:</h4>
                          <p className="text-slate-700">{caseStudy.solution}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          </SectionReveal>
        )}
        
        {/* Services */}
        <SectionReveal>
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-10">Služby elektrikáře v lokalitě {location.name}</h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {services.slice(0, 6).map((service, i) => (
                  <Link 
                    key={i}
                    to={`/${service.slug}`}
                    className="group flex items-center gap-4 p-5 bg-slate-50 hover:bg-amber-50 rounded-xl border-2 border-slate-200 hover:border-amber-300 transition-all"
                  >
                    <CheckCircle2 className="text-amber-500 shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Link 
                  to="/#sluzby"
                  className="inline-block px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
                >
                  Zobrazit všechny služby
                </Link>
              </div>
            </div>
          </div>
        </section>
        </SectionReveal>
        
        {/* FAQ */}
        <SectionReveal>
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-10">Často kladené otázky – {location.name}</h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {location.faq.map((item, i) => (
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
                <h2 className="text-4xl font-bold mb-4">Potřebujete elektrikáře v lokalitě {location.name}?</h2>
                <p className="text-slate-300 text-xl">Typický dojezd: {location.arrivalTime}</p>
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
                    Dojezd do {location.name}: {location.arrivalTime}
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
