import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FcReadingEbook, FcWorkflow } from 'react-icons/fc'
import { LinkPreview } from './ui/link-preview'
import { IoIosArrowRoundForward } from 'react-icons/io'
const Education = () => {
  return (
    <div className='max-md:mx-3 md:container md:mx-auto' id='education'>
      <section className='text-gray-600  my-20'>
        <div className='text-center'>
          <h1 className='text-5xl text-white font-extrabold p-4 my-20'>Experience</h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className=''>
            <h1 className='text-3xl text-white font-normal  mb-5  flex gap-5 items-center'>
              <span className='p-3 rounded-full border border-amber-400'>
                <FcReadingEbook />
              </span>
              Education
            </h1>

            <div className=' border-l-2 border-l-amber-500 py-[30px] px-[50px] flex relative w-full  sm:items-center  mx-auto bg-muted-foreground/20'>
              <div className='w-5 h-5 bg-amber-500 absolute top-5 left-0' />
              <div className='flex-grow md:pl-2  flex items-center  flex-col sm:flex-row '>
                <div className='flex-grow '>
                  <h2 className='font-medium title-font text-slate-500/90 mb-1 text-xl group flex gap-3 items-center'>
                    <LinkPreview
                      url='https://www.youtube.com/@UlugbekSamigjonov'
                      className='font-medium text-[18px] text-white '
                    >
                      Basic Frontend Foundation
                    </LinkPreview>
                    <IoIosArrowRoundForward
                      size={20}
                      className='text-amber-200 group-hover:translate-x-5 transition-all '
                    />
                  </h2>

                  <div className='flex flex-col gap-2 mt-4'>
                    <p className='text-muted-foreground'> Ulugbek Samidjonov YouTube Channel</p>
                    <p className='text-muted-foreground'> Nov / 2023 - Jan / 2024</p>

                    <ul className='flex items-center gap-2 text-amber-700/70 flex-wrap'>
                      <li>Html</li>
                      <li>Css</li>
                      <li>Sass / Scss</li>
                      <li>Javascript Basics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='w-64 h-[1px] bg-amber-500 absolute bottom-0 left-0' />
              <div className='w-full h-[1px] bg-amber-500/30 absolute bottom-0 left-0' />
            </div>

            <div className=' border-l-2 border-l-amber-500 py-[30px] px-[50px] flex relative w-full  sm:items-center  mx-auto bg-muted-foreground/20'>
              <div className='w-5 h-5 bg-amber-500 absolute top-5 left-0' />
              <div className='flex-grow md:pl-2  flex items-center  flex-col sm:flex-row'>
                <div className='flex-grow '>
                  <h2 className='font-medium title-font text-slate-500/90 mb-1 text-xl group flex gap-3 items-center'>
                    <LinkPreview
                      url='https://www.youtube.com/@akhrorweb'
                      className='font-medium text-[18px] text-white '
                    >
                      Javascript Full Course
                    </LinkPreview>
                    <IoIosArrowRoundForward
                      size={20}
                      className='text-amber-200 group-hover:translate-x-5 transition-all '
                    />
                  </h2>
                  <div className='flex flex-col gap-2 mt-4'>
                    <p className='text-muted-foreground'> Ahrorbek Soliyev YouTube Channel</p>
                    <p className='text-muted-foreground'> Feb / 2024 - March / 2024</p>
                    <ul className='flex items-center gap-2 text-amber-700/70'>
                      <li>Advanced Javascript</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='w-64 h-[1px] bg-amber-500 absolute bottom-0 left-0' />
              <div className='w-full h-[1px] bg-amber-500/30 absolute bottom-0 left-0' />
            </div>

            <div className=' border-l-2 border-l-amber-500 py-[30px] px-[50px] flex relative w-full  sm:items-center  mx-auto bg-muted-foreground/20'>
              <div className='w-5 h-5 bg-amber-500 absolute top-5 left-0' />
              <div className='flex-grow md:pl-2  flex items-center  flex-col sm:flex-row'>
                <div className='flex-grow '>
                  <h2 className='font-medium title-font text-slate-500/90 mb-1 text-xl group flex gap-3 items-center'>
                    <LinkPreview
                      url='https://www.sammi.ac/'
                      className='font-medium text-[18px] text-white '
                    >
                      React.Js and Next.Js
                    </LinkPreview>
                    <IoIosArrowRoundForward
                      size={20}
                      className='text-amber-200 group-hover:translate-x-5 transition-all '
                    />
                  </h2>
                  <div className='flex flex-col gap-2 mt-4'>
                    <p className='text-muted-foreground'> Sammi.ac Education platform</p>
                    <p className='text-muted-foreground'> April / 2024 - May / 2024</p>
                    <ul className='flex items-center gap-2 text-amber-700/70'>
                      <li>React.Js and Next.Js and Javascript</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='w-64 h-[1px] bg-amber-500 absolute bottom-0 left-0' />
              <div className='w-full h-[1px] bg-amber-500/30 absolute bottom-0 left-0' />
            </div>

            <div className=' border-l-2 border-l-amber-500 py-[30px] px-[50px] flex relative w-full  sm:items-center  mx-auto bg-muted-foreground/20'>
              <div className='w-5 h-5 bg-amber-500 absolute top-5 left-0' />
              <div className='flex-grow md:pl-2  flex items-center  flex-col sm:flex-row'>
                <div className='flex-grow '>
                  <h2 className='font-medium title-font text-slate-500/90 mb-1 text-xl group flex gap-3 items-center'>
                    <LinkPreview
                      url='https://praktikum.sammi.ac/browse'
                      className='font-medium text-[18px] text-white '
                    >
                      Real and StartUp projects
                    </LinkPreview>
                    <IoIosArrowRoundForward
                      size={20}
                      className='text-amber-200 group-hover:translate-x-5 transition-all '
                    />
                  </h2>
                  <div className='flex flex-col gap-2 mt-4'>
                    <p className='text-muted-foreground'> Praktikum Sammi.ac payed course</p>
                    <p className='text-muted-foreground'> June / 2024 - August / 2024</p>
                    <ul className='flex items-center gap-2 text-amber-700/70'>
                      <li>React.Js, Next.Js, Firebase and Hygraph</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className=''>
            <h1 className='text-3xl text-white font-normal  mb-5  flex gap-5 items-center'>
              <span className='p-3 rounded-full border border-amber-400'>
                <FcWorkflow />
              </span>
              Work Experience
            </h1>
            <div className=' border-l-2 border-l-amber-500 py-[30px] px-[50px] flex relative w-full  sm:items-center  mx-auto bg-muted-foreground/20'>
              <div className='w-5 h-5 bg-amber-500 absolute top-5 left-0' />
              <div className='flex-grow md:pl-2  flex items-center  flex-col sm:flex-row '>
                <div className='flex-grow '>
                  <h2 className='font-medium title-font text-slate-500/90 mb-1 text-xl group flex gap-3 items-center'>
                    <LinkPreview
                      url='https://www.youtube.com/@UlugbekSamigjonov'
                      className='font-medium text-[18px] text-white '
                    >
                      Frontend Developer
                    </LinkPreview>
                    <IoIosArrowRoundForward
                      size={20}
                      className='text-amber-200 group-hover:translate-x-5 transition-all '
                    />
                  </h2>

                  <div className='flex flex-col gap-2 mt-4'>
                    <p className='text-muted-foreground'>
                      {' '}
                      Rishton Soft &nbsp;&nbsp;&nbsp; May / 2024 - August / 2024
                    </p>
                    <p className='text-muted-foreground text-justify'>
                      I have been working here as a Frontend Developer for 3 months. Currently, I am
                      participating in an internship on the project of a Crm system for an
                      educational brand. My main work is to change the website from old UI to new
                      one and add messaging and payment actions
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className='w-64 h-[1px] bg-amber-500 absolute bottom-0 left-0' />
              <div className='w-full h-[1px] bg-amber-500/30 absolute bottom-0 left-0' /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Education
