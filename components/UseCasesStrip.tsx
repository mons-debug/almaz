const items = ["مطابخ", "مطاعم", "مقاهي", "مغاسل", "شركات التنظيف"];

export default function UseCasesStrip() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {items.map((t) => (
        <span key={t} className="pill bg-white">{t}</span>
      ))}
    </div>
  );
}


