import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://almaz.example";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/catalog`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.5 },
    ...products.map((p) => ({
      url: `${base}/product/${encodeURIComponent(p.slug)}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

