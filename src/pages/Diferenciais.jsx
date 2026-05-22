import useReveal from '../hooks/useReveal'

const ITEMS = [
  { num:'01', title:'Segurança em primeiro lugar',   stat:'ISO 27001', statLabel:'Compliance',          desc:'Arquitetura de segurança em todas as camadas. Seus dados e os dos seus clientes protegidos por padrão, não como add-on.' },
  { num:'02', title:'Entrega no prazo, sempre',      stat:'100%',      statLabel:'Entregas no prazo',   desc:'Metodologia ágil com marcos claros e comunicação diária. Você acompanha cada etapa em tempo real.' },
  { num:'03', title:'Escalabilidade garantida',      stat:'99.9%',     statLabel:'Uptime garantido',    desc:'Stack construída para crescer. Do MVP ao produto global — sem refazer do zero quando o volume aumenta.' },
  { num:'04', title:'Suporte humano, não robô',      stat:'<1h',       statLabel:'Tempo de resposta',   desc:'Fala direto com quem construiu. Sem ticket, sem fila. Atendimento especializado e ágil em qualquer situação.' },
  { num:'05', title:'Visão de produto',              stat:'5×',        statLabel:'ROI médio',           desc:'Não somos só executores. Pensamos em produto, UX e negócio — para que a tecnologia gere valor real.' },
  { num:'06', title:'Expertise multi-vertical',      stat:'6',         statLabel:'Especialidades',      desc:'De fintech a cibersegurança, de IA a DevOps — um parceiro único para toda a jornada tecnológica da sua empresa.' },
]

function Card({ item }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal"
      style={{ padding:'36px 28px', border:'1px solid var(--border)', borderRadius:2, background:'rgba(255,255,255,0.015)', display:'flex', flexDirection:'column', gap:16, position:'relative', overflow:'hidden', transition:'background .3s, border-color .3s, transform .3s', cursor:'default' }}
      onMouseEnter={e=>{ e.currentTarget.style.background='rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor='rgba(240,240,240,0.13)'; e.currentTarget.style.transform='translateY(-4px)' }}
      onMouseLeave={e=>{ e.currentTarget.style.background='rgba(255,255,255,0.015)'; e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='' }}
    >
      <div style={{ position:'absolute', top:16, right:20, fontFamily:"'DM Serif Display',serif", fontSize:60, color:'rgba(240,240,240,0.03)', lineHeight:1, userSelect:'none' }}>{item.num}</div>
      <div>
        <span style={{ fontFamily:"'DM Serif Display',serif", fontSize:44, color:'#f0f0f0', lineHeight:1, display:'block' }}>{item.stat}</span>
        <span style={{ fontFamily:"'DM Mono',monospace", fontSize:9, letterSpacing:'3px', textTransform:'uppercase', color:'#333', marginTop:4, display:'block' }}>{item.statLabel}</span>
      </div>
      <div style={{ width:24, height:1, background:'rgba(240,240,240,0.1)' }}/>
      <div style={{ fontSize:17, fontWeight:700, color:'#e0e0e0' }}>{item.title}</div>
      <div style={{ fontFamily:"'Syne',sans-serif", fontSize:14, color:'#555', lineHeight:1.75 }}>{item.desc}</div>
    </div>
  )
}

export default function Diferenciais() {
  const r = useReveal()
  return (
    <section id="diferenciais" style={{ background:'var(--black)', zIndex:2 }}>
      <div className="inner">
        <div ref={r} className="reveal" style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:32, marginBottom:72 }}>
          <div>
            <div className="section-label">Por que a Valtryx</div>
            <h2 className="section-title">Nossos<br/><em>diferenciais</em></h2>
          </div>
          <p style={{ fontFamily:"'Syne',sans-serif", fontSize:16, color:'#555', lineHeight:1.7, maxWidth:380 }}>
            O que nos separa de qualquer outra empresa de tecnologia do mercado.
          </p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }}>
          {ITEMS.map((item,i)=><Card key={i} item={item}/>)}
        </div>
      </div>
      <style>{`@media(max-width:860px){#diferenciais .inner>div:last-child{grid-template-columns:repeat(2,1fr)}}@media(max-width:540px){#diferenciais .inner>div:last-child{grid-template-columns:1fr}}`}</style>
    </section>
  )
}
