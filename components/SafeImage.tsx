"use client";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

export default function SafeImage({ alt, ...props }: ImageProps) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 text-center text-gray-500">
        <span className="px-2 text-sm">{alt}</span>
      </div>
    );
  }
  const loading = (props as any).loading ?? ((props as any).priority ? undefined : "lazy");
  const sizes = (props as any).sizes ?? ((props as any).fill ? "(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 600px" : undefined);
  const quality = (props as any).quality ?? 70;
  return (
    <Image {...props} alt={alt} onError={() => setErrored(true)} loading={loading as any} sizes={sizes} quality={quality as any} />
  );
}

