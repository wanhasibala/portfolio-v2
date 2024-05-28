"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { clamp } from "three/src/math/MathUtils.js"

interface MagneticEffectProps {
  children: React.ReactNode
}

export default function MagneticEffect({ children }: MagneticEffectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
// @ts-ignore
  const handleMouse: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const { clientX, clientY } = e;
    // @ts-ignore
    const {height, width, left, top} = ref.current?.getBoundingClientRect();
    const middleX = clientX - (left + width/2)
    const middleY = clientY - (top + height/2)
    setPosition({x: middleX, y: middleY})
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

  return (
    <motion.div 
    ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}>
      {children}
    </motion.div>
  )
}