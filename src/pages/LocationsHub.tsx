import { Link } from 'react-router-dom';
import { pragueDistricts, surroundingAreas } from '../data/locations';
import { MetaTags } from '../components/SEO/MetaTags';
import { Schema, generateLocalBusinessSchema, generateBreadcrumbSchema } from '../components/SEO/Schema';
import { Breadcrumbs } from '../components/SEO/Breadcrumbs';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { SectionReveal } from '../components/SectionReveal';

export function LocationsHub() {
  return (
    <>
      <MetaTags 
        title="Elektrikář Praha a okolí – Všechny lokality | Jaroslav Soukup"
        description="Elektrikář pro Prahu 1–10 a okolí (Černošice, Říčany...). Rychlý výjezd, opravy, revize. Volejte 777 889 581."
        canonical="https://elektrikar-praha.com/lokality"
      />
      
      <Schema 
        type="LocalBusiness"
        data={generateLocalBusinessSchema('Praha')}
      />
      
      <Schema 
        type="BreadcrumbList"
        data={generateBreadcrumbSchema([
          { name: 'Lokality', url: 'https://elektrikar-praha.com/lokality' }
        ])}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-slate-950 text-white pt-32 pb-16">
          <div className="container mx-auto px-6">
            <Breadcrumbs items={[
              { name: 'Lokality', url: '/lokality' }
            ]} />
            
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Elektrikář Praha a okolí
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Vyjíždím po celé Praze (1–10) a okolí. Najděte svou lokalitu a zjistěte typickou dobu dojezdu a specifika elektro ve vašem okolí.
              </p>
            </div>
          </div>
        </section>
        
        {/* Praha Districts */}
        <SectionReveal>
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-10">Praha – městské části</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pragueDistricts.map((location) => (
                  <Link 
                    key={location.id}
                    to={`/${location.slug}`}
                    className="group bg-slate-50 hover:bg-amber-50 p-6 rounded-2xl border-2 border-slate-200 hover:border-amber-300 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <MapPin className="text-amber-500" size={24} />
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                          {location.name}
                        </h3>
                      </div>
                      <ArrowRight className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                    </div>
                    
                    <p className="text-sm text-slate-600 mb-4">{location.heroSubtitle}</p>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Clock size={16} className="text-slate-400" />
                      <span className="text-slate-600">
                        Dojezd: <strong className="text-slate-900">{location.arrivalTime}</strong>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        </SectionReveal>
        
        {/* Surrounding Areas */}
        <SectionReveal>
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-10">Okolí Prahy</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {surroundingAreas.map((location) => (
                  <Link 
                    key={location.id}
                    to={`/${location.slug}`}
                    className="group bg-white hover:bg-amber-50 p-6 rounded-2xl border-2 border-slate-200 hover:border-amber-300 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <MapPin className="text-amber-500" size={24} />
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                          {location.name}
                        </h3>
                      </div>
                      <ArrowRight className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                    </div>
                    
                    <p className="text-sm text-slate-600 mb-4">{location.heroSubtitle}</p>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Clock size={16} className="text-slate-400" />
                      <span className="text-slate-600">
                        Dojezd: <strong className="text-slate-900">{location.arrivalTime}</strong>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        </SectionReveal>
        
        {/* CTA */}
        <SectionReveal>
        <section className="py-20 bg-slate-950 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Nenašli jste svou lokalitu?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Vyjíždím i do dalších částí Prahy a okolí. Zavolejte a ověříme, zda dojíždím do vašeho okolí.
              </p>
              
              <a 
                href="tel:+420777889581"
                className="inline-flex items-center justify-center gap-3 bg-amber-500 text-slate-900 px-8 py-4 rounded-xl hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 font-bold text-lg"
              >
                <span>Zavolat: 777 889 581</span>
              </a>
            </div>
          </div>
        </section>
        </SectionReveal>
      </div>
    </>
  );
}
