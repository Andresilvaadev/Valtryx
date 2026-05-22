import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const [hovered, setHovered] = useState(false)
  let rx=0,ry=0,mx=0,my=0

  useEffect(() => {
    const move = e => { mx=e.clientX; my=e.clientY }
    document.addEventListener('mousemove', move)
    const loop = () => {
      rx+=(mx-rx)*.11; ry+=(my-ry)*.11
      if(dotRef.current){dotRef.current.style.left=mx+'px';dotRef.current.style.top=my+'px'}
      if(ringRef.current){ringRef.current.style.left=rx+'px';ringRef.current.style.top=ry+'px'}
      requestAnimationFrame(loop)
    }
    loop()
    const over = e => { if(e.target.closest('a,button')) setHovered(true)  }
    const out  = e => { if(e.target.closest('a,button')) setHovered(false) }
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout',  out)
    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout',  out)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className={`cursor ${hovered?'hovered':''}`} />
      <div ref={ringRef} className={`cursor-ring ${hovered?'hovered':''}`} />
    </>
  )
}
