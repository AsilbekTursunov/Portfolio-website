/* eslint-disable react/jsx-key */
'use client'
import Image from 'next/image'
import React from 'react' 
import Link from 'next/link'
import { products } from '@/constans'
const Projects = () => {
  return (
    <>
      <div className='max-md:mx-3 md:container md:mx-auto' id='projects'>
        <div className='text-center'>
          <h1 className='text-5xl text-white font-extrabold p-4 my-20'>Projects</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
          {products.map((product, index) => (
            <div className='flex flex-col gap-2  bg-muted-foreground/20 '>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={200}
                height={200}
                className='w-full'
              />
              <div className='flex flex-col gap-2 py-3 px-4'>
                <h2 className='max-sm:text-sm text-xl font-bold text-muted-foreground/90   mt-4'>
                  {product.title}
                </h2>
                <p className='text-neutral-500 max-sm:text-xs text-sm max-w-sm mt-2 dark:text-neutral-300'>
                  {product.description}
                </p>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-2'>
                    {product.skills.map((skill, index) => (
                      <p
                        key={index}
                        className=' rounded-full border flex items-center justify-center p-2'
                      >
                        <Image src={skill} alt={`${index}`} width={24} height={24} />
                      </p>
                    ))}
                  </div>
                  <Link href={product.link} target='_blank' legacyBehavior>
                    <a className='text-white font-bold text-xs'>Check the site</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default Projects
{
  /**
    <HeroParallax products={products} />
*/
}
