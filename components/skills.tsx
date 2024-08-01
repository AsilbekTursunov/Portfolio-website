/* eslint-disable react/jsx-key */
import React from 'react'
import { aboutAuthor } from '@/constans'
import { Meteors } from './ui/meteors'
import Image from 'next/image'
const Skills = () => {
  return (
    <div className='grid grid-cols-2   md:grid-cols-4  lg:grid-cols-3 xl:grid-cols-6 gap-4' id='skills'>
      {aboutAuthor.skills.map((skill, index) => (
        <div className='' key={skill.name}>
          <div className=' w-full relative max-w-xs'>
             
            <div className='relative shadow-xl   h-full overflow-hidden rounded-2xl py-4 flex flex-col justify-end items-center'>
              <Image
                src={skill.icon}
                alt={skill.name}
                width={100}
                height={100}
                className='size-14'
              />
              <p className='text-sm text-gray-500'>{skill.name}</p>
              <Meteors number={10} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills
