/* eslint-disable react/jsx-key */

'use client'
import { aboutAuthor } from '@/constans'
import Image from 'next/image'
import React from 'react'
import { ButtonsCard } from './ui/tailwindcss-buttons'
import Skills from './skills'

const About = () => {
  return (
    <div className='flex flex-col gap-4 p-4' id='about'>
      <div className='text-center relative flex items-center justify-center my-4'>
        <h1 className='text-[38px] font-bold text-white  z-20  p-4'>About me</h1>
        <span className=' absolute text-[60px] lg:text-[100px] text-slate-800/40 font-black   '>
          Personal
        </span>
      </div>
      <div className='flex md:gap-6'>
         
        <div className=' '>
          <div
            className='   text-justify text-slate-400/90 max-md:text-sm text-lg'
            dangerouslySetInnerHTML={{ __html: aboutAuthor.bio }}
          ></div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-4'>
            <div className='flex flex-col gap-4'>
              <h3 className='text-amber-500  text-3xl'>Personal details</h3>
              {Object.entries(aboutAuthor.personalDetails).map(([key, value]) => (
                <p
                  key={value}
                  className='text-slate-400/90 flex justify-between max-md:text-sm md:text-lg'
                >
                  <span className=' capitalize'>{key.replace(/_/g, ' ')}</span>
                  <span className='text-white'> {value}</span>
                </p>
              ))}
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className='text-amber-500 text-3xl'>Interest</h3>
              <div className='flex flex-wrap gap-4'>
                {aboutAuthor.interests?.map(item => (
                  <p
                    key={item.id}
                    className='text-slate-400/90 items-center bg-slate-600/30 rounded-md p-3  justify-between flex flex-col gap-2'
                  >
                    <Image src={item.icon} alt={item.name} width={32} height={32} />
                    <span className=' capitalize text-white'>{item.name}</span>
                  </p>
                ))}
              </div>
              <div className='mt-4'>
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
        </div>
      </div>
      <div className='mt-10'>
        <div className='text-center relative flex items-center justify-center my-4'>
          <h1 className='text-[38px] font-bold text-white  z-20  p-4'>Skills</h1>
          <span className=' absolute  text-[60px] lg:text-[100px] text-slate-800/40 font-black '>
            Experience
          </span>
        </div>
        <Skills />
      </div>
    </div>
  )
}

export default About
