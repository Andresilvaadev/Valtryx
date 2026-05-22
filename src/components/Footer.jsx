import { CONFIG } from '../constants/config'

const NAV = [
  {label:'Serviços',id:'servicos'},{label:'Sobre',id:'sobre'},
  {label:'Tecnologias',id:'tecnologias'},{label:'Cases',id:'cases'},
  {label:'Diferenciais',id:'diferenciais'},{label:'Contato',id:'contato'},
]
const SOCIAL = [
  {label:'LinkedIn', href:CONFIG.linkedin},
  {label:'GitHub',   href:CONFIG.github},
  {label:'Instagram',href:CONFIG.instagram},
]

export default function Footer() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })
  return (
    <footer style={{ background:'#040404', borderTop:'1px solid rgba(240,240,240,0.05)', padding:'56px 5vw 36px', position:'relative', zIndex:2 }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        {/* Top */}
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gap:48, marginBottom:56 }}>
          <div>
            <div style={{ fontFamily:"'DM Serif Display',serif", fontSize:24, color:'#f0f0f0', marginBottom:16 }}>
              VALTRYX<em style={{ fontStyle:'italic', fontSize:16, color:'#333', marginLeft:8 }}>systems</em>
            </div>
            <p style={{ fontFamily:"'Syne',sans-serif", fontSize:14, color:'#333', lineHeight:1.75, maxWidth:280 }}>
              Tecnologia que constrói o futuro. Soluções robustas, seguras e escaláveis para empresas de todos os tamanhos.
            </p>
          </div>
          <div>
            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:9, letterSpacing:'4px', textTransform:'uppercase', color:'#2a2a2a', marginBottom:20 }}>Navegação</div>
            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              {NAV.map(l=>(
                <button key={l.id} onClick={()=>go(l.id)} style={{ fontFamily:"'DM Mono',monospace", fontSize:10, letterSpacing:'2px', textTransform:'uppercase', color:'#333', textAlign:'left', transition:'color .2s' }} onMouseEnter={e=>e.target.style.color='#f0f0f0'} onMouseLeave={e=>e.target.style.color='#333'}>{l.label}</button>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:9, letterSpacing:'4px', textTransform:'uppercase', color:'#2a2a2a', marginBottom:20 }}>Social</div>
            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              {SOCIAL.map(s=>(
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{ fontFamily:"'DM Mono',monospace", fontSize:10, letterSpacing:'2px', textTransform:'uppercase', color:'#333', transition:'color .2s' }} onMouseEnter={e=>e.target.style.color='#f0f0f0'} onMouseLeave={e=>e.target.style.color='#333'}>{s.label}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16, borderTop:'1px solid rgba(240,240,240,0.04)', paddingTop:28 }}>
          <span style={{ fontFamily:"'DM Mono',monospace", fontSize:9, letterSpacing:'2px', textTransform:'uppercase', color:'#222' }}>
            © {new Date().getFullYear()} Valtryx Systems. Todos os direitos reservados.
          </span>
          <div style={{ display:'flex', gap:24 }}>
            {['Privacidade','Termos'].map(t=>(
              <span key={t} style={{ fontFamily:"'DM Mono',monospace", fontSize:9, letterSpacing:'2px', textTransform:'uppercase', color:'#222' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:700px){footer .inner-grid{grid-template-columns:1fr!important}}`}</style>
    </footer>
  )
}
