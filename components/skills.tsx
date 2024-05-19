/* eslint-disable react/jsx-key */
import React from 'react'
import { aboutAuthor } from '@/constans'
import { Meteors } from './ui/meteors'
import Image from 'next/image'
const Skills = () => {
  return (
    <div className='grid grid-cols-2   md:grid-cols-4  lg:grid-cols-6 gap-4' id='skills'>
      {aboutAuthor.skills.map((skill, index) => (
        <div className='' key={skill.name}>
          <div className=' w-full relative max-w-xs'>
            <div className='absolute inset-0 h-full w-full bg-gradient-to-r from-blue-100/10 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full  ' />
            <div className='relative shadow-xl bg-gray-900 border border-gray-800 h-full overflow-hidden rounded-2xl py-4 flex flex-col justify-end items-center'>
              <Image
                src={skill.icon}
                alt={skill.name}
                width={100}
                height={100}
              />
              <Meteors number={20} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills
