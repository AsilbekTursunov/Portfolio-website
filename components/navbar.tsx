import Image from 'next/image'
import React, { useState } from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Cross, Menu, MenuSquare, X } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  {
    name: 'Author',
    link: '#home',
    icon: '',
  },
  {
    name: 'About',
    link: '#about',
    icon: '',
  },
  {
    name: 'Skills',
    link: '#skills',
    icon: '',
  },
  {
    name: 'Projects',
    link: '#projects',
    icon: '',
  },
  {
    name: 'Education',
    link: '#education',
    icon: '',
  },
]
const Navbar = () => { 
  return (
    <div className='bg-[#020817] sticky top-0 w-full z-50' id='main'>
      <div className='container flex justify-between py-6 pr-5 pl-5 '>
        <Link href={'#main'} className='flex items-center gap-2'>
          <Image
            src={'/site-logo-2.png'}
            width={50}
            height={50}
            className='block md:hidden '
            alt='logo'
          />
          <p className='text-3xl font-normal  text-white hidden md:block '>
            <span className='text-amber-500  '>Tursunov/</span>Asilbek
          </p>
        </Link> 
        <ul className='hidden lg:flex items-center justify-center gap-4  '>
          {navItems.map(item => (
            <li key={item.name} className='group  rounded-md  transition-all py-1 px-2'>
              <a
                href={item.link}
                className='text-xl font-normal text-white group-hover:text-amber-500 transition-all'
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <span className='block lg:hidden items-center justify-center gap-4  '>
          <Sheet>
            <SheetTrigger>
              <Menu className='size-8' />
            </SheetTrigger>
            <SheetContent className='flex flex-col gap-3'>
              <SheetHeader className='flex flex-row justify-between items-center'>
                <Image
                  src={'/site-logo-2.png'}
                  width={50}
                  height={50}
                  className='block md:hidden '
                  alt='logo'
                />
                <SheetClose className='flex items-center justify-center h-full m-0'>
                  <X className=' size-10 p-2 h-full' />
                </SheetClose>
              </SheetHeader>
              {navItems.map(item => (
                <SheetClose key={item.name} className='group  rounded-md  transition-all py-1 px-2'>
                  <a
                    href={item.link}
                    className='text-xl font-normal text-white group-hover:text-amber-500 transition-all'
                  >
                    {item.name}
                  </a>
                </SheetClose>
              ))}
            </SheetContent>
          </Sheet>
        </span>
      </div>
    </div>
  )
}

export default Navbar
