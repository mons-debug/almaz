"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <main>
      <Header />
      <Section title="اتصل بنا" subtitle="نبحث عن موزعين وشركاء — فرص توسع قوية">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <p>
              يسعدنا تواصلكم معنا للتوزيع أو الشراكات. منتجات ALMAZ معروفة بجودتها
              العالية وفعاليتها الكبيرة.
            </p>
            <WhatsAppButton message="أرغب في مناقشة التوزيع والشراكة" />
          </div>
          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              // Simple DX logger as requested
              console.log("Contact form submitted", { name, phone, message });
              alert("تم الإرسال! سنعود إليك قريبًا.");
              setName("");
              setPhone("");
              setMessage("");
            }}
          >
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="الاسم"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2"
            />
            <input
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="الهاتف"
              inputMode="tel"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2"
            />
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="رسالتك"
              rows={5}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2"
            />
            <button type="submit" className="btn btn-primary">إرسال</button>
          </form>
        </div>
      </Section>
      <Footer />
    </main>
  );
}




