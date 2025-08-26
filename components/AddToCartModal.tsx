"use client";
import { useEffect, useState } from "react";
import { CheckCircle, ShoppingCart, X, ArrowRight } from "lucide-react";
import { Product } from "@/lib/products";
import SafeImage from "./SafeImage";
import { useCart } from "@/lib/cart";
import { useToastContext } from "./ClientLayout";

interface AddToCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  quantity: number;
}

export default function AddToCartModal({
  isOpen,
  onClose,
  product,
  quantity,
}: AddToCartModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { getTotalPrice, items } = useCart();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setShowSuccess(true);
      // Auto close after 3 seconds
      const timer = setTimeout(() => {
        handleClose();
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setShowSuccess(false);
      const timer = setTimeout(() => setIsVisible(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setShowSuccess(false);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`relative mx-4 w-full max-w-md transform transition-all duration-200 ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4"
        }`}
      >
        <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
          {/* Header */}
          <div className="relative bg-gradient-to-br from-success to-green-500 px-6 pt-6 pb-4">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-3 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <CheckCircle className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold">تمت الإضافة بنجاح!</h3>
                <p className="text-sm text-white/90">تم إضافة المنتج إلى سلة التسوق</p>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-gradient-to-b from-gray-50 to-gray-100 shrink-0">
                <SafeImage
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900">{product.name}</h4>
                <p className="text-sm text-gray-600">{product.volume} - {product.priceDh} درهم</p>
                <p className="text-sm font-medium text-success">الكمية: {quantity}</p>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="mb-6 rounded-xl bg-gray-50 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">إجمالي العناصر في السلة:</span>
                <span className="font-bold">{totalItems}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">إجمالي المبلغ:</span>
                <span className="text-lg font-bold text-primary">{getTotalPrice().toFixed(2)} درهم</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleClose}
                className="w-full rounded-xl bg-gray-100 px-4 py-3 font-medium text-gray-700 transition-all hover:bg-gray-200 hover:scale-[1.01] active:scale-[0.99]"
              >
                متابعة التسوق
              </button>
              
              <a
                href="/cart"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-bold text-white transition-all hover:bg-blue-600 hover:scale-[1.01] active:scale-[0.99] shadow-lg"
                onClick={handleClose}
              >
                <ShoppingCart className="h-5 w-5" />
                <span>عرض السلة</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
