import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Footer from './footer'

const Education = () => {
  return (
    <div className='max-md:mx-3 md:container md:mx-auto' id='education'>
      <section className='text-gray-600  my-20'>
        <div className='text-center'>
          <h1 className='text-5xl text-white font-extrabold p-4 my-20'>
            Education
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          <div className='flex relative w-full  sm:items-center  mx-auto'>
            <div className='flex-grow md:pl-2  flex items-center  flex-col sm:flex-row'>
              <div className=' relative flex-shrink-0 w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full overflow-hidden inline-flex items-center justify-center'>
                <Image
                  src={'/ulugbek.jpg'}
                  alt='profile'
                  width={300}
                  height={300}
                />
              </div>
              <div className='flex-grow sm:pl-6 mt-6 sm: px-2  '>
                <h2 className='font-medium title-font text-slate-500/90 mb-1 text-xl'>
                  <Link
                    href={'https://www.youtube.com/@UlugbekSamigjonov'}
                    target='_blank'
                  >
                    Uugbek Samigjonom
                  </Link>
                </h2>
                <ul>
                  <li>Html</li>
                  <li>Css</li>
                  <li>Javascript Basics</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex relative w-full sm:items-center  mx-auto'>
            <div className='flex-grow md:pl-2 flex items-center flex-col sm:flex-row'>
              <div className=' relative overflow-hidden flex-shrink-0 w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center'>
                <Image
                  src={'/ahror.jpg'}
                  alt='profile'
                  width={300}
                  height={300}
                />
              </div>
              <div className='flex-grow sm:pl-6 mt-6 sm:mt-0 px-2'>
                <h2 className='font-medium title-font text-slate-500/90 mb-1 text-xl'>
                  <Link
                    href={'https://www.youtube.com/@akhrorweb'}
                    target='_blank'
                  >
                    Akhror Web
                  </Link>
                </h2>
                <ul>
                  <li>Javascript Advanced</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex relative  w-full   mx-auto'>
            <div className='flex-grow md:pl-2 flex  items-center  flex-col sm:flex-row'>
              <div className=' relative overflow-hidden flex-shrink-0 w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center'>
                <Image
                  src={'/sammi.jpg'}
                  alt='profile'
                  width={300}
                  height={300}
                />
              </div>
              <div className='flex-grow sm:pl-6 mt-6 sm:mt-0 px-2 '>
                <h2 className='font-medium title-font text-slate-500/90 mb-1 text-xl'>
                  <Link href={'https://sammi.ac/'} target='_blank'>
                    Sammar Badriddinov
                  </Link>
                </h2>
                <ul>
                  <li>Javascript Advanced</li>
                  <li>React.js</li>
                  <li>Typescript</li>
                  <li>Next.js</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex relative  sm:items-center  mx-auto'>
            <div className='flex-grow md:pl-2 flex  items-center flex-col sm:flex-row'>
              <div className=' relative overflow-hidden flex-shrink-0 w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center'>
                <Image
                  src={'/ibrohim.jpg'}
                  alt='profile'
                  width={300}
                  height={300}
                />
              </div>
              <div className='flex-grow sm:pl-6 mt-6 sm:mt-0 px-2'>
                <h2 className='font-medium title-font text-slate-500/90 mb-1 text-xl'>
                  <Link
                    href={'https://www.youtube.com/@IbrokhimIsmoilov'}
                    target='_blank'
                  >
                    Ibrokhimjon Usmonaliyev
                  </Link>
                </h2>
                <ul>
                  <li>Typescript</li>
                </ul>
              </div>
            </div>
          </div>
           
        </div>
      </section>
    </div>
  )
}

export default Education
