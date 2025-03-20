'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/moving-border'
import { socials } from '@/constants'
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'

const Author = () => {
  return (
    <div className=' container  mx-auto my-20 pr-5 pl-5 '>
      <div className=' flex flex-col lg:flex-row gap-5'>
        <div className="flex flex-col w-full lg:w-1/4 ">
          <div className='relative'>
            <Image
              src={'/owener.png'}
              width={1020}
              height={1050}
              alt='dev-log'
              className=' w-full mt-20 lg:-mt-20 lg:mr-20 border-amber-400 col-span-2 rounded-tl-3xl rounded-br-3xl relative lg:top-20'
            />
          </div>

        </div>
        <div className='   w-full lg:w-3/4  text-white    '>
          <div className=' flex flex-col gap-5 mb-10 lg:ml-10'>
            <p className='text-lg md:text-4xl font-extralight'>Hi There!</p>
            <span className='text-amber-500 text-2xl md:text-5xl lg:text-5xl font-bold'>
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
            <p className=' text-justify text-slate-400/90 about-size '>
              My name is Asilbek Tursunov, I am 23 years old. I am currently a 5th year student at the Fergana Branch
              of Tashkent University of Information Technologies. I have been studying frontend for 1.5 years and have
              been strengthening my knowledge by completing more than 20 projects so far.
            </p>
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
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Author
