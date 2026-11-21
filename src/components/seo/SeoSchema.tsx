import { useEffect } from 'react';
import { CalculatorDefinition } from '../../data/calculators';

interface SeoSchemaProps {
  calculator?: CalculatorDefinition;
  canonicalPath: string;
}

function upsertMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function SeoSchema({ calculator, canonicalPath }: SeoSchemaProps) {
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : 'https://ultimatrixcalculator.com';
  const normalizedPath = canonicalPath === '/' ? '/' : canonicalPath.replace(/\/+$/, '');
  const fullUrl = `${origin}${normalizedPath}`;

  const title = calculator
    ? calculator.metaTitle
    : 'Ultimatrix Calculator – Precision Multi-Calculator Suite';
  const description = calculator
    ? calculator.metaDescription
    : 'Calculate BMI, EMI, SIP, GST, Age, Dates, CGPA, GPA, Percentages, Discounts, and Scientific math instantly with Ultimatrix Calculator.';

  useEffect(() => {
    document.title = title;
    upsertMetaTag('name', 'description', description);
    upsertMetaTag('property', 'og:title', title);
    upsertMetaTag('property', 'og:description', description);
    upsertMetaTag('property', 'og:url', fullUrl);
    upsertMetaTag('name', 'twitter:title', title);
    upsertMetaTag('name', 'twitter:description', description);
    upsertCanonical(fullUrl);
  }, [title, description, fullUrl]);

  const jsonLdGraph = calculator
    ? [
        {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: calculator.name,
          url: fullUrl,
          applicationCategory: 'UtilitiesApplication',
          operatingSystem: 'All',
          description: calculator.metaDescription,
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Ultimatrix Calculator',
            url: origin,
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${origin}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: calculator.category,
              item: `${origin}/#${calculator.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: calculator.name,
              item: fullUrl,
            },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: calculator.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      ]
    : [
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Ultimatrix Calculator',
          url: origin,
          description,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Ultimatrix Calculator',
          url: origin,
          applicationCategory: 'UtilitiesApplication',
          operatingSystem: 'All',
          description,
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        },
      ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
    />
  );
}
