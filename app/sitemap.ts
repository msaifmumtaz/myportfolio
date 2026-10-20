import { MetadataRoute } from 'next';
import { getSortedProjectsData } from '@/lib/projects';
import { getGuides } from '@/lib/guides';
import { servicePages } from '@/data/service-pages';
import { siteUrl } from '@/lib/seo';

// The blog is noindexed for now, so its posts are left out of the sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages. No lastModified: a date that changes on every deploy teaches Google to ignore it.
  const routes = [
    { path: '', priority: 1 },
    { path: '/about', priority: 0.8 },
    { path: '/services', priority: 0.9 },
    { path: '/projects', priority: 0.8 },
    { path: '/guides', priority: 0.6 },
    { path: '/contact', priority: 0.7 },
    { path: '/privacy', priority: 0.3 },
  ].map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: 'monthly' as const,
    priority,
  }));

  // Projects: `updated` comes from each case study's front matter.
  const projects = getSortedProjectsData().map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    ...(project.updated && { lastModified: new Date(project.updated) }),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Service pages and guides carry their own `updated` dates.
  const services = servicePages.map((page) => ({
    url: `${siteUrl}/services/${page.slug}`,
    lastModified: new Date(page.updated),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const guides = getGuides().map((guide) => ({
    url: `${siteUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.updated),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...services, ...guides, ...projects];
}
