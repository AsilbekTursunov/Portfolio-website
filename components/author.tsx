'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/moving-border'
import { socials } from '@/constans'
import Link from 'next/link'
const Author = () => {
  return (
    <div className='max-md:mx-3 md:container md:mx-auto my-36'>
      <div className='flex flex-wrap  items-center justify-start max-lg:gap-10'>
        <div className=' rounded-br-lg rounded-bl-lg  text-white basis-full lg:basis-3/5 '>
          <div className=' flex flex-col gap-6 mb-10'>
          <p>Hi, Everyone</p>
          <span className='text-orange text-2xl lg:text-7xl uppercase'>
            {' '}
            I&apos;m Asilbek Tursunov{' '}
          </span>{' '}
          <span className=''>Frontend Developer</span>
         </div>
          <div className='flex flex-wrap justify-start items-start gap-3  '>
            {socials.map((social: any, idx: number) => (
              <Link
                href={social.link}
                key={idx}
                className='p-2 border border-neutral-200 rounded-full'
                target='_blank'
              >
                <Image
                  src={social.image}
                  alt='profile'
                  width={100}
                  height={100}
                  className=' size-3 jg:size-5'
                />
              </Link>
            ))}
          </div>
        </div>
        <div className='flex  items-center justify-center rounded-full p-1 basis-full lg:basis-2/5   '>
          <Button className='  dark:bg-transparent text-black dark:text-white     p-4 shadow-2xl  shadow-slate-300  '>
            <div className='rounded-full  '>
              <Image
                src={'/profile.jpg'}
                alt='profile'
                width={300}
                height={300}
                className='rounded-full'
              />
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Author
