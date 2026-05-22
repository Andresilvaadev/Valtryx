import useReveal from "../hooks/useReveal";
import { CONFIG } from "../constants/config";

const WA = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Contact() {
  const r1 = useReveal(),
    r2 = useReveal();
  return (
    <section id="contato" style={{ background: "var(--black)", zIndex: 2 }}>
      <div className="inner">
        <div ref={r1} className="reveal" style={{ marginBottom: 72 }}>
          <div className="section-label">Contato</div>
          <h2 className="section-title">
            Vamos construir
            <br />
            <em>o futuro juntos.</em>
          </h2>
        </div>

        <div
          ref={r2}
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'DM Serif Display',serif",
                fontStyle: "italic",
                fontSize: "clamp(22px,2.8vw,36px)",
                color: "#c0c0c0",
                lineHeight: 1.45,
                marginBottom: 48,
              }}
            >
              "Nossa equipe de especialistas está pronta para entender seu
              desafio e propor a solução tecnológica ideal."
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {[
                {
                  label: "Telefone",
                  value: CONFIG.phone,
                  href: CONFIG.whatsapp,
                },
                {
                  label: "E-mail",
                  value: CONFIG.email,
                  href: `mailto:${CONFIG.email}`,
                },
                {
                  label: "Website",
                  value: CONFIG.website,
                  href: `https://${CONFIG.website}`,
                },
                {
                  label: "Instagram",
                  value: "@valtryx",
                  href: CONFIG.instagram,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    borderBottom: "1px solid var(--border)",
                    paddingBottom: 22,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      fontSize: 9,
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      color: "#333",
                      minWidth: 72,
                    }}
                  >
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    style={{
                      fontSize: 15,
                      color: "#666",
                      transition: "color .2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#f0f0f0")}
                    onMouseLeave={(e) => (e.target.style.color = "#666")}
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <a
              href={CONFIG.whatsapp}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                padding: "22px 40px",
                background: "#f0f0f0",
                color: "#080808",
                fontFamily: "'Syne',sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                borderRadius: 2,
                transition: "opacity .2s, transform .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = ".85";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "";
              }}
            >
              {WA} Falar com especialista
            </a>

            <a
              href={CONFIG.contactForm}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "22px 40px",
                border: "1px solid rgba(240,240,240,0.1)",
                color: "#f0f0f0",
                fontFamily: "'Syne',sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                borderRadius: 2,
                transition: "border-color .2s, background .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(240,240,240,0.35)";
                e.currentTarget.style.background = "rgba(240,240,240,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(240,240,240,0.1)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Enviar mensagem →
            </a>

            <p
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: 9,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#2a2a2a",
                textAlign: "center",
                marginTop: 8,
              }}
            >
              Resposta em até 1h útil
            </p>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){#contato .inner>div:last-child{grid-template-columns:1fr;gap:48px}}`}</style>
    </section>
  );
}
