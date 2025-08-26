import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroQuitagrasa from "@/components/HeroQuitagrasa";
import FeatureBadges from "@/components/FeatureBadges";
import Section from "@/components/Section";
import ProductGrid from "@/components/ProductGrid";
import Testimonials from "@/components/Testimonials";
import PartnersStrip from "@/components/PartnersStrip";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import ValueProps from "@/components/ValueProps";
import UseCasesStrip from "@/components/UseCasesStrip";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroQuitagrasa />

      <Section title="لماذا ألماز؟" subtitle="تركيبة فعّالة وأسعار تنافسية">
        <FeatureBadges />
        <ValueProps />
      </Section>

      <Section title="منتجاتنا" subtitle="أفضل الاختيارات" id="products">
        <ProductGrid products={products.slice(0, 4)} />
      </Section>

      <Section>
        <UseCasesStrip />
      </Section>

      <Section title="عملاؤنا">
        <PartnersStrip />
      </Section>

      <Section title="آراء الزبائن">
        <Testimonials />
      </Section>

      <WhatsAppCTA />
      <Footer />
    </main>
  );
}

