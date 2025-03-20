import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='max-md:mx-3 md:container md:mx-auto my-5 '>
      <footer className='text-gray-600 t '>
        <div className=' px-5 py-8 mx-auto flex items-center sm:flex-row flex-col z-[10000] gap-10'>
          <div className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
            <span className='ml-3 text-xl text-slate-500'>Asilbek Tursunov</span>
          </div>
          <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4   sm:py-2 sm:mt-0 mt-4'>
            © 2024 Github —
            <a
              href='https://github.com/AsilbekTursunov'
              className='text-gray-600 ml-1'
              target='_blank'
            >
              @asilbektursunov
            </a>
          </p> 
        </div>
      </footer>
    </div>
  )
}

export default Footer
