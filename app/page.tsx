"use client";

import Image from "next/image";

// 👇 Acá va tu número de WhatsApp (código de país + número, sin + ni espacios)
const WHATSAPP_NUMBER = "5493515511072";

export default function Home() {
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
      {/*
        Contenedor con la relación de aspecto exacta de la imagen (900x1600).
        Así el botón siempre queda alineado sobre el botón verde de la imagen,
        en cualquier pantalla (mobile o desktop), sin cortes.
      */}
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

        {/*
          Botón interactivo transparente posicionado exactamente sobre
          el botón verde de WhatsApp de la imagen.
          Ajustá los valores si tu imagen final difiere.
        */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribinos por WhatsApp"
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