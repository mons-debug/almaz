export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 text-sm text-gray-600">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <strong className="text-dark">ALMAZ</strong> — منظفات فعّالة بسعر مناسب
          </div>
          <div className="flex flex-wrap gap-3">
            <span>الهاتف: 06 00 00 00 00</span>
            <span>واتساب: +212 6 54 82 99 12</span>
            <span>العنوان: طنجة، المغرب</span>
          </div>
        </div>
        <div className="mt-4 text-xs">© {new Date().getFullYear()} ALMAZ</div>
      </div>
    </footer>
  );
}




