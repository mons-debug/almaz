"use client";
import SafeImage from "./SafeImage";
import Link from "next/link";
import { Product, buildWhatsAppLink, logEvent } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { ShoppingCart, Star, Sparkles } from "lucide-react";
import { useState } from "react";
import AddToCartModal from "./AddToCartModal";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const message = `مرحبا، أريد طلب ${product.name} (${product.volume}) بسعر ${product.priceDh} درهم.`;
  const firstTwo = product.benefits.slice(0, 2);

  const handleAddToCart = () => {
    const liters = parseFloat(product.volume) * quantity;
    addItem(product, quantity, liters);
    setShowModal(true);
    logEvent("Product added to cart", { id: product.id, quantity, liters });
  };

  return (
    <>
      <div className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-soft transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-primary/20">
        {/* Premium Badge */}
        <div className="absolute top-3 left-3 z-10">
          <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-accent to-yellow-400 px-2 py-1 text-xs font-bold text-dark shadow-md">
            <Sparkles className="h-3 w-3" />
            <span>مميز</span>
          </div>
        </div>

        <div className="relative mx-auto h-52 w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 via-white to-gray-100 p-3">
          <SafeImage
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
        
        <div className="mt-4 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-extrabold text-lg leading-tight text-dark group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <div className="text-right">
              <div className="rounded-xl bg-gradient-to-r from-primary to-blue-600 px-3 py-2 text-sm font-bold text-white shadow-md">
                {product.priceDh} درهم
              </div>
              <div className="text-xs text-gray-500 mt-1">{product.volume}</div>
            </div>
          </div>
          
          <p className="text-sm text-gray-700 mb-3 leading-relaxed">{product.short}</p>
          
          {/* Enhanced Benefits */}
          <div className="flex flex-wrap gap-2 mb-4">
            {firstTwo.map((benefit, index) => (
              <span 
                key={benefit} 
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium border-2 transition-all hover:scale-105 ${
                  index === 0 
                    ? 'bg-success/10 text-success border-success/20' 
                    : 'bg-primary/10 text-primary border-primary/20'
                }`}
              >
                <Star className="h-3 w-3" />
                {benefit}
              </span>
            ))}
          </div>
          
          {/* Enhanced Quantity selector */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 mb-2 block">اختر الكمية:</label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-full text-sm border-2 border-gray-200 rounded-xl px-3 py-2 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            >
              {[1, 2, 3, 4, 5].map((q) => (
                <option key={q} value={q}>
                  {q}x ({parseFloat(product.volume) * q}L) - {(product.priceDh * q).toFixed(2)} درهم
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="mt-auto space-y-3">
          <div className="flex gap-3">
            <Link
              href={`/product/${encodeURIComponent(product.slug)}`}
              className="btn btn-secondary flex-1 text-sm py-3 font-bold hover:bg-accent/90 transition-all"
              onClick={() => logEvent("Product viewed", { id: product.id })}
            >
              عرض التفاصيل
            </Link>
            <button
              onClick={handleAddToCart}
              className="btn btn-primary flex-1 text-sm py-3 flex items-center justify-center gap-2 font-bold bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary shadow-lg hover:shadow-xl transition-all"
            >
              <ShoppingCart className="h-4 w-4" />
              أضف للسلة
            </button>
          </div>
          
          <a
            href={buildWhatsAppLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn w-full text-sm py-3 font-bold bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
            onClick={() => logEvent("CTA clicked", { id: product.id })}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
            </svg>
            <span>اطلب فوراً عبر واتساب</span>
          </a>
        </div>
      </div>

      <AddToCartModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        product={product}
        quantity={quantity}
      />
    </>
  );
}

