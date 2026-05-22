import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const FAQS = [
  { q:'Quais tipos de empresa vocês atendem?',           a:'Atendemos desde startups em fase de MVP até empresas de médio e grande porte que precisam modernizar sua infraestrutura. Nossa multi-especialidade nos permite atender qualquer vertical — fintech, saúde, varejo, indústria.' },
  { q:'Como funciona o processo de início de projeto?',  a:'Começamos com uma reunião de descoberta para entender seu desafio. Em seguida, entregamos um diagnóstico tecnológico e proposta com escopo, prazo e investimento. Tudo transparente antes de qualquer assinatura.' },
  { q:'Vocês trabalham com suporte pós-entrega?',        a:'Sim. Oferecemos planos de suporte 24/7 com SLA definido. Monitoramos sua infraestrutura, respondemos incidentes e evoluímos o produto de forma contínua — como um time interno.' },
  { q:'A Valtryx atende fora do Pará?',                  a:'Atendemos clientes em todo o Brasil e América Latina de forma 100% remota. Nosso modelo de trabalho distribuído não limita a qualidade do serviço — apenas amplia nosso alcance.' },
  { q:'Como é feita a segurança dos dados dos clientes?',a:'Seguimos padrões ISO 27001 e SOC 2. Todos os projetos têm criptografia de ponta a ponta, controle de acesso por roles e monitoramento contínuo. Segurança não é opcional — é padrão.' },
  { q:'Qual o prazo médio de entrega de um projeto?',    a:'Depende da complexidade. Uma landing page ou MVP leva de 2 a 4 semanas. Sistemas robustos e integrações complexas têm cronograma detalhado na proposta, sempre com marcos intermediários visíveis.' },
]

function Item({ faq }) {
  const [open, setOpen] = useState(false)
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ borderBottom:'1px solid var(--border)' }}>
      <button onClick={()=>setOpen(p=>!p)}
        style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'26px 0', fontSize:17, fontWeight:700, color:'#e0e0e0', textAlign:'left', gap:20, transition:'color .2s' }}
        onMouseEnter={e=>e.currentTarget.style.color='#666'}
        onMouseLeave={e=>e.currentTarget.style.color='#e0e0e0'}
      >
        {faq.q}
        <span style={{ fontSize:22, color:'#444', transition:'transform .35s', transform:open?'rotate(45deg)':'none', flexShrink:0 }}>+</span>
      </button>
      <div style={{ fontFamily:"'Syne',sans-serif", fontSize:15, color:'#555', lineHeight:1.8, maxHeight:open?'220px':'0', overflow:'hidden', transition:'max-height .45s cubic-bezier(.25,.46,.45,.94), padding .3s', paddingBottom:open?28:0 }}>
        {faq.a}
      </div>
    </div>
  )
}

export default function FAQ() {
  const r = useReveal()
  return (
    <section id="faq" style={{ background:'var(--dim)', zIndex:2, borderTop:'1px solid var(--border)' }}>
      <div className="inner" style={{ maxWidth:800, marginInline:'auto' }}>
        <div ref={r} className="reveal" style={{ marginBottom:64 }}>
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Perguntas<br/><em>frequentes</em></h2>
        </div>
        {FAQS.map((f,i)=><Item key={i} faq={f}/>)}
      </div>
    </section>
  )
}
