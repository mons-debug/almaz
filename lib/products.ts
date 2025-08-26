export type Product = {
  id: string;
  slug: string;
  name: string; // Arabic
  short: string; // short tagline
  priceDh: number;
  volume: string; // "5L"
  benefits: string[]; // 3–4 bullets
  category: "مطبخ" | "متعدد" | "تعقيم" | "أرضيات";
  image: string; // /almz/...
  label: string; // poster-style label image if needed
};

export const products: Product[] = [
  {
    id: "qg",
    slug: "quítagrasa",
    name: "ALMAZ QUITAGRASA",
    short: "إزالة فائقة للدهون",
    priceDh: 40,
    volume: "5L",
    benefits: ["يحمي اليدين", "يزيل أصعب البقع", "يقضي على الجراثيم"],
    category: "مطبخ",
    image: "/almz/quitagrasa-bottle.png",
    label: "/almz/quitagrasa-label.png",
  },
  {
    id: "dw",
    slug: "dishwashing",
    name: "سائل غسيل الأواني",
    short: "إحمي يديك وأطباق لامعة",
    priceDh: 35,
    volume: "5L",
    benefits: ["لطيف على اليدين", "مع لمعان قوي", "مضاد للبكتيريا"],
    category: "مطبخ",
    image: "/almz/dishwashing-bottle.png",
    label: "/almz/dishwashing-label.png",
  },
  {
    id: "jv",
    slug: "javel",
    name: "ALMAZ JAVEL أصلي",
    short: "يقضي على 99,9% من البكتيريا",
    priceDh: 25,
    volume: "5L",
    benefits: ["يحمي الألياف", "يزيل البقع", "تعقيم فعال"],
    category: "تعقيم",
    image: "/almz/javel-bottle.png",
    label: "/almz/javel-label.png",
  },
  {
    id: "mp",
    slug: "multipurpose",
    name: "صابون متعدد الاستعمال",
    short: "تنظيف فوري وفعّال",
    priceDh: 20,
    volume: "5L",
    benefits: ["يقضي على البقع", "يلمع", "للأواني والملابس"],
    category: "متعدد",
    image: "/almz/multipurpose-bottle.png",
    label: "/almz/multipurpose-label.png",
  },
];

export const findBySlug = (slug: string) => products.find((p) => p.slug === slug);

export const WHATSAPP_PHONE = "+212654829912";
export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/212654829912?text=${encodeURIComponent(message)}`;

export const logEvent = (name: string, data?: unknown) => {
  // Simple analytics logger as requested
  if (typeof window !== "undefined") {
    console.log(`[ALMAZ] ${name}`, data ?? {});
  }
};




