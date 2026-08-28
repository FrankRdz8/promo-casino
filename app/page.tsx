"use client";

import { useState, useEffect } from "react";
import { ArrowRight, MessageCircle, Check } from "lucide-react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bullets = [
    "Soporte inmediato 24/7",
    "Equipo de marketing dedicado",
    "Excelentes precios mayoristas",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans antialiased relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[100px]" />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-slate-950/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold">♠</span>
            </div>
            <span className="text-lg font-bold tracking-tight">
              GANAMOS<span className="font-normal text-slate-400">.NET</span>
            </span>
          </div>
          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Promoción Limitada
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Fichas por Mayor
            </span>
            <br />
            <span className="text-purple-400">para Cajeros</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto">
            Proveedores mayoristas directos. Iniciá tu propio negocio de casino
            online con la mayor rentabilidad del mercado.
          </p>

          {/* Price highlight */}
          <div className="inline-flex flex-col items-center mb-10">
            <span className="text-xs text-slate-500 uppercase tracking-widest mb-2">
              Precio Exclusivo
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-6xl md:text-7xl font-bold bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
                0.14%
              </span>
            </div>
            <span className="text-sm text-slate-500 mt-1">Venta Mayorista</span>
          </div>

          {/* Bullets */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12">
            {bullets.map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                {b}
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20"
          >
            <MessageCircle className="w-5 h-5" />
            Escribinos por WhatsApp
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Disclaimer */}
          <p className="mt-8 text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
            Compra mínima: <span className="text-slate-400">$50.000 ARS</span> = Acreditación de{" "}
            <span className="text-slate-400">357.142 fichas</span> en tu panel.
            <br />
            Somos directos. Sin intermediarios.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 py-6 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] text-slate-700">
            © 2026 GANAMOS.NET — Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}