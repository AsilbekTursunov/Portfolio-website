'use client'
import Image from 'next/image'
import React from 'react'
import { ModeToggle } from './mode-toggle'
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
    <div className=' bg-muted '>
      <div className='container flex justify-between py-6 '>
        <div className='flex items-center gap-2'>
          <Image
            src={'/site-logo-2.png'}
            width={60}
            height={60}
            className='block md:hidden '
            alt='logo'
          />
          <p className='text-3xl font-normal  text-white hidden md:block '>
            <span className='text-amber-500  '>Tursunov/</span>Asilbek
          </p>
        </div>
        <ul className='hidden lg:flex items-center justify-center gap-4  '>
          {navItems.map(item => (
            <li className='group  rounded-md  transition-all py-1 px-2'>
              <a
                href={item.link}
                className='text-lg font-[100] text-white group-hover:text-amber-500 transition-all'
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
