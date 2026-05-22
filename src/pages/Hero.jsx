import { useEffect, useRef } from "react";
import { CONFIG } from "../constants/config";

export default function Hero() {
  const numRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!numRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      numRef.current.style.transform = `translateY(-50%) translate(${x}px,${y}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 5vw 80px",
        position: "relative",
        overflow: "hidden",
        zIndex: 2,
      }}
    >
      <div
        ref={numRef}
        style={{
          position: "absolute",
          right: "-3vw",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "'DM Serif Display',serif",
          fontSize: "clamp(140px,16vw,280px)",
          color: "rgba(240,240,240,0.07)",
          WebkitTextStroke: "1px rgba(240,240,240,0.18)",
          lineHeight: 1,
          letterSpacing: "-4px",
          pointerEvents: "none",
          userSelect: "none",
          transition: "transform .08s linear",
          whiteSpace: "nowrap",
        }}
      >
        VALTRYX
      </div>

    
      <div
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 36,
          flexWrap: "wrap",
          animation: "heroFadeUp .7s ease .1s both",
        }}
      >
        {["ISO 27001", "SOC 2", "AWS Partner", "24/7 Support"].map((b) => (
          <span
            key={b}
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: 9,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#444",
              padding: "5px 12px",
              border: "1px solid rgba(240,240,240,0.08)",
              borderRadius: 2,
            }}
          >
            {b}
          </span>
        ))}
      </div>

      <p
        style={{
          fontFamily: "'DM Mono',monospace",
          fontSize: 10,
          letterSpacing: "5px",
          color: "#444",
          textTransform: "uppercase",
          marginBottom: 24,
          animation: "heroFadeUp .8s ease .18s both",
        }}
      >
        — Tecnologia que constrói o futuro
      </p>

      <h1
        style={{
          fontFamily: "'DM Serif Display',serif",
          fontSize: "clamp(54px,9.5vw,140px)",
          lineHeight: 0.9,
          color: "#f0f0f0",
          marginBottom: 48,
          animation: "heroFadeUp .9s ease .28s both",
        }}
      >
        Soluções
        <br />
        <em style={{ fontStyle: "italic", color: "#555" }}>que escalam.</em>
      </h1>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 32,
          animation: "heroFadeUp 1s ease .4s both",
        }}
      >
        <p
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(15px,1.6vw,18px)",
            color: "#555",
            lineHeight: 1.8,
            maxWidth: 460,
          }}
        >
          Entregamos soluções tecnológicas robustas, seguras e escaláveis que
          impulsionam pessoas, empresas e o futuro.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a
            href={CONFIG.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-fill"
          >
            Falar com especialista
          </a>
          <button className="btn-outline" onClick={() => go("servicos")}>
            Explorar soluções
          </button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "'DM Mono',monospace",
            fontSize: 10,
            letterSpacing: "3px",
            color: "#333",
            textTransform: "uppercase",
            animation: "scrollBounce 2.5s ease-in-out infinite",
          }}
        >
          <div style={{ width: 36, height: 1, background: "#2a2a2a" }} />
          scroll
        </div>
      </div>

      <style>{`
        @keyframes heroFadeUp { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scrollBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(7px)} }
      `}</style>
    </section>
  );
}
