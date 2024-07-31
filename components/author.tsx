'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/moving-border'
import { socials } from '@/constans'
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'

const Author = () => {
  return (
    <div className='max-md:mx-3 md:container md:mx-auto my-12'>
      <div className='flex flex-wrap  items-center justify-start max-lg:gap-10'>
        <div className=' rounded-br-lg rounded-bl-lg  text-white basis-full lg:basis-3/5 '>
          <div className=' flex flex-col gap-2 mb-10'>
            <p className='text-4xl'>Hi There!</p>
            <span className='text-amber-500 text-2xl lg:text-7xl font-bold'>
              I am{' '}
              <Typewriter
                words={['Asilbek', 'Developer', 'Student']}
                loop={Infinity}
                cursor
                cursorStyle='|'
                typeSpeed={150}
                deleteSpeed={150}
                delaySpeed={1000}
              />
            </span>{' '}
            <span className='text-[35px]' style={{ fontWeight: 50 }}>
              I make the complex simple.
            </span>
          </div>
          <div className='flex flex-wrap justify-start items-start gap-3  '>
            <a href='#contact' className='bg-amber-500 text-white py-2 px-8 relative  ' id='cv'>
              {' '}
              Contact
            </a>
            {/* {socials.map(item => (
              <Link
                href={item.link}
                key={item.id}
                className='p-2 border border-neutral-200 rounded-full'
                target='_blank'
              >
                {<item.image className=' size-3 lg:size-5' />}
              </Link>
            ))} */}
          </div>
        </div>
        <div
          className='flex border h-[700px]  items-center justify-center relative rounded-full  p-1 basis-full lg:basis-2/5   '
          style={{ borderRadius: '31% 69% 21% 79% / 68% 35% 65% 32% ' }}
        >
          <div
            className='border p-2 '
            style={{ borderRadius: '61% 39% 55% 45% / 46% 39% 61% 54% ' }}
          >
            <div
              className='border h-[700px]  overflow-hidden flex items-center justify-center'
              style={{ borderRadius: '46% 54% 54% 46% / 67% 51% 49% 33% ' }}
            >
              <Image
                src={'/dev-image-1.png'}
                width={1020}
                height={1050}
                alt='dev-log'
                className=' w-full  '
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Author
