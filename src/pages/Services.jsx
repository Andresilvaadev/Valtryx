import useReveal from '../hooks/useReveal'

const SERVICES = [
  { icon:'◻', title:'Sites Profissionais',   desc:'Landing pages e sites institucionais com design impactante, responsivos e otimizados para conversão real.',           tags:['React','Vite','SEO'] },
  { icon:'◈', title:'Sistemas Web',          desc:'Dashboards, CRMs e sistemas sob medida para automatizar processos e escalar sua operação com tecnologia sólida.',     tags:['Node.js','NestJS','API'] },
  { icon:'◎', title:'Infraestrutura Cloud',  desc:'Arquitetura de nuvem escalável, containerização, CI/CD e monitoramento para máxima disponibilidade e performance.',   tags:['AWS','Docker','Kubernetes'] },
  { icon:'◇', title:'Soluções Financeiras',  desc:'Integrações com sistemas de pagamento, banking APIs, compliance regulatório e soluções white-label para fintech.',     tags:['PIX','Open Finance','PCI-DSS'] },
  { icon:'△', title:'IA & Analytics',        desc:'Machine learning, dashboards inteligentes e automação de processos com IA generativa aplicada ao seu negócio.',        tags:['ML','LLM','BI'] },
  { icon:'○', title:'Manutenção & Suporte',  desc:'Monitoramento contínuo 24/7, resposta a incidentes, atualizações e suporte especializado pós-entrega garantido.',     tags:['24/7','Uptime','Segurança'] },
]

function Card({ s }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal"
      style={{ padding:'38px 30px', background:'rgba(255,255,255,0.018)', border:'1px solid var(--border)', borderRadius:2, display:'flex', flexDirection:'column', gap:14, position:'relative', overflow:'hidden', transition:'background .3s, border-color .3s, transform .3s', cursor:'default' }}
      onMouseEnter={e=>{ e.currentTarget.style.background='rgba(255,255,255,0.045)'; e.currentTarget.style.borderColor='rgba(240,240,240,0.14)'; e.currentTarget.style.transform='translateY(-4px)' }}
      onMouseLeave={e=>{ e.currentTarget.style.background='rgba(255,255,255,0.018)'; e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='' }}
    >
      <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'#f0f0f0', transform:'scaleX(0)', transformOrigin:'left', transition:'transform .4s', pointerEvents:'none' }} className="card-top-line"/>
      <span style={{ fontSize:26 }}>{s.icon}</span>
      <div style={{ fontFamily:"'Syne',sans-serif", fontSize:19, fontWeight:700, color:'#f0f0f0' }}>{s.title}</div>
      <div style={{ fontFamily:"'Syne',sans-serif", fontSize:14, color:'#555', lineHeight:1.75, flex:1 }}>{s.desc}</div>
      <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginTop:4 }}>
        {s.tags.map(t=><span key={t} className="tag-pill">{t}</span>)}
      </div>
    </div>
  )
}

export default function Services() {
  const r = useReveal()
  return (
    <section id="servicos" style={{ background:'var(--black)', zIndex:2 }}>
      <div className="inner">
        <div ref={r} className="reveal" style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:32, marginBottom:64 }}>
          <div>
            <div className="section-label">Soluções</div>
            <h2 className="section-title">O que<br/><em>entregamos</em></h2>
          </div>
          <p style={{ fontFamily:"'Syne',sans-serif", fontSize:16, color:'#555', lineHeight:1.7, maxWidth:360 }}>
            Do planejamento à publicação — e além, com suporte contínuo depois do lançamento.
          </p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }}>
          {SERVICES.map((s,i)=><Card key={i} s={s}/>)}
        </div>
      </div>
      <style>{`
        .reveal:hover .card-top-line{transform:scaleX(1)!important}
        @media(max-width:860px){#servicos .inner>div:last-child{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:540px){#servicos .inner>div:last-child{grid-template-columns:1fr}}
      `}</style>
    </section>
  )
}
