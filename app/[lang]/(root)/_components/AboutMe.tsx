'use client'
import React from 'react'

const AboutMe = () => {
	return (
		<div className=' bg-secondyDark justify-center lg:h-[560px] rounded-[5px] w-full'>
			<div className='flex items-center justify-start text-xl relative'>
				<span className='relative py-4 lg:ml-8'>
					About Me
					<span className='absolute -left-2 size-8 bg-gradient-to-tr rounded-full bg-transparent from-amber-500/90 to-amber-100/10'></span>
				</span>
				<span className='grad-border-tr' />
			</div>
			<div id='about-info' className=' p-8'>
				<h3 className='font-bold text-z text-neutral-400 mb-4'>Hello! I am Asilbek Tursunov</h3>
				<p className='font-normal text-neutral-400 text-justify'>
					Self-motivated Frontend Developer with 2 years of experience in building modern and
					responsive web applications using React and Vue. Successfully completed over 20 personal
					and team-based projects, gaining strong skills in component-based architecture, state
					management, and UI libraries. Learned through self-study and online courses, demonstrating
					the ability to quickly adapt, solve problems, and deliver quality solutions. Passionate
					about writing clean code, improving user experience, and contributing to collaborative
					development environments.
				</p>
				<div>
					<div className='flex flex-col'>
						<h3 className='text-neutral-400 font-bold my-3  text-base'>Personal details</h3>

						<p className='text-neutral-400 flex justify-between text-base font-normal'>
							<span className=' capitalize'>Full Name </span>
							<span className='text-white'>Asilbek Tursunov</span>
						</p>
						<p className='text-neutral-400 flex justify-between text-base font-normal'>
							<span className=' capitalize'>Age</span>
							<span className='text-white'>24 years old</span>
						</p>
						<p className='text-neutral-400 flex justify-between text-base font-normal'>
							<span className=' capitalize'>Expertise</span>
							<span className='text-white'>Frontend Developer</span>
						</p>
						<p className='text-neutral-400 flex justify-between text-base font-normal'>
							<span className=' capitalize'>Phone</span>
							<span className='text-white'>+998 91 157 46 65</span>
						</p>
						<p className='text-neutral-400 flex justify-between text-base font-normal'>
							<span className=' capitalize'>Address</span>
							<span className='text-white'>Fergana / Uzbekistan</span>
						</p>
						<p className='text-neutral-400 flex justify-between text-base font-normal'>
							<span className=' capitalize'>Job status</span>
							<span className='text-white'>Open to work</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutMe
