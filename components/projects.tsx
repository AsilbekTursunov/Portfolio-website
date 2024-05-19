/* eslint-disable react/jsx-key */
'use client'
import Image from 'next/image'
import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
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
            <CardContainer key={index} className='inter-var  '>
              <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-950/30 dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-4 border  '>
                <CardItem translateZ='100' className='w-full mt-4'>
                  <Image
                    src={product.thumbnail}
                    height='1000'
                    width='1000'
                    className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                    alt='thumbnail'
                  />
                </CardItem>
                <CardItem
                  translateZ='50'
                  className='max-sm:text-sm text-xl font-bold text-neutral-600 dark:text-white mt-4'
                >
                  {product.title}
                </CardItem>
                <CardItem
                  as='p'
                  translateZ='60'
                  className='text-neutral-500 max-sm:text-xs text-sm max-w-sm mt-2 dark:text-neutral-300'
                >
                  {product.description}
                </CardItem>
                <div className='flex justify-between items-center mt-10'>
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href='https://twitter.com/mannupaaji'
                    target='__blank'
                    className='rounded-xl text-xs font-normal dark:text-white flex gap-2'
                  >
                    {product.skills.map((skill, index) => (
                      <p key={index} className=' rounded-full border flex items-center justify-center p-2'>
                        <Image
                          src={skill}
                          alt={`${index}`}
                          width={24}
                          height={24}
                        />
                      </p>
                    ))}
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as='button'
                    className='  text-white text-xs font-bold'
                  >
                    <Link href={product.link} target='_blank'>Check the site</Link>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
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
