import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-2 text-sm flex-wrap">
        <li>
          <Link 
            to="/" 
            className="flex items-center gap-1 text-slate-600 hover:text-amber-600 transition-colors"
          >
            <Home size={16} />
            <span>Domů</span>
          </Link>
        </li>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight size={16} className="text-slate-400" />
              {isLast ? (
                <span className="text-slate-900 font-medium">{item.name}</span>
              ) : (
                <Link 
                  to={item.url}
                  className="text-slate-600 hover:text-amber-600 transition-colors"
                >
                  {item.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
