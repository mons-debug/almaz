"use client";
import SafeImage from "./SafeImage";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

export default function HeroQuitagrasa() {
  return (
    <section className="bg-rays-gold">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-4 py-12 md:grid-cols-2">
        <div className="animate-fadeInUp text-center md:text-right">
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">قوة فائقة لإزالة الدهون</h1>
          <p className="mt-2 text-base text-white/80 sm:text-lg">
            ALMAZ QUITAGRASA — البطل الأكثر مبيعًا
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 md:justify-start">
            {[
              "يحمي اليدين",
              "يزيل أصعب البقع",
              "يقضي على الجراثيم",
            ].map((b) => (
              <span key={b} className="pill bg-white/80">
                {b}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row md:justify-start">
            <WhatsAppButton size="lg" />
            <Link href="/catalog" className="btn btn-secondary">
              تصفح المنتجات
            </Link>
          </div>
        </div>
        <div className="relative h-80 w-full overflow-hidden rounded-3xl md:h-[520px]">
          <SafeImage
            src="/almz/quitagrasa-bottle.png"
            alt="ALMAZ QUITAGRASA"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}

