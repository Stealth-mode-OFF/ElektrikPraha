import { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

export function MetaTags({ 
  title, 
  description, 
  canonical, 
  ogType = 'website', 
  ogImage = '/og-image.png',
  twitterCard = 'summary_large_image'
}: MetaTagsProps) {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Update or create canonical link
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    }
    
    const currentUrl = canonical || window.location.href;
    const baseUrl = window.location.origin;
    const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
    
    // Open Graph tags (Facebook, LinkedIn, WhatsApp)
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: ogType },
      { property: 'og:url', content: currentUrl },
      { property: 'og:image', content: fullImageUrl },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: title },
      { property: 'og:locale', content: 'cs_CZ' },
      { property: 'og:site_name', content: 'Elektrikář Praha - Jaroslav Soukup' },
    ];
    
    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', tag.content);
    });
    
    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: twitterCard },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: fullImageUrl },
      { name: 'twitter:image:alt', content: title },
    ];
    
    twitterTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', tag.content);
    });
    
  }, [title, description, canonical, ogType, ogImage, twitterCard]);
  
  return null;
}