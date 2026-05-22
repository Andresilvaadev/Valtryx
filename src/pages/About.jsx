import useReveal from "../hooks/useReveal";
import { CONFIG } from "../constants/config";

const PILLARS = [
  {
    n: "01",
    title: "Inovação",
    desc: "Buscamos o novo todos os dias. Tecnologia de ponta aplicada a problemas reais de negócio.",
  },
  {
    n: "02",
    title: "Confiança",
    desc: "Segurança e transparência em tudo que fazemos. Dados protegidos, prazos cumpridos.",
  },
  {
    n: "03",
    title: "Escalabilidade",
    desc: "Soluções construídas para crescer. Sua empresa não vai travar por causa de tecnologia.",
  },
  {
    n: "04",
    title: "Impacto",
    desc: "Tecnologia que transforma e gera valor real — para você, seus clientes e o mercado.",
  },
];

export default function About() {
  const r1 = useReveal(),
    r2 = useReveal();
  return (
    <section
      id="sobre"
      style={{
        background: "var(--dim)",
        zIndex: 2,
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="inner"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        <div ref={r1} className="reveal">
          <div className="section-label">Nossa missão</div>
          <h2 className="section-title" style={{ marginBottom: 32 }}>
            Tecnologia que
            <br />
            <em>transforma</em>
            <br />
            negócios.
          </h2>
          <p
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: 17,
              color: "#555",
              lineHeight: 1.8,
              marginBottom: 18,
            }}
          >
            Somos uma empresa de tecnologia focada em criar produtos digitais de
            alto impacto, combinando expertise técnica com visão estratégica de
            negócios.
          </p>
          <p
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: 17,
              color: "#555",
              lineHeight: 1.8,
            }}
          >
            Cada projeto entregue é uma solução robusta, segura e pronta para
            escalar — construída para impulsionar pessoas, empresas e o futuro.
          </p>

          <div
            style={{
              display: "flex",
              gap: 44,
              marginTop: 48,
              paddingTop: 44,
              borderTop: "1px solid var(--border)",
              flexWrap: "wrap",
            }}
          >
            {[
              ["24/7", "Suporte"],
              ["100%", "Projetos no prazo"],
              ["ISO", "27001 Compliance"],
            ].map(([n, l]) => (
              <div key={l}>
                <span
                  style={{
                    fontFamily: "'DM Serif Display',serif",
                    fontSize: 48,
                    color: "#f0f0f0",
                    lineHeight: 1,
                    display: "block",
                  }}
                >
                  {n}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: 9,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "#444",
                    marginTop: 5,
                    display: "block",
                  }}
                >
                  {l}
                </span>
              </div>
            ))}
          </div>

          <a
            href={CONFIG.instagram}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginTop: 40,
              fontFamily: "'DM Mono',monospace",
              fontSize: 10,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#555",
              borderBottom: "1px solid rgba(240,240,240,0.1)",
              paddingBottom: 4,
              transition: "color .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
          >
            Conheça o time →
          </a>
        </div>

        <div ref={r2} className="reveal">
          {PILLARS.map((p, i) => (
            <div
              key={i}
              style={{
                padding: "26px 0",
                borderBottom: "1px solid var(--border)",
                display: "flex",
                gap: 22,
                transition: "padding-left .3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = "14px")}
              onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = "0")}
            >
              <span
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: 10,
                  color: "#333",
                  letterSpacing: "2px",
                  marginTop: 3,
                  flexShrink: 0,
                }}
              >
                {p.n}
              </span>
              <div>
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#f0f0f0",
                    marginBottom: 8,
                  }}
                >
                  {p.title}
                </div>
                <div
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: 14,
                    color: "#555",
                    lineHeight: 1.7,
                  }}
                >
                  {p.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:860px){#sobre .inner{grid-template-columns:1fr;gap:48px}}`}</style>
    </section>
  );
}
