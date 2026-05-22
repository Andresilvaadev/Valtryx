import useReveal from "../hooks/useReveal";
 import supreme from "../img/supreme.png"

const CASES = [
  {
    title: "Supreme Printt",
    tag: "Malharia · E-commerce",
    result: "+500 produção mensal",
    link: "https://supremeprint.netlify.app/",
    img: supreme,
    stats: [
      ["98%", "Satisfação"],
      ["100%", "Personalizado"],
      ["Next.js", "Stack"],
    ],
    desc: "Experiência digital premium com foco em performance, identidade visual forte e responsividade completa, garantindo velocidade e maior conversão.",
  },
  {
    title: "Fintech Dashboard",
    tag: "Soluções Financeiras · SaaS",
    result: "PCI-DSS Compliant",
    link: "https://valtryxsystems.netlify.app",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format",
    stats: [
      ["99.9%", "Uptime"],
      ["<200ms", "Latência"],
      ["AWS", "Cloud"],
    ],
    desc: "Plataforma financeira com integrações bancárias, compliance regulatório e dashboards em tempo real para gestão de pagamentos.",
  },
  {
    title: "SecureOps Platform",
    tag: "Cibersegurança · B2B",
    result: "0 incidentes em 12 meses",
    link: "https://valtryxsystems.netlify.app",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80&auto=format",
    stats: [
      ["24/7", "Monitoramento"],
      ["SOC 2", "Certificado"],
      ["Python", "ML Engine"],
    ],
    desc: "Plataforma de segurança com detecção de ameaças em tempo real, resposta automatizada a incidentes e relatórios de compliance.",
  },
];

function CaseCard({ c, index }) {
  const ref = useReveal(index * 80);
  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid var(--border)",
        borderRadius: 2,
        overflow: "hidden",
        background: "#0a0a0a",
        transition: "transform .4s, box-shadow .4s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {/* Image */}
      <a
        href={c.link}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "block",
          position: "relative",
          aspectRatio: "16/9",
          overflow: "hidden",
        }}
      >
        <img
          src={c.img}
          alt={c.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.5)",
            transition: "transform .5s, filter .4s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.06)";
            e.currentTarget.style.filter = "brightness(0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "";
            e.currentTarget.style.filter = "brightness(0.5)";
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            transition: "opacity .35s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "0";
          }}
        >
          <span
            style={{
              fontFamily: "'DM Serif Display',serif",
              fontStyle: "italic",
              fontSize: 28,
              color: "#f0f0f0",
            }}
          >
            Ver case →
          </span>
        </div>
        <div style={{ position: "absolute", top: 16, left: 16 }}>
          <span className="tag-pill" style={{ background: "rgba(8,8,8,0.85)" }}>
            {c.tag}
          </span>
        </div>
      </a>

      {/* Content */}
      <div
        style={{
          padding: "28px 28px 24px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <h3
          style={{
            fontFamily: "'DM Serif Display',serif",
            fontSize: 28,
            color: "#f0f0f0",
            lineHeight: 1.05,
          }}
        >
          {c.title}
        </h3>
        <p
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: 14,
            color: "#555",
            lineHeight: 1.75,
          }}
        >
          {c.desc}
        </p>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: 0,
            borderTop: "1px solid var(--border)",
            paddingTop: 20,
            marginTop: "auto",
          }}
        >
          {c.stats.map(([n, l], i) => (
            <div
              key={i}
              style={{
                flex: 1,
                paddingRight: i < 2 ? 16 : 0,
                borderRight: i < 2 ? "1px solid var(--border)" : "none",
                paddingLeft: i > 0 ? 16 : 0,
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Serif Display',serif",
                  fontSize: 22,
                  color: "#f0f0f0",
                  lineHeight: 1,
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: 8,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#444",
                  marginTop: 4,
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Cases() {
  const r = useReveal();
  return (
    <section
      id="cases"
      style={{
        background: "var(--dim)",
        zIndex: 2,
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="inner">
        <div
          ref={r}
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 24,
            marginBottom: 56,
          }}
        >
          <div>
            <div className="section-label">Portfólio</div>
            <h2 className="section-title">
              Cases de
              <br />
              <em>sucesso</em>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: 15,
              color: "#555",
              maxWidth: 340,
              lineHeight: 1.7,
            }}
          >
            Resultados reais para negócios reais. Clique para visitar cada
            projeto.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 20,
          }}
        >
          {CASES.map((c, i) => (
            <CaseCard key={i} c={c} index={i} />
          ))}
        </div>
      </div>
      <style>{`@media(max-width:860px){#cases .inner>div:last-child{grid-template-columns:1fr}}`}</style>
    </section>
  );
}
