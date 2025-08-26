export default function Testimonials() {
  const items = [
    {
      name: "أحمد",
      text: "منتجات رائعة فعلاً، خاصة QUITAGRASA لدهون المطبخ الصعبة!",
    },
    { name: "سارة", text: "السعر مناسب والجودة ممتازة. أنصح بها!" },
    { name: "يوسف", text: "منتجات موثوقة للمطاعم والمقاهي." },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((t) => (
        <figure
          key={t.name}
          className="rounded-2xl border border-gray-200 bg-white p-5 shadow-soft"
        >
          <blockquote className="text-sm text-gray-700">“{t.text}”</blockquote>
          <figcaption className="mt-2 text-xs text-gray-500">— {t.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}




