"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { useCart } from "@/lib/cart";
import { buildWhatsAppLink, logEvent } from "@/lib/products";
import { Minus, Plus, Trash2, ShoppingCart, Store, Rocket } from "lucide-react";
import Image from "next/image";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } = useCart();

  const handleOrder = () => {
    if (items.length === 0) return;
    
    const orderText = items
      .map((item) => `${item.product.name} - ${item.liters}L (${item.quantity}x) - ${(item.product.priceDh / parseFloat(item.product.volume) * item.liters).toFixed(2)} درهم`)
      .join('\n');
    
    const total = getTotalPrice().toFixed(2);
    const message = `مرحبا، أريد طلب:\n\n${orderText}\n\nالمجموع: ${total} درهم`;
    
    logEvent("Cart order", { items: items.length, total });
    window.open(buildWhatsAppLink(message), "_blank");
  };

  if (items.length === 0) {
    return (
      <main>
        <Header />
        <Section title="سلة التسوق" subtitle="سلة التسوق فارغة حالياً">
          <div className="text-center py-12">
            <div className="mb-6">
              <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">سلة التسوق فارغة</h3>
              <p className="text-gray-500 mb-6">اكتشف منتجاتنا الرائعة وأضف ما يناسبك</p>
            </div>
            <a href="/catalog" className="btn btn-primary text-lg px-8 py-4 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary shadow-lg inline-flex items-center justify-center gap-2">
              <Store className="h-5 w-5" />
              <span>ابدأ التسوق الآن</span>
            </a>
          </div>
        </Section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />
      <Section title="سلة التسوق" subtitle={`${items.length} منتج مُحدد - جاهز للطلب`}>
        <div className="space-y-4">
          {items.map((item) => {
            const pricePerLiter = item.product.priceDh / parseFloat(item.product.volume);
            const itemTotal = pricePerLiter * item.liters;
            
            return (
              <div key={item.product.id} className="flex items-center gap-4 bg-white border-2 border-gray-100 rounded-2xl p-5 shadow-soft hover:shadow-lg hover:border-primary/20 transition-all duration-200">
                <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 via-white to-gray-100 shrink-0 p-2">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-dark mb-1">{item.product.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{pricePerLiter.toFixed(2)} درهم/لتر</p>
                  <p className="text-xs text-gray-500">{item.product.volume} للوحدة الواحدة</p>
                </div>
                
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-2">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.liters - parseFloat(item.product.volume))}
                    className="p-2 hover:bg-white hover:text-primary rounded-lg transition-all duration-200 shadow-sm"
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <div className="min-w-[80px] text-center bg-white rounded-lg px-3 py-2 shadow-sm">
                    <div className="font-bold text-sm">{item.quantity}x</div>
                    <div className="text-xs text-gray-500">({item.liters}L)</div>
                  </div>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.liters + parseFloat(item.product.volume))}
                    className="p-2 hover:bg-white hover:text-primary rounded-lg transition-all duration-200 shadow-sm"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="text-right">
                  <p className="font-bold text-lg text-primary">{itemTotal.toFixed(2)} درهم</p>
                  <p className="text-xs text-gray-500">السعر الإجمالي</p>
                </div>
                
                <button
                  onClick={() => removeItem(item.product.id)}
                  className="p-3 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-200"
                  title="حذف من السلة"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 border-2 border-gray-200">
          <div className="text-center mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-medium text-gray-700">إجمالي العناصر:</span>
              <span className="text-lg font-bold">{items.reduce((sum, item) => sum + item.quantity, 0)} قطعة</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold text-gray-800">المبلغ الإجمالي:</span>
              <span className="text-3xl font-extrabold text-primary">{getTotalPrice().toFixed(2)} درهم</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">شامل جميع الضرائب • توصيل مجاني للطلبات فوق 100 درهم</p>
          </div>
          
          <div className="space-y-3">
            <button 
              onClick={handleOrder} 
              className="w-full btn btn-primary text-lg py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg font-bold inline-flex items-center justify-center gap-2"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
              </svg>
              <span>أكمل الطلب عبر واتساب</span>
            </button>
            <button 
              onClick={clearCart} 
              className="w-full btn btn-secondary text-sm py-3 hover:bg-gray-200 inline-flex items-center justify-center gap-2"
            >
              <Trash2 className="h-4 w-4" />
              <span>إفراغ السلة</span>
            </button>
          </div>
        </div>
      </Section>
      <Footer />
    </main>
  );
}

