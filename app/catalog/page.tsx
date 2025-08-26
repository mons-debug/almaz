"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProductGrid from "@/components/ProductGrid";
import { products as allProducts } from "@/lib/products";
import { useMemo, useState } from "react";

export default function CatalogPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | "الكل">("الكل");
  const [sort, setSort] = useState("الأكثر مبيعًا");

  const filtered = useMemo(() => {
    let list = allProducts.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    if (category !== "الكل") list = list.filter((p) => p.category === category);
    if (sort === "السعر") list = [...list].sort((a, b) => a.priceDh - b.priceDh);
    return list;
  }, [query, category, sort]);

  return (
    <main>
      <Header />
      <Section title="المنتجات" subtitle="تصفح كل التشكيلة">
        <div className="grid gap-3 sm:grid-cols-3">
          <input
            aria-label="ابحث بالاسم"
            placeholder="ابحث بالاسم"
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            aria-label="التصنيف"
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {[
              "الكل",
              "مطبخ",
              "متعدد",
              "تعقيم",
              "أرضيات",
            ].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select
            aria-label="ترتيب"
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            {["الأكثر مبيعًا", "السعر"].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </Section>
      <Section>
        <ProductGrid products={filtered} />
      </Section>
      <Footer />
    </main>
  );
}




