'use client';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router';
import { text, curve, translate } from './anim';

const routes = {
    "/": "Home",
    "/about": "About",
    "/contact": "Contact",
    "/project": "Projects"
}

const anim = (variants :any) => {
    return {
        variants,
        initial: "initial",
        animate: "enter",
        exit: "exit"
    }
}

export default function Curve({children, backgroundColor} :{children : React.ReactNode, backgroundColor: string}) {
    const router = useRouter();
    const [dimensions, setDimensions] = useState({
        width: null,
        height: null
    })

    useEffect( () => {
        function resize(){
            setDimensions({
                // @ts-ignore
                width: window.innerWidth,
                // @ts-ignore
                height: window.innerHeight
            })
        }
        resize();
        window.addEventListener("resize", resize)
        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [])
    
    return (
    <div className='page curve' style={{backgroundColor}}>
       <div style={{opacity: dimensions.width == null ? 1 : 0}} className='fixed h-[calc(100vh + 600px)] w-[100vw] pointer-events-none left-0 top-0 bg-[#171717] transition-opacity ease-linear duration-100'/>
       <motion.p className='absolute left-[50%] top-[40%] text-white text-5xl z-3 -translate-x-[50%] align-center' {...anim(text)}>
            {routes[router.route as keyof typeof routes]}
        </motion.p>
       {dimensions.width != null && <SVG {...dimensions}/>}
        {
            children
        }
    </div>
    )
}

const SVG = ({height, width}:{height:any,width:any}) => {

    const initialPath = `
        M0 300 
        Q${width/2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width/2} ${height + 600} 0 ${height + 300}
        L0 0
    `

    const targetPath = `
        M0 300
        Q${width/2} 0 ${width} 300
        L${width} ${height}
        Q${width/2} ${height} 0 ${height}
        L0 0
    `

    return (
        <motion.svg {...anim(translate)} className='fixed h-[calc(100vh + 600px)] w-[100vw] pointer-events-none left-0 top-0'>
            <motion.path {...anim(curve(initialPath, targetPath))} />
        </motion.svg>
    )
}