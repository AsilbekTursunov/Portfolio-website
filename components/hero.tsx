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
      <div className='relative'>
          <Author />
         
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
      </div>
    </div>
  )
}

export default Hero
