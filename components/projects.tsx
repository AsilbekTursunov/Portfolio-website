/* eslint-disable react/jsx-key */
'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { products } from '@/constans'
import { CircleArrowOutUpRight } from 'lucide-react'
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
                width={2000}
                height={2000}
                className='w-full h-56'
              />
              <div className='flex flex-col gap-2 py-3 px-4 h-full'>
                <p className=' education-title-size font-bold text-muted-foreground/90 '>
                  {product.title}
                </p>
                <p className='text-neutral-500 education-size mt-2 dark:text-neutral-300'>
                  {product.description}
                </p>
                <div className='flex justify-between items-center mt-4'>
                  <div className='flex items-center gap-2 '>
                    {product.skills.map((skill, index) => (
                      <p
                        key={index}
                        className=' rounded-full border border-muted-foreground flex items-center justify-center p-1'
                      >
                        <Image src={skill} alt={`${index}`} width={20} height={20} />
                      </p>
                    ))}
                  </div>
                  <div className='flex items-center gap-2'>
                    <a href={product.link} target='_blank'>
                      <span className='text-white font-normal text-xs'>Check the site</span>
                    </a>
                    <CircleArrowOutUpRight size={15} className='text-amber-500' />
                  </div>
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
