import { Phone, MessageCircle, MapPin, Mail, Clock, Shield, Truck, Award } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/almz/logo.png" alt="ALMAZ" width={40} height={40} />
              <div>
                <h3 className="text-xl font-bold text-dark">ALMAZ</h3>
                <p className="text-sm text-gray-600">منظفات فعّالة بسعر مناسب</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              علامة ALMAZ الرائدة في مجال المنظفات المنزلية والصناعية. نقدم منتجات عالية الجودة بأسعار تنافسية لضمان نظافة مثالية.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Award className="h-4 w-4 text-primary" />
              <span>جودة مضمونة - أسعار تنافسية</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-dark">معلومات التواصل</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>الهاتف: 06 00 00 00 00</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MessageCircle className="h-4 w-4 text-green-600" />
                <span>واتساب: +212 6 54 82 99 12</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-red-500" />
                <span>العنوان: طنجة، المغرب</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-blue-500" />
                <span>info@almaz.ma</span>
              </div>
            </div>
          </div>

          {/* Business Hours & Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-dark">ساعات العمل</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary" />
                <div>
                  <p>الإثنين - الجمعة: 8:00 - 18:00</p>
                  <p>السبت: 9:00 - 17:00</p>
                  <p>الأحد: مغلق</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 pt-4">
              <h4 className="font-semibold text-dark">خدماتنا</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Truck className="h-3 w-3 text-primary" />
                  <span>توصيل مجاني للطلبات فوق 100 درهم</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-3 w-3 text-green-600" />
                  <span>ضمان الجودة</span>
                </div>
              </div>
            </div>
          </div>

          {/* Products & Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-dark">منتجاتنا</h3>
            <div className="space-y-2 text-sm">
              <a href="/catalog" className="block text-gray-700 hover:text-primary transition-colors">
                • سائل غسيل الأواني
              </a>
              <a href="/catalog" className="block text-gray-700 hover:text-primary transition-colors">
                • ALMAZ QUITAGRASA
              </a>
              <a href="/catalog" className="block text-gray-700 hover:text-primary transition-colors">
                • ALMAZ JAVEL
              </a>
              <a href="/catalog" className="block text-gray-700 hover:text-primary transition-colors">
                • صابون متعدد الاستعمال
              </a>
            </div>
            
            <div className="pt-4">
              <h4 className="font-semibold text-dark mb-2">روابط مهمة</h4>
              <div className="space-y-2 text-sm">
                <a href="/contact" className="block text-gray-700 hover:text-primary transition-colors">
                  • اتصل بنا
                </a>
                <a href="/catalog" className="block text-gray-700 hover:text-primary transition-colors">
                  • جميع المنتجات
                </a>
                <a href="#partners" className="block text-gray-700 hover:text-primary transition-colors">
                  • شركاؤنا
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} ALMAZ. جميع الحقوق محفوظة.
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>صُنع بعناية في المغرب</span>
              <span>•</span>
              <span>منتجات عالية الجودة</span>
              <span>•</span>
              <span>خدمة عملاء ممتازة</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}




