import WhatsAppButton from "./WhatsAppButton";

export default function WhatsAppCTA() {
  return (
    <section className="mx-auto my-10 w-full max-w-6xl rounded-3xl bg-primary/10 p-6 text-center">
      <h3 className="mb-2 text-2xl font-extrabold">جاهز لطلبك؟ تواصل معنا الآن</h3>
      <WhatsAppButton size="lg" />
    </section>
  );
}


