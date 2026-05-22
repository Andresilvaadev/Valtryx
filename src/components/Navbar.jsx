import { useState, useEffect } from 'react'
import { CONFIG } from '../constants/config'

const LINKS = [
  { label:'Serviços',      id:'servicos'      },
  { label:'Sobre',         id:'sobre'         },
  
  { label:'Cases',         id:'cases'         },
  { label:'Diferenciais',  id:'diferenciais'  },
  { label:'Contato',       id:'contato'       },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h, { passive:true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const go = id => { document.getElementById(id)?.scrollIntoView({ behavior:'smooth' }); setOpen(false) }

  const navStyle = {
    position:'fixed', top:0, left:0, right:0, zIndex:100,
    padding:'0 5vw', display:'flex', alignItems:'center', justifyContent:'space-between', height:72,
    background: scrolled ? 'rgba(8,8,8,0.9)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(240,240,240,0.06)' : '1px solid transparent',
    transition:'background .4s, border-color .4s',
  }

  return (
    <>
      <nav style={navStyle}>
        {/* Logo */}
        <button onClick={() => go('hero')} style={{ fontFamily:"'DM Serif Display',serif", fontSize:22, letterSpacing:'-0.5px', color:'#f0f0f0', display:'flex', alignItems:'baseline', gap:2 }}>
          VALTRYX
          <em style={{ fontStyle:'italic', fontSize:13, color:'#555', marginLeft:6, fontFamily:"'DM Serif Display',serif" }}>systems</em>
        </button>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display:'flex', gap:28, alignItems:'center' }}>
          {LINKS.map(l => (
            <button key={l.id}
              style={{ fontFamily:"'DM Mono',monospace", fontSize:10, letterSpacing:'3px', textTransform:'uppercase', color:'#555', transition:'color .2s' }}
              onClick={() => go(l.id)}
              onMouseEnter={e=>e.target.style.color='#f0f0f0'}
              onMouseLeave={e=>e.target.style.color='#555'}
            >{l.label}</button>
          ))}
        </div>

        <a href={CONFIG.whatsapp} target="_blank" rel="noreferrer" className="nav-desktop"
          style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'9px 22px', border:'1px solid rgba(240,240,240,0.13)', borderRadius:2, fontFamily:"'DM Mono',monospace", fontSize:10, letterSpacing:'3px', textTransform:'uppercase', color:'#f0f0f0', transition:'background .2s, border-color .2s' }}
          onMouseEnter={e=>{ e.currentTarget.style.background='rgba(240,240,240,0.07)'; e.currentTarget.style.borderColor='rgba(240,240,240,0.35)' }}
          onMouseLeave={e=>{ e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor='rgba(240,240,240,0.13)' }}
        >Falar agora →</a>

        {/* Hamburger */}
        <button className="ham-btn" onClick={() => setOpen(p=>!p)} aria-label="Menu"
          style={{ display:'none', flexDirection:'column', gap:5, padding:6 }}
        >
          {[0,1,2].map(i=>(
            <span key={i} style={{ display:'block', width:22, height:1, background:'#f0f0f0', borderRadius:1, transition:'.3s',
              transform: open ? (i===0?'translateY(6px) rotate(45deg)':i===2?'translateY(-6px) rotate(-45deg)':'none') : 'none',
              opacity: open && i===1 ? 0 : 1,
            }}/>
          ))}
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <div style={{ position:'fixed', inset:0, zIndex:99, background:'#080808', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:36, transform: open?'translateX(0)':'translateX(100%)', transition:'transform .45s cubic-bezier(.25,.46,.45,.94)' }}>
        {LINKS.map(l=>(
          <button key={l.id} onClick={()=>go(l.id)}
            style={{ fontFamily:"'DM Serif Display',serif", fontSize:38, color:'#f0f0f0', transition:'color .2s' }}
            onMouseEnter={e=>e.target.style.fontStyle='italic'}
            onMouseLeave={e=>e.target.style.fontStyle='normal'}
          >{l.label}</button>
        ))}
        <a href={CONFIG.whatsapp} target="_blank" rel="noreferrer" style={{ fontFamily:"'DM Mono',monospace", fontSize:11, letterSpacing:'3px', textTransform:'uppercase', color:'#555', marginTop:12 }}>WhatsApp →</a>
      </div>

      <style>{`@media(max-width:900px){.nav-desktop{display:none!important}.ham-btn{display:flex!important}}`}</style>
    </>
  )
}
