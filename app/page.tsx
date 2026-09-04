"use client";

import Image from "next/image";

declare global {
  interface Window {
    fbq?: (
      command: string,
      eventName: string,
      parameters?: Record<string, unknown>
    ) => void;
  }
}

const WHATSAPP_NUMBER = "5493515511072";

export default function Home() {
  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact");
    }
  };

  return (
    <main
      className="flex h-[100dvh] w-full items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 50% -10%, #3b0f6e 0%, transparent 60%)," +
          "radial-gradient(ellipse 50% 40% at 100% 100%, #2a0a4a 0%, transparent 60%)," +
          "radial-gradient(ellipse 50% 40% at 0% 100%, #2a0a4a 0%, transparent 60%)," +
          "radial-gradient(ellipse 40% 30% at 85% 15%, rgba(245,181,46,.12) 0%, transparent 60%)," +
          "linear-gradient(180deg, #150328 0%, #12031f 50%, #0d0218 100%)",
      }}
    >
      <div
        className="relative max-h-full max-w-full"
        style={{ aspectRatio: "9 / 16", height: "100dvh" }}
      >
        <Image
          src="/landing.jpg"
          alt="Zona Fortuna — Fichas por mayor para cajeros"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="select-none object-cover"
          draggable={false}
        />

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribinos por WhatsApp"
          onClick={handleWhatsAppClick}
          className="absolute z-10 rounded-full transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
          style={{
            left: "3.5%",
            right: "3.5%",
            top: "58.5%",
            height: "10.8%",
            boxShadow: "0 0 0 0 rgba(37,211,102,0)",
          }}
        />
      </div>
    </main>
  );
}