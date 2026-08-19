import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const SITE_URL = "https://example.com"; // TODO: replace with your deployed domain

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects"].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
