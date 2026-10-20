import type { Metadata } from "next";
import { aboutPageContent, footerContent, servicesContent, siteConfig, socialLinks } from "@/data/config";

export const siteUrl = `https://${siteConfig.base_url}`;
export const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();

type PageSeo = { title: string; description: string; path: string; image?: string; absoluteTitle?: boolean; noindex?: boolean };

// Next.js merges metadata shallowly, so every page sets its own full openGraph/twitter objects.
// Defining openGraph here drops the inherited opengraph-image files, so the image is always linked
// explicitly: the site-wide card by default, or a route's own card (e.g. /projects/<slug>/opengraph-image).
export function pageMetadata({ title, description, path, image = "/opengraph-image", absoluteTitle, noindex }: PageSeo): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.brand}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: siteConfig.brand, locale: "en_US", url: path, title: fullTitle, description, images: image },
    twitter: { card: "summary_large_image", creator: siteConfig.twitter_handle, title: fullTitle, description, images: image },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}

const personId = `${siteUrl}/#person`;
const phone = `+${socialLinks.phone.match(/wa\.me\/(\d+)/)?.[1]}`;
const address = { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" };

export const personJsonLd = {
  "@type": "Person",
  "@id": personId,
  name: siteConfig.author,
  url: `${siteUrl}/`,
  image: absoluteUrl("/profile.png"),
  jobTitle: "AI Engineer & Full-Stack Developer",
  email: `mailto:${socialLinks.email}`,
  telephone: phone,
  address,
  alumniOf: { "@type": "CollegeOrUniversity", name: aboutPageContent.education[0].school },
  knowsAbout: ["Artificial Intelligence", "Machine Learning", "Large Language Models", "Retrieval-Augmented Generation", "AI Agents", "Full-Stack Web Development", "SaaS Development", "Python", "Next.js", "Cloud Infrastructure"],
  sameAs: [...footerContent.columns[0].links.map(link => link.href), socialLinks.twitter],
};

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: `${siteUrl}/`,
  name: siteConfig.brand,
  inLanguage: siteConfig.language,
  publisher: { "@id": personId },
};

// "$100 – $500" -> range, "$200" -> fixed price, "$1,500" + "/ month, starting" -> monthly minimum.
// "Fixed quote" has no number, so that offer is listed without a price.
function priceSpecification(price: string, note: string) {
  const numbers = price.match(/[\d,]+/g);
  if (!numbers) return undefined;
  const [min, max] = numbers.map(value => Number(value.replace(/,/g, "")));
  const monthly = note.includes("month");
  const base = { "@type": monthly ? "UnitPriceSpecification" : "PriceSpecification", priceCurrency: "USD", ...(monthly && { unitCode: "MON" }) };
  return max || note.includes("starting") ? { ...base, minPrice: min, ...(max && { maxPrice: max }) } : { ...base, price: min };
}

export function servicesJsonLd() {
  const { packages, retainer } = servicesContent;
  const offers = [...packages, { ...retainer, title: `${retainer.title}: ${retainer.subtitle}` }].map(service => serviceOffer(service));
  return {
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/services#business`,
    name: siteConfig.brand,
    url: absoluteUrl("/services"),
    image: absoluteUrl("/opengraph-image"),
    email: socialLinks.email,
    telephone: phone,
    address,
    areaServed: "Worldwide",
    founder: { "@id": personId },
    makesOffer: offers,
  };
}

type ServiceOffer = { slug: string; title: string; price: string; price_note: string; description: string; page?: string };

function serviceOffer(service: ServiceOffer) {
  const priceSpec = priceSpecification(service.price, service.price_note);
  return {
    "@type": "Offer",
    url: absoluteUrl(service.page ?? `/services#${service.slug}`),
    ...(priceSpec && { priceSpecification: priceSpec }),
    itemOffered: { "@type": "Service", name: service.title, description: service.description },
  };
}

// A dedicated /services/<slug> page: the service itself, provided by the person behind the site.
export function serviceJsonLd(service: ServiceOffer & { page: string }, name: string) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(service.page)}#service`,
    name,
    serviceType: service.title,
    description: service.description,
    url: absoluteUrl(service.page),
    areaServed: "Worldwide",
    provider: { "@id": personId, "@type": "Person", name: siteConfig.author },
    offers: serviceOffer(service),
  };
}

export function articleJsonLd({ title, description, path, updated }: { title: string; description: string; path: string; updated: string }) {
  return {
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    dateModified: updated,
    image: absoluteUrl("/opengraph-image"),
    author: { "@id": personId, "@type": "Person", name: siteConfig.author, url: `${siteUrl}/` },
    publisher: { "@id": personId },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.path) })),
  };
}
