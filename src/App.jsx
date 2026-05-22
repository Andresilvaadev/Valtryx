import Background  from './components/Background'
import Cursor      from './components/Cursor'
import Navbar      from './components/Navbar'
import Footer      from './components/Footer'
import Hero        from './pages/Hero'
import Services    from './pages/Services'
import About       from './pages/About'
import Cases       from './pages/Cases'
import Diferenciais from './pages/Diferenciais'
import FAQ         from './pages/FAQ'
import Contact     from './pages/Contact'

const ITEMS = ['Sites Profissionais','Sistemas Web','Infraestrutura Cloud','Soluções Financeiras','IA & Analytics','Suporte 24/7']

function Marquee() {
  const all = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {all.map((item, i) => <span key={i} className="marquee-item">{item}</span>)}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Background />
      <Cursor />
      <Navbar />
      <main style={{ position:'relative', zIndex:2 }}>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Cases />
        <Diferenciais />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
