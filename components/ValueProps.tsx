export default function ValueProps() {
  const items = [
    { title: "تركيبة فعّالة", desc: "نتائج سريعة على أصعب البقع" },
    { title: "أسعار تنافسية", desc: "قيمة عالية مقابل الثمن" },
    { title: "مناسبة للمنازل والمطاعم", desc: "اعتمادية للاستخدام اليومي" },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((it) => (
        <div key={it.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-soft">
          <h3 className="mb-1 text-lg font-extrabold">{it.title}</h3>
          <p className="text-gray-600">{it.desc}</p>
        </div>
      ))}
    </div>
  );
}




