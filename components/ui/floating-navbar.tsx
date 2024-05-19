'use client'
import React, { useState } from 'react'
import { AiOutlineBars } from 'react-icons/ai'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll() 

  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollYProgress, 'change', current => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.001) {
        setVisible(false)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'flex max-md:left-5    max-md:w-fit md:max-w-fit  fixed top-10 inset-x-0 md:mx-auto border border-transparent dark:border-white/[0.2] rounded-md dark:bg-slate-900/90 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] p-2   md:px-4 md:py-2  items-center justify-center space-x-4',
          className
        )}
      >
        <div className='max-md:hidden w-full flex gap-4'>
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                'relative dark:text-neutral-50 p-2   items-center flex space-x-2 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500'
              )}
            >
              <span className=' block text-[16px]'>{navItem.name}</span>
            </Link>
          ))}
        </div>
        <span style={{ marginLeft: `0px`, position: `relative` }}>
          <Image
            src={'/menu.png'}
            alt='profile'
            width={64}
            height={64}
            className='md:hidden ml-0 size-6 m-0'
            style={{ marginLeft: `0px` }}
            onClick={() => setIsOpen(prev => !prev)}
          />
        </span>
        <div
          className={` top-12 absolute max-md:flex flex-col -left-4 transition-all duration-200 md:hidden ${
            isOpen ? 'scale-100' : ' scale-0'
          }  p-2 rounded-md bg-slate-900/90 border border-neutral-200/10 w-80 z-50`}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                'relative dark:text-neutral-50 p-2 justify-center  items-center flex space-x-2 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500'
              )}
              onClick={() => setIsOpen(false)}
            >
              <span className=' block text-[16px]'>{navItem.name}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
