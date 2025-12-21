import { useParams, Link } from 'react-router-dom';
import { blogArticles } from '../data/blog';
import { MetaTags } from '../components/SEO/MetaTags';
import { Schema, generateFAQSchema, generateBreadcrumbSchema } from '../components/SEO/Schema';
import { Breadcrumbs } from '../components/SEO/Breadcrumbs';
import { Phone, AlertTriangle, CheckCircle2, Lightbulb } from 'lucide-react';
import { SectionReveal } from '../components/SectionReveal';
import { ContactForm } from '../components/ContactForm';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find(a => a.slug === slug);
  
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Článek nenalezen</h1>
          <Link to="/poradna" className="text-amber-600 hover:underline">Zpět do poradny</Link>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <MetaTags 
        title={article.metaTitle}
        description={article.metaDescription}
        canonical={`https://elektrikar-praha.com/poradna/${article.slug}`}
      />
      
      <Schema 
        type="FAQPage"
        data={generateFAQSchema(article.faq)}
      />
      
      <Schema 
        type="BreadcrumbList"
        data={generateBreadcrumbSchema([
          { name: 'Poradna', url: 'https://elektrikar-praha.com/poradna' },
          { name: article.title, url: `https://elektrikar-praha.com/poradna/${article.slug}` }
        ])}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-slate-950 text-white pt-32 pb-16">
          <div className="container mx-auto px-6">
            <Breadcrumbs items={[
              { name: 'Poradna', url: '/poradna' },
              { name: article.title, url: `/poradna/${article.slug}` }
            ]} />
            
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-md mb-6">
                <span className="text-xs font-bold tracking-wide text-amber-400">{article.category}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {article.h1}
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed">
                {article.intro}
              </p>
            </div>
          </div>
        </section>
        
        {/* Problem */}
        <SectionReveal>
        <section className="py-16 bg-amber-50 border-y-4 border-amber-300">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-amber-900">{article.problem.title}</h2>
              <p className="text-lg text-slate-800 leading-relaxed">
                {article.problem.description}
              </p>
            </div>
          </div>
        </section>
        </SectionReveal>
        
        {/* Causes */}
        <SectionReveal>
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Typické příčiny</h2>
              <ul className="space-y-3">
                {article.causes.map((cause, i) => (
                  <li key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                    <CheckCircle2 className="text-amber-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700">{cause}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        </SectionReveal>
        
        {/* What To Do */}
        <SectionReveal>
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">{article.whatToDo.title}</h2>
              <ol className="space-y-4">
                {article.whatToDo.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-4 p-5 bg-white rounded-xl border-l-4 border-amber-500">
                    <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-slate-800 leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
        </SectionReveal>
        
        {/* When To Call */}
        <SectionReveal>
        <section className="py-16 bg-red-50 border-y-4 border-red-500">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <AlertTriangle className="text-red-600" size={32} />
                <h2 className="text-3xl font-bold text-red-900">{article.whenToCall.title}</h2>
              </div>
              
              <ul className="space-y-3">
                {article.whenToCall.signs.map((sign, i) => (
                  <li key={i} className="flex items-start gap-3 p-5 bg-white rounded-lg border-l-4 border-red-500">
                    <AlertTriangle className="text-red-600 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-800 font-medium">{sign}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 text-center">
                <a 
                  href="tel:+420777889581"
                  className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl transition-colors shadow-lg font-bold text-lg"
                >
                  <Phone size={24} className="fill-white" />
                  <span>Zavolat hned: 777 889 581</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        </SectionReveal>
        
        {/* Prevention */}
        <SectionReveal>
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Lightbulb className="text-amber-600" size={32} />
                <h2 className="text-3xl font-bold">{article.prevention.title}</h2>
              </div>
              
              <ul className="space-y-3">
                {article.prevention.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 p-5 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                    <Lightbulb className="text-amber-600 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-800">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        </SectionReveal>
        
        {/* FAQ */}
        <SectionReveal>
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-10">Často kladené otázky</h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {article.faq.map((item, i) => (
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
        
        {/* CTA */}
        <SectionReveal>
        <section className="py-20 bg-slate-950 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Potřebujete pomoc elektrikáře?</h2>
                <p className="text-slate-300 text-xl">Zavolejte nebo napište – poradím a domluvím termín</p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-10">
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
