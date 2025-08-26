const partners = [
  "oxygen foot",
  "Chaoueni food",
  "Hafsa oued laou",
  "Nasim oued laou",
  "Snack osama oued laou",
  "Najib tex",
  "Stampa rs",
];

export default function PartnersStrip() {
  return (
    <div id="partners" className="relative overflow-hidden">
      <div className="animate-marquee flex w-[200%] gap-10 whitespace-nowrap">
        {[...partners, ...partners].map((p, i) => (
          <span
            key={`${p}-${i}`}
            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm"
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}




