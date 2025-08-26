import { FlaskConical, BadgeDollarSign, Home } from "lucide-react";

const items = [
  { icon: FlaskConical, text: "تركيبة فعّالة" },
  { icon: BadgeDollarSign, text: "أسعار تنافسية" },
  { icon: Home, text: "مناسبة للمنازل والمطاعم" },
];

export default function FeatureBadges() {
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {items.map(({ icon: Icon, text }) => (
        <span key={text} className="pill">
          <Icon className="ms-1 h-4 w-4" /> {text}
        </span>
      ))}
    </div>
  );
}




