"use client";

import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const benefits = [
  { icon: "⚙️", label: "PANEL CON MODIFICADOR DE RTP", gold: true },
  { icon: "🎧", label: "SOPORTE INMEDIATO", gold: false },
  { icon: "📣", label: "EQUIPO DE MKT PARA AYUDARTE", gold: true },
  { icon: "🏷️", label: "EXCELENTES PRECIOS", gold: false },
];

export default function Home() {
  useEffect(() => {
    // Generar estrellas aleatorias una sola vez
    const stars = document.getElementById("stars-bg");
    if (stars && stars.childElementCount === 0) {
      for (let i = 0; i < 70; i++) {
        const s = document.createElement("div");
        const size = Math.random() * 2.5 + 1;
        s.style.cssText = `position:absolute;border-radius:50%;background:#fff;width:${size}px;height:${size}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation:twinkle 2.4s ease-in-out infinite ${Math.random() * 2.5}s;`;
        stars.appendChild(s);
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white"
      style={{
        fontFamily: "Montserrat, sans-serif",
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, #2a0a4a 0%, transparent 60%)," +
          "radial-gradient(ellipse 60% 50% at 90% 100%, #1d0640 0%, transparent 60%)," +
          "radial-gradient(ellipse 60% 50% at 5% 90%, #24083f 0%, transparent 55%), #12031f",
      }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@400;600;700;800;900&display=swap');
        @keyframes twinkle{0%,100%{opacity:.15;transform:scale(.7)}50%{opacity:.9;transform:scale(1.1)}}
        @keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes spin-slow{to{transform:rotate(360deg)}}
        @keyframes pulse-ring{0%,100%{filter:brightness(1)}50%{filter:brightness(1.35)}}
        @keyframes wa-glow{0%,100%{box-shadow:0 0 25px rgba(37,211,102,.45)}50%{box-shadow:0 0 50px rgba(37,211,102,.85)}}
        @keyframes coin-spin{0%,100%{transform:rotateY(0)}50%{transform:rotateY(180deg)}}
        @keyframes float-up{0%{transform:translateY(20px) rotate(0);opacity:0}15%{opacity:1}85%{opacity:1}100%{transform:translateY(-45vh) rotate(360deg);opacity:0}}
        .anton{font-family:'Anton',sans-serif}
        .txt-gold{background:linear-gradient(180deg,#ffedaa 0%,#f5b52e 45%,#a85e00 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
        .txt-white-grad{background:linear-gradient(180deg,#fff 30%,#c9c2ff 70%,#8f7fe0 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
        .h1-shadow-w{filter:drop-shadow(0 4px 0 #2a0d55) drop-shadow(0 0 30px rgba(168,85,247,.6))}
        .h1-shadow-g{filter:drop-shadow(0 4px 0 #4a2700) drop-shadow(0 0 30px rgba(245,181,46,.55))}
      `}</style>

      {/* Estrellas de fondo */}
      <div id="stars-bg" className="pointer-events-none fixed inset-0 z-0" />

      {/* Anillo neón */}
      <div className="pointer-events-none fixed left-1/2 top-1/2 z-0 aspect-square w-[min(130vw,1150px)] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 rounded-full animate-[pulse-ring_4s_ease-in-out_infinite]"
          style={{
            border: "3px solid transparent",
            background:
              "linear-gradient(#12031f,#12031f) padding-box, conic-gradient(from 20deg,#e879f9,#f5b52e,#7b2ff7,#e879f9) border-box",
            boxShadow: "0 0 60px rgba(168,85,247,.45), inset 0 0 80px rgba(168,85,247,.25)",
          }} />
        <div className="absolute inset-[22px] rounded-full animate-[pulse-ring_4s_ease-in-out_infinite_1s] opacity-55"
          style={{ border: "3px solid rgba(245,181,46,.5)", boxShadow: "0 0 40px rgba(245,181,46,.35), inset 0 0 50px rgba(245,181,46,.15)" }} />
      </div>

      {/* Destellos */}
      <span className="pointer-events-none fixed left-[12%] top-[18%] z-[1] animate-[spin-slow_6s_linear_infinite] text-2xl" style={{ color: "#ffd76a", textShadow: "0 0 12px #f5b52e" }}>✦</span>
      <span className="pointer-events-none fixed right-[10%] top-[30%] z-[1] animate-[spin-slow_6s_linear_infinite_1.2s] text-3xl" style={{ color: "#ffd76a", textShadow: "0 0 12px #f5b52e" }}>✦</span>
      <span className="pointer-events-none fixed bottom-[32%] left-[8%] z-[1] animate-[spin-slow_6s_linear_infinite_2s] text-3xl" style={{ color: "#ffd76a", textShadow: "0 0 12px #f5b52e" }}>✦</span>

      {/* Decoraciones */}
      <div className="deco fixed bottom-[6vh] left-[2vw] z-[1] animate-[bob_4s_ease-in-out_infinite] text-[clamp(60px,10vw,110px)] max-sm:opacity-45" style={{ filter: "drop-shadow(0 0 18px rgba(168,85,247,.6))" }}>🛒</div>
      <div className="deco fixed bottom-[10vh] right-[3vw] z-[1] animate-[bob_5s_ease-in-out_infinite_1s] text-[clamp(60px,10vw,110px)] max-sm:opacity-45" style={{ filter: "drop-shadow(0 0 18px rgba(245,181,46,.5))" }}>🎁</div>
      <span className="pointer-events-none fixed bottom-[12%] left-[15%] z-[1] animate-[float-up_7s_linear_infinite] text-3xl" style={{ filter: "drop-shadow(0 0 10px rgba(245,181,46,.7))" }}>🪙</span>
      <span className="pointer-events-none fixed bottom-[8%] right-[18%] z-[1] animate-[float-up_7s_linear_infinite_2.5s] text-3xl" style={{ filter: "drop-shadow(0 0 10px rgba(245,181,46,.7))" }}>🪙</span>
      <span className="pointer-events-none fixed bottom-[5%] left-[45%] z-[1] animate-[float-up_7s_linear_infinite_4.5s] text-3xl" style={{ filter: "drop-shadow(0 0 10px rgba(245,181,46,.7))" }}>🪙</span>

      {/* Header / Marca */}
      <header className="relative z-[2] px-5 pt-7 text-center">
        <div className="flex items-center justify-center gap-3.5">
          <span className="animate-[bob_3s_ease-in-out_infinite] text-3xl" style={{ filter: "drop-shadow(0 0 10px #f5b52e)" }}>👑</span>
          <div className="leading-[.95]">
            <div className="text-[clamp(20px,4vw,32px)] font-normal tracking-[.35em] text-white" style={{ textShadow: "0 0 20px rgba(168,85,247,.8)" }}>ZONA</div>
            <div className="anton txt-gold h1-shadow-g text-[clamp(38px,7vw,64px)] tracking-[.06em]">FORTUNE</div>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="relative z-[2] mx-auto max-w-3xl px-5 pb-16 pt-3.5 text-center">
        <h1 className="mt-4 leading-[1.02]">
          <span className="anton txt-white-grad h1-shadow-w block -skew-x-2 text-[clamp(52px,11vw,104px)]">F1CHAS</span>
          <span className="anton txt-gold h1-shadow-g block -skew-x-2 text-[clamp(46px,9.5vw,88px)]">POR MAYOR</span>
          <span className="anton txt-white-grad h1-shadow-w block -skew-x-2 text-[clamp(40px,8.5vw,78px)]">PARA CAJEROS</span>
        </h1>

        {/* Beneficios */}
        <div className="my-9 flex flex-col items-center gap-3.5">
          {benefits.map((b) => (
            <div key={b.label}
              className={`flex items-center gap-3.5 whitespace-nowrap rounded-full py-3 pl-3 pr-7 text-[clamp(13px,2.6vw,17px)] font-extrabold uppercase tracking-[.04em] transition-transform duration-300 hover:-translate-y-[3px] hover:scale-[1.02] ${b.gold
                ? "border-2 border-[rgba(245,181,46,.6)] hover:shadow-[0_0_34px_rgba(245,181,46,.55)]"
                : "border-2 border-[rgba(200,120,255,.55)] hover:shadow-[0_0_34px_rgba(200,120,255,.55)]"
                }`}
              style={{
                background: "linear-gradient(90deg, rgba(70,15,130,.85), rgba(35,6,66,.9))",
                boxShadow: b.gold
                  ? "0 0 22px rgba(245,181,46,.3), inset 0 0 18px rgba(245,181,46,.12)"
                  : "0 0 22px rgba(168,85,247,.35), inset 0 0 18px rgba(168,85,247,.15)",
              }}>
              <span className="grid h-10 w-10 min-w-10 place-items-center rounded-full text-lg"
                style={{
                  background: b.gold ? "linear-gradient(145deg,#ffd76a,#c77f0a)" : "linear-gradient(145deg,#c084fc,#7b2ff7)",
                  boxShadow: b.gold ? "0 0 14px rgba(245,181,46,.7)" : "0 0 14px rgba(192,132,252,.7)",
                }}>
                {b.icon}
              </span>
              {b.label}
            </div>
          ))}
        </div>

        {/* Botón WhatsApp */}
        <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer"
          className="mt-1.5 inline-flex items-center gap-4 rounded-full px-8 py-4 no-underline transition-transform duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(145deg,#25d366,#128c4b)",
            border: "3px solid #7CFC9B",
            animation: "wa-glow 2.4s ease-in-out infinite",
          }}>
          <span className="grid h-13 w-13 min-w-13 place-items-center rounded-full bg-white text-2xl"
            style={{ width: 52, height: 52, boxShadow: "0 0 12px rgba(255,255,255,.8)" }}>💬</span>
          <span className="text-left leading-[1.1]">
            <small className="block text-[clamp(11px,2.2vw,14px)] font-bold tracking-[.03em] text-[#eafff2]">
              MÁS INFO ESCRIBINOS AL
            </small>
            <strong className="anton block bg-gradient-to-b from-white to-[#d8ffe8] bg-clip-text text-[clamp(24px,5vw,36px)] tracking-[.05em] text-transparent"
              style={{ filter: "drop-shadow(0 2px 0 #064e2b)" }}>
              WHATSAPP
            </strong>
          </span>
        </a>

        {/* Promo */}
        <div className="mt-8 inline-flex items-center gap-3.5 rounded-[22px] border-2 border-[rgba(200,120,255,.5)] px-7 py-3.5"
          style={{
            background: "linear-gradient(145deg, rgba(90,20,160,.85), rgba(45,8,85,.92))",
            boxShadow: "0 0 30px rgba(168,85,247,.4), inset 0 0 20px rgba(168,85,247,.15)",
          }}>
          <span className="grid h-[46px] w-[46px] min-w-[46px] animate-[coin-spin_3s_ease-in-out_infinite] place-items-center rounded-full text-xl"
            style={{
              background: "radial-gradient(circle at 30% 30%, #ffe9a8, #f5b52e 55%, #a85e00)",
              boxShadow: "0 0 16px rgba(245,181,46,.8), inset 0 0 8px rgba(255,255,255,.5)",
            }}>⭐</span>
          <p className="text-left text-[clamp(13px,2.8vw,18px)] font-extrabold tracking-[.03em]">
            CADA <b>$50.000</b> TE CARGAMOS
            <br />
            <span className="anton txt-gold text-[clamp(15px,3.2vw,21px)] tracking-[.05em]">
              TE DAMOS 357.200 FICHAS
            </span>
          </p>
        </div>
      </main>

      <footer className="relative z-[2] px-4 pb-7 text-center text-[11px] tracking-[.08em] text-[#8a6fb8]">
        © 2026 ZONA FORTUNE — Todos los derechos reservados.
      </footer>
    </div>
  );
}