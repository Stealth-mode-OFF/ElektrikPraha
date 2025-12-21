import { useEffect } from 'react';

interface SchemaProps {
  type: 'LocalBusiness' | 'Service' | 'FAQPage' | 'BreadcrumbList' | 'Organization';
  data: any;
}

export function Schema({ type, data }: SchemaProps) {
  useEffect(() => {
    const scriptId = `schema-${type}-${JSON.stringify(data).substring(0, 20)}`;
    
    // Remove existing script if it exists
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }
    
    // Create new script
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);
  
  return null;
}

// Helper functions to generate schema
export const generateLocalBusinessSchema = (location?: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  'name': 'Jaroslav Soukup - Elektrikář Praha',
  'image': 'https://elektrikar-praha.com/hero-image.jpg',
  'telephone': '+420777889581',
  'email': 'jar.soukup@seznam.cz',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Náměstí pplk. Vlčka 684/9',
    'addressLocality': location || 'Praha',
    'addressRegion': 'Praha',
    'postalCode': '198 00',
    'addressCountry': 'CZ'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': '50.0755',
    'longitude': '14.4378'
  },
  'areaServed': [
    {
      '@type': 'City',
      'name': 'Praha'
    },
    {
      '@type': 'City',
      'name': 'Černošice'
    },
    {
      '@type': 'City',
      'name': 'Říčany'
    }
  ],
  'priceRange': '$$',
  'openingHours': 'Mo-Su 00:00-24:00',
  'url': 'https://elektrikar-praha.com',
  'sameAs': [
    'https://www.facebook.com/elektrikar.jaroslav.soukup',
    'https://www.instagram.com/elektrikar.praha'
  ]
});

export const generateServiceSchema = (service: { title: string; description: string; pricing?: { basePrice: string } }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  'serviceType': service.title,
  'description': service.description,
  'provider': {
    '@type': 'Electrician',
    'name': 'Jaroslav Soukup',
    'telephone': '+420777889581'
  },
  'areaServed': {
    '@type': 'City',
    'name': 'Praha'
  },
  'offers': service.pricing ? {
    '@type': 'Offer',
    'price': service.pricing.basePrice.replace(/[^0-9]/g, ''),
    'priceCurrency': 'CZK'
  } : undefined
});

export const generateFAQSchema = (faq: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faq.map(item => ({
    '@type': 'Question',
    'name': item.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': item.answer
    }
  }))
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': items.map((item, index) => ({
    '@type': 'ListItem',
    'position': index + 1,
    'name': item.name,
    'item': item.url
  }))
});
