import SafeImage from "@/components/SafeImage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductGrid from "@/components/ProductGrid";
import { findBySlug, products } from "@/lib/products";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = findBySlug(decodeURIComponent(params.slug));
  if (!product) return notFound();
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  const message = `مرحبا، أريد طلب ${product.name} (${product.volume}) بسعر ${product.priceDh} درهم.`;

  return (
    <main>
      <Header />
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-gradient-to-b from-gray-50 to-gray-100 md:h-[520px]">
            <SafeImage
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="mb-2 text-3xl font-extrabold">{product.name}</h1>
            <p className="mb-4 text-gray-600">{product.short}</p>
            <div className="mb-4 flex items-center gap-3">
              <span className="pill text-sm">السعة: {product.volume}</span>
              <span className="pill bg-accent/80 font-bold text-dark">{product.priceDh} درهم</span>
            </div>
            <div className="mb-6 flex flex-wrap gap-2">
              {product.benefits.map((b) => (
                <span key={b} className="pill">
                  {b}
                </span>
              ))}
            </div>
            <div className="prose mb-6 max-w-none text-right prose-p:leading-7">
              <h3 className="text-xl font-bold">مكونات مختصرة</h3>
              <p>
                تركيبة منظفات عالية الفعالية مع عوامل إزالة الشحوم والتعقيم. خالٍ من
                المواد القاسية على اليدين.
              </p>
              <h3 className="mt-4 text-xl font-bold">طريقة الاستعمال</h3>
              <ul className="list-disc pr-5">
                <li>يخفف حسب الحاجة مع الماء الدافئ.</li>
                <li>يطبق مباشرة على البقع الصعبة.</li>
                <li>يشطف جيدًا ويُجفف السطح.</li>
              </ul>
            </div>
            <div className="fixed inset-x-4 bottom-4 z-50 md:static md:inset-auto">
              <WhatsAppButton message={message} className="w-full" />
            </div>
          </div>
        </div>
      </Section>

      <Section title="مقترحات أخرى">
        <ProductGrid products={related} />
      </Section>
      <Footer />
    </main>
  );
}

