import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ALMAZ — منظفات فعّالة بسعر مناسب",
  description: "علامة ALMAZ لتنظيف المطابخ والمنازل والمطاعم بتركيبة فعّالة وأسعار تنافسية.",
  openGraph: {
    title: "ALMAZ — منظفات فعّالة بسعر مناسب",
    description: "علامة ALMAZ لتنظيف المطابخ والمنازل والمطاعم بتركيبة فعّالة وأسعار تنافسية.",
    type: "website",
    locale: "ar_MA",
    images: [
      { url: "/almz/quitagrasa-bottle.png", width: 1200, height: 630, alt: "ALMAZ QUITAGRASA" },
    ],
  },
  metadataBase: new URL("https://almaz.example"),
};

export const viewport: Viewport = {
  themeColor: "#1FB6FF",
};

import { CartProvider } from "@/lib/cart";
import { ToastProvider } from "@/components/ClientLayout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html dir="rtl" lang="ar">
      <body className={`${tajawal.variable} font-tajawal antialiased`}>
        <ToastProvider>
          <CartProvider>{children}</CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}

