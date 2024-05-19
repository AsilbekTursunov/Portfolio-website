'use client'
import React from 'react'
import { FloatingNav } from './ui/floating-navbar'
import { FaHome } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { AiFillMessage } from 'react-icons/ai'
const navItems = [
  {
    name: 'Home',
    link: '#home',
  },
  {
    name: 'About',
    link: '#about',
  },
  {
    name: 'Skills',
    link: '#skills',
  },
  {
    name: 'Projects',
    link: '#projects',
  },
  {
    name: 'Education',
    link: '#education',
  },
]
const Navbar = () => {
  return (
    <div>
      <div className='relative  w-full '>
        <FloatingNav navItems={navItems} />
      </div>
    </div>
  )
}

export default Navbar
