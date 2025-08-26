import { PropsWithChildren } from "react";

export default function Section({
  children,
  title,
  subtitle,
  id,
}: PropsWithChildren<{ title?: string; subtitle?: string; id?: string }>) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-14">
      {(title || subtitle) && (
        <header className="mb-6">
          {title && <h2 className="text-2xl font-extrabold">{title}</h2>}
          {subtitle && <p className="mt-1 text-gray-600">{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  );
}




