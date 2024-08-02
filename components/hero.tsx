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

        <About />

        <Projects />
        <div className=' '>
          <Education />
        </div>
      </div>
    </div>
  )
}

export default Hero
