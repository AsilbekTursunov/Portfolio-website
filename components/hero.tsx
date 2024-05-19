'use client'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { AuroraBackground } from '@/components/ui/aurora-background'
import Author from './author'
import About from './about'
import Projects from './projects'
import Education from './education'
import Footer from './footer'
const Hero = () => {
  return (
    <div className=''>
      <AuroraBackground className='relative'>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className='relative w-full  gap-4 items-center justify-center px-4   '
        >
            <Author />
           
        </motion.div>
        <div className='bg-slate-950/40 w-full z-[100] py-10'>
          <div className='max-md:mx-3 md:container md:mx-auto '>
            <About />
          </div>
        </div>
        <div className='w-full   bg-slate-950/50'>
          <Projects />
        </div>
        <div className=' '>
          <Education />
          
        </div>
      </AuroraBackground>
    </div>
  )
}

export default Hero
