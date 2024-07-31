'use client'
import Image from 'next/image'
import React from 'react'
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
      <div className='relative  w-full bg-main'>
        <div className='container flex justify-between p-4 md:py-6 md:px-0'>
          <div className='flex items-center gap-2'>
            <Image
              src={'/site-logo-2.png'}
              width={60}
              height={60}
              className='block md:hidden '
              alt='logo'
            />
            <p className='text-3xl font-normal text-white hidden md:block '>
              <span className='text-amber-500  '>Tursunov/</span>Asilbek
            </p>
          </div>
          <ul className='hidden lg:flex items-center justify-center gap-4  '>
            {navItems.map(item => (
              <li className='group  rounded-md  transition-all py-1 px-2'>
                <a
                  href={item.link}
                  className='text-lg font-[100] group-hover:text-amber-500 transition-all'
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href='https://www.canva.com/design/DAGFoQtGZcI/iy17aNIbptJaB8gipJ011Q/view?utm_content=DAGFoQtGZcI&utm_campaign=designshare&utm_medium=link&utm_source=editor'
            className='bg-amber-500 text-white py-2 px-3 relative  '
            id='cv'
          >
            {' '}
            Download CV
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
