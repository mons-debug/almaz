"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import WhatsAppButton from "./WhatsAppButton";
import Image from "next/image";
import { Menu, X, ShoppingCart, Store, Handshake, Phone } from "lucide-react";
import { useCart } from "@/lib/cart";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { items } = useCart();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 ${
        scrolled ? "shadow" : ""
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        {/* Mobile menu button */}
        <button
          className="flex sm:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="فتح القائمة"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Logo - centered on mobile */}
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 sm:static sm:transform-none">
          <Image src="/almz/logo.png" alt="ALMAZ" width={40} height={40} priority className="sm:w-12 sm:h-12 w-10 h-10" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-8 sm:flex">
          <Link href="/catalog" className="font-medium text-gray-700 hover:text-primary transition-all duration-200 hover:scale-105 relative group inline-flex items-center gap-2">
            <Store className="h-4 w-4" />
            <span>تسوق منتجاتنا</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></div>
          </Link>
          <a href="#partners" className="font-medium text-gray-700 hover:text-primary transition-all duration-200 hover:scale-105 relative group inline-flex items-center gap-2">
            <Handshake className="h-4 w-4" />
            <span>شركاؤنا</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></div>
          </a>
          <Link href="/contact" className="font-medium text-gray-700 hover:text-primary transition-all duration-200 hover:scale-105 relative group inline-flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>اتصل بنا</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></div>
          </Link>
        </nav>

        {/* Cart and WhatsApp */}
        <div className="flex items-center gap-3">
          <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-105 group">
            <ShoppingCart className="h-6 w-6 transition-colors group-hover:text-primary" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-primary to-blue-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                {totalItems}
              </span>
            )}
          </Link>
          <div className="hidden sm:block">
            <WhatsAppButton size="sm" />
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg sm:hidden">
          <nav className="flex flex-col p-4 space-y-3">
            <Link 
              href="/catalog" 
              className="text-center py-3 px-4 hover:text-primary hover:bg-gray-50 rounded-xl transition-all font-medium inline-flex items-center justify-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Store className="h-4 w-4" />
              <span>تسوق منتجاتنا</span>
            </Link>
            <a 
              href="#partners" 
              className="text-center py-3 px-4 hover:text-primary hover:bg-gray-50 rounded-xl transition-all font-medium inline-flex items-center justify-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Handshake className="h-4 w-4" />
              <span>شركاؤنا</span>
            </a>
            <Link 
              href="/contact" 
              className="text-center py-3 px-4 hover:text-primary hover:bg-gray-50 rounded-xl transition-all font-medium inline-flex items-center justify-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="h-4 w-4" />
              <span>اتصل بنا</span>
            </Link>
            <div className="pt-2 border-t border-gray-100">
              <WhatsAppButton size="sm" className="w-full" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

