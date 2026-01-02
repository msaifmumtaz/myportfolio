import { MetadataRoute } from 'next';
import { getSortedPostsData } from '@/lib/blog';
import { getSortedProjectsData } from '@/lib/projects';
import { siteConfig } from '@/data/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${siteConfig.base_url}`;
  
  // Static pages
  const routes = [
    '',
    '/about',
    '/projects',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog posts
  const posts = getSortedPostsData().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Projects
  const projects = getSortedProjectsData().map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...posts, ...projects];
}

