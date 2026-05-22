import { useEffect, useRef } from 'react'

/*
  Background: slow aurora light streaks
  - Multiple thin, long light bands drift diagonally
  - Each band has a soft gaussian spread and shifts in opacity
  - Completely different from blobs or grids
*/
export default function Background() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H, animId

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Aurora streaks — diagonal bands of soft light
    const streaks = [
      { y: 0.15, speed: 0.00018, width: 0.28, phase: 0,    opacity: 0.032, angle: -0.18 },
      { y: 0.42, speed: 0.00012, width: 0.20, phase: 1.8,  opacity: 0.024, angle:  0.12 },
      { y: 0.65, speed: 0.00022, width: 0.35, phase: 3.5,  opacity: 0.028, angle: -0.08 },
      { y: 0.28, speed: 0.00009, width: 0.16, phase: 2.2,  opacity: 0.018, angle:  0.22 },
      { y: 0.80, speed: 0.00016, width: 0.24, phase: 4.8,  opacity: 0.020, angle: -0.15 },
      { y: 0.55, speed: 0.00014, width: 0.18, phase: 1.1,  opacity: 0.016, angle:  0.06 },
    ]

    // Floating dust particles
    const dust = Array.from({ length: 60 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.4 + Math.random() * 1.2,
      vx: (Math.random() - 0.5) * 0.00008,
      vy: (Math.random() - 0.5) * 0.00006,
      opacity: 0.02 + Math.random() * 0.06,
      phase: Math.random() * Math.PI * 2,
    }))

    let t = 0

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#080808'
      ctx.fillRect(0, 0, W, H)
      t += 0.6

      // ── Aurora streaks ──
      streaks.forEach(s => {
        // oscillate y position slowly
        const yPos = (s.y + Math.sin(t * s.speed * 800 + s.phase) * 0.06) * H
        const bandH = s.width * H
        const opPulse = s.opacity * (0.7 + Math.sin(t * s.speed * 600 + s.phase * 1.3) * 0.3)

        // save/restore for rotated band
        ctx.save()
        ctx.translate(W / 2, yPos)
        ctx.rotate(s.angle)

        const grad = ctx.createLinearGradient(0, -bandH / 2, 0, bandH / 2)
        grad.addColorStop(0,   'rgba(0,0,0,0)')
        grad.addColorStop(0.2, `rgba(255,255,255,${opPulse * 0.4})`)
        grad.addColorStop(0.5, `rgba(255,255,255,${opPulse})`)
        grad.addColorStop(0.8, `rgba(255,255,255,${opPulse * 0.4})`)
        grad.addColorStop(1,   'rgba(0,0,0,0)')

        // fade left/right edges
        const hGrad = ctx.createLinearGradient(-W * 0.8, 0, W * 0.8, 0)
        hGrad.addColorStop(0,   'rgba(0,0,0,0)')
        hGrad.addColorStop(0.15,'rgba(255,255,255,1)')
        hGrad.addColorStop(0.85,'rgba(255,255,255,1)')
        hGrad.addColorStop(1,   'rgba(0,0,0,0)')

        // draw band
        ctx.fillStyle = grad
        ctx.globalCompositeOperation = 'lighter'
        ctx.globalAlpha = 0.7
        ctx.fillRect(-W * 0.9, -bandH / 2, W * 1.8, bandH)

        ctx.restore()
        ctx.globalCompositeOperation = 'source-over'
        ctx.globalAlpha = 1
      })

      // ── Dust ──
      dust.forEach(d => {
        d.x += d.vx; d.y += d.vy
        if (d.x < 0) d.x = 1; if (d.x > 1) d.x = 0
        if (d.y < 0) d.y = 1; if (d.y > 1) d.y = 0
        const op = d.opacity * (0.5 + Math.sin(t * 0.02 + d.phase) * 0.5)
        ctx.beginPath()
        ctx.arc(d.x * W, d.y * H, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${op})`
        ctx.fill()
      })

      // ── Deep vignette ──
      const vig = ctx.createRadialGradient(W/2, H/2, H * 0.1, W/2, H/2, H * 0.95)
      vig.addColorStop(0, 'rgba(0,0,0,0)')
      vig.addColorStop(1, 'rgba(0,0,0,0.72)')
      ctx.fillStyle = vig
      ctx.fillRect(0, 0, W, H)

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} style={{ position:'fixed', inset:0, width:'100%', height:'100%', zIndex:0, pointerEvents:'none' }} />
      {/* Grain */}
      <div style={{
        position:'fixed', inset:0, zIndex:1, pointerEvents:'none',
        backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
        opacity: 0.038,
      }} />
    </>
  )
}
