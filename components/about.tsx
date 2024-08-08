/* eslint-disable react/jsx-key */

'use client'
import { aboutAuthor } from '@/constans'
import React from 'react'
import Skills from './skills'

const About = () => {
  return (
    <div className='container   pr-5 pl-5'>
      <div className='flex flex-col gap-4  ' id='about'>
        <div className='text-center relative flex items-center justify-center my-4'>
          <h1 className='text-[38px] font-bold text-white  z-20  p-4'>About me</h1>
          <span className=' absolute text-[60px] lg:text-[100px] text-slate-800/40 font-black   '>
            Personal
          </span>
        </div>
        <div className='flex md:gap-6'>
          <div className=' '>
            <div
              className='   text-justify text-slate-400/90 max-md:text-sm md:text-xl lg:text-2xl'
              dangerouslySetInnerHTML={{ __html: aboutAuthor.bio }}
            ></div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10'>
              <div className='flex flex-col gap-4'>
                <h3 className='text-amber-500  text-3xl'>Personal details</h3>

                <p className='text-slate-400/90 flex justify-between max-md:text-sm md:text-xl lg:text-xl'>
                  <span className=' capitalize'>Full Name </span>
                  <span className='text-white'>Asilbek Tursunov</span>
                </p>
                <p className='text-slate-400/90 flex justify-between max-md:text-sm md:text-xl lg:text-xl'>
                  <span className=' capitalize'>Age</span>
                  <span className='text-white'>22 years old</span>
                </p>
                <p className='text-slate-400/90 flex justify-between max-md:text-sm md:text-xl lg:text-xl'>
                  <span className=' capitalize'>Expertise</span>
                  <span className='text-white'>Frontend Developer</span>
                </p>
                <p className='text-slate-400/90 flex justify-between max-md:text-sm md:text-xl lg:text-xl'>
                  <span className=' capitalize'>Phone</span>
                  <span className='text-white'>+998 91 157 46 65</span>
                </p>
                <p className='text-slate-400/90 flex justify-between max-md:text-sm md:text-xl lg:text-xl'>
                  <span className=' capitalize'>Address</span>
                  <span className='text-white'>Fergana / Uzbekistan</span>
                </p>
                <p className='text-slate-400/90 flex justify-between max-md:text-sm md:text-xl lg:text-xl'>
                  <span className=' capitalize'>Job status</span>
                  <span className='text-white'>Open to work</span>
                </p>
              </div>
              <div className='flex flex-col gap-4'>
                <h3 className='text-amber-500  text-3xl'>Social links</h3>
                <p className='text-slate-400/90 flex justify-between max-md:text-sm md:text-xl lg:text-xl'>
                  <span className=' capitalize'>Email</span>
                  <a
                    href='https://asilbekt84@gmail.com'
                    target='_blank'
                    className='text-white hover:text-amber-500 transition-all'
                  >
                    asilbek84@gmail.com
                  </a>
                </p>
                <p className='text-slate-400/90 flex justify-between max-md:text-sm md:text-xl lg:text-xl'>
                  <span className=' capitalize'>Telegram</span>
                  <a
                    href='https://t.me/asilbek_tursunov'
                    target='_blank'
                    className='text-white hover:text-amber-500 transition-all'
                  >
                    t.me/asilbek_tursunov
                  </a>
                </p>
                <p className='text-slate-400/90 flex justify-between max-md:text-sm md:text-xl lg:text-xl'>
                  <span className=' capitalize'>Linkedin</span>
                  <a
                    href='https://www.linkedin.com/in/asilbek-tursunov-03236220a/'
                    target='_blank'
                    className='text-white hover:text-amber-500 transition-all'
                  >
                    linked.in/asilbek-tursunov
                  </a>
                </p>
                <p className='text-slate-400/90 flex justify-between max-md:text-sm md:text-xl lg:text-xl'>
                  <span className=' capitalize'>Git hub</span>
                  <a
                    href='https://github.com/AsilbekTursunov'
                    target='_blank'
                    className='text-white hover:text-amber-500 transition-all'
                  >
                    github.com/AsilbekTursunov
                  </a>
                </p>
                <div className='mt-4'>
                  <a
                    href='/cv.pdf'
                    className='bg-amber-500 text-white py-2 px-3 relative cursor-pointer '
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
              Skills
            </span>
          </div>
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default About
