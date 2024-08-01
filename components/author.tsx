'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/moving-border'
import { socials } from '@/constans'
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'

const Author = () => {
  return (
    <div className=' container  mx-auto mt-36 '>
      <div className='grid grid-cols-1 xl:grid-cols-4'>
        <div className=' rounded-br-lg lg:col-span-2 rounded-bl-lg  text-white    '>
          <div className=' flex flex-col gap-2 mb-10'>
            <p className='text-xl md:text-4xl'>Hi There!</p>
            <span className='text-amber-500 text-4xl lg:text-7xl font-bold'>
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
            <span className='text-xl md:text-4xl'>I make the complex simple.</span>
          </div>
          <div className='flex flex-wrap justify-start items-start gap-3  '>
            {socials.map(item => (
              <Link
                href={item.link}
                key={item.id}
                className='p-2 border border-neutral-200 rounded-full'
                target='_blank'
              >
                {<item.image className=' size-4 lg:size-5' />}
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
        <div
          className='flex border lg:col-span-1  lg:h-[500px] max-md:h-[300px] max-lg:h-[400px] lg:w-[500px] max-md:w-[300px] max-lg:w-[400px] max-xl:mx-auto  max-xl:my-20  items-center justify-center relative rounded-full  overflow-hidden p-1    '
          style={{ borderRadius: '50% 50% 50% 50% / 56% 56% 44% 44% ' }}
        >
          <Image
            src={'/dev-image-1.png'}
            width={1020}
            height={1050}
            alt='dev-log'
            className=' w-full relative lg:top-20'
          />
        </div>
      </div>
    </div>
  )
}

export default Author
