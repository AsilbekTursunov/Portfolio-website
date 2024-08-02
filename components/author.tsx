'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/moving-border'
import { socials } from '@/constans'
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'

const Author = () => {
  return (
    <div className=' container  mx-auto my-36 pr-5 pl-5 '>
      <div className=' flex flex-col lg:flex-row'>
        <div className='   w-full lg:w-3/4  text-white    '>
          <div className=' flex flex-col gap-3 mb-10'>
            <p className='text-2xl md:text-4xl font-extralight'>Hi There!</p>
            <span className='text-amber-500 text-5xl lg:text-7xl font-bold'>
              I am{' '}
              <Typewriter
                words={['Asilbek Tursunov', 'Frontend Developer', 'a Student']}
                loop={Infinity}
                cursor
                cursorStyle='|'
                typeSpeed={300}
                deleteSpeed={200}
                delaySpeed={1000}
              />
            </span>{' '}
            <span className='text-2xl md:text-4xl font-extralight'>I make the complex simple.</span>
          </div>
          <div className='flex flex-wrap justify-start items-start gap-3  '>
            {socials.map(item => (
              <Link
                href={item.link}
                key={item.id}
                className='max-md:p-2 p-3 border border-neutral-200 rounded-full flex items-center justify-center'
                target='_blank'
              >
                {<item.image className='max-md:size-3 size-5 lg:size-5' />}
              </Link>
            ))}
          </div>
          <div className='mt-10'>
            <a href='#contact' className='bg-amber-500 text-white py-2 px-8 relative  ' id='cv'>
              {' '}
              Contact
            </a>
          </div>
        </div>

        <Image
          src={'/dev.jpg'}
          width={1020}
          height={1050}
          alt='dev-log'
          className=' sm:w-2/3 max-lg:mx-auto lg:w-1/4 mt-20 lg:-mt-20 lg:mr-20 border-amber-400 col-span-2 rounded-tl-3xl rounded-br-3xl relative lg:top-20'
        />
      </div>
    </div>
  )
}

export default Author
