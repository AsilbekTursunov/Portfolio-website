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
      <div className='text-center'>
        <h1 className='text-5xl text-white font-extrabold p-4'>About me</h1>
      </div>
      <div
        className='   text-justify text-slate-400/90'
        dangerouslySetInnerHTML={{ __html: aboutAuthor.bio }}
      ></div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='flex flex-col gap-4'>
          <h3 className='text-slate-400/90 text-3xl'>Personal details</h3>
          {Object.entries(aboutAuthor.personalDetails).map(([key, value]) => (
            <p key={value} className='text-slate-400/90 flex justify-between'>
              <span className=' capitalize'>{key.replace(/_/g, ' ')}</span>
              <span> {value}</span>
            </p>
          ))}
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='text-slate-400/90 text-3xl'>Interest</h3>
          <div className='flex flex-wrap gap-4'>
            {aboutAuthor.interests?.map(item => (
              <p
                key={item.id}
                className='text-slate-400/90 items-center bg-slate-600/30 rounded-md p-3  justify-between flex flex-col gap-2'
              >
                <Image src={item.icon} alt={item.name} width={32} height={32} />
                <span className=' capitalize'>{item.name}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center mt-3'>
        <a
          href={`https://www.canva.com/design/DAGFoQtGZcI/iy17aNIbptJaB8gipJ011Q/view?utm_content=DAGFoQtGZcI&utm_campaign=designshare&utm_medium=link&utm_source=editor`} target='_blank'
          className='inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-cv-btn  bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
        >
          Download Cv
        </a>
      </div>
      <div className='mt-10'>
      <div className='text-center'>
        <h1 className='text-5xl text-white font-extrabold p-4'>Skills</h1>
      </div>
        <Skills />
      </div>
    </div>
  )
}

export default About
