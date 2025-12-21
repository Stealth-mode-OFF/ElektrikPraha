import { Link } from 'react-router-dom';
import { blogArticles } from '../data/blog';
import { MetaTags } from '../components/SEO/MetaTags';
import { Breadcrumbs } from '../components/SEO/Breadcrumbs';
import { BookOpen, ArrowRight } from 'lucide-react';
import { SectionReveal } from '../components/SectionReveal';

const categories = ['Poruchy', 'Revize', 'Rekonstrukce', 'Spotřebiče', 'Bezpečnost'] as const;

export function BlogHub() {
  return (
    <>
      <MetaTags 
        title="Poradna elektrikáře – Návody, první pomoc | Jaroslav Soukup"
        description="Poradna elektrikáře: Vypadává jistič? Nefunguje zásuvka? Návody, první pomoc, kdy volat elektrikáře. Praha."
        canonical="https://elektrikar-praha.com/poradna"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-slate-950 text-white pt-32 pb-16">
          <div className="container mx-auto px-6">
            <Breadcrumbs items={[
              { name: 'Poradna', url: '/poradna' }
            ]} />
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-amber-500" size={40} />
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Poradna elektrikáře
                </h1>
              </div>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Praktické návody, první pomoc a rady, kdy je potřeba zavolat elektrikáře. Vše jednoduše a srozumitelně.
              </p>
            </div>
          </div>
        </section>
        
        {/* Articles by Category */}
        {categories.map((category) => {
          const articlesInCategory = blogArticles.filter(a => a.category === category);
          
          if (articlesInCategory.length === 0) return null;
          
          return (
            <SectionReveal key={category}>
            <section className="py-16 odd:bg-slate-50">
              <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl font-bold mb-10">{category}</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {articlesInCategory.map((article) => (
                      <Link 
                        key={article.id}
                        to={`/poradna/${article.slug}`}
                        className="group bg-white hover:bg-amber-50 p-6 rounded-2xl border-2 border-slate-200 hover:border-amber-300 transition-all shadow-sm hover:shadow-lg"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold mb-3">
                              {article.category}
                            </span>
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                              {article.title}
                            </h3>
                          </div>
                          <ArrowRight className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-4" size={20} />
                        </div>
                        
                        <p className="text-sm text-slate-600 line-clamp-2">
                          {article.intro}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            </SectionReveal>
          );
        })}
        
        {/* CTA */}
        <SectionReveal>
        <section className="py-20 bg-slate-950 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Nenašli jste odpověď?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Zavolejte – rád poradím a zodpovím vaše dotazy
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
