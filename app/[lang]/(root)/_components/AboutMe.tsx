'use client'
import Link from 'next/link'
import React from 'react'
import { Icon } from '@iconify/react'
const AboutMe = () => {
	return (
		<div className='bg-secondyDark relative -left-4 pl-4 justify-center h-full rounded-r-[5px] w-full overflow-hidden overflow-y-auto'>
			<div className='flex items-center justify-start text-xl relative'>
				<span className='relative py-4 lg:ml-8'>
					About Me
					<span className='absolute -left-2 size-8 bg-gradient-to-tr rounded-full bg-transparent from-amber-500/90 to-amber-100/10'></span>
				</span>
				<span className='grad-border-tr' />
			</div>
			<div id='about-info' className=' px-8 py-6'>
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
			</div>
			<div className='flex items-center justify-start text-xl relative'>
				<span className='relative py-4 lg:ml-8'>
					Personal details
					<span className='absolute -left-2 size-8 bg-gradient-to-tr rounded-full bg-transparent from-amber-500/90 to-amber-100/10'></span>
				</span>
				<span className='grad-border-tr' />
			</div>
			<div className='px-8 py-6'>
				<div className='flex flex-col gap-2'>
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
			<div className='flex items-center justify-start text-xl relative'>
				<span className='relative py-4 lg:ml-8'>
					Social links
					<span className='absolute -left-2 size-8 bg-gradient-to-tr rounded-full bg-transparent from-amber-500/90 to-amber-100/10'></span>
				</span>
				<span className='grad-border-tr' />
			</div>
			<div className='px-8 py-6'>
				<div className='flex flex-col gap-2'>
					<p className='text-neutral-400 flex justify-between text-base font-normal'>
						<span className=' capitalize'>Email</span>
						<Link
							href='https://asilbekt84@gmail.com'
							target='_blank'
							className='text-white hover:text-amber-500 transition-all'
						>
							asilbek84@gmail.com
						</Link>
					</p>
					<p className='text-neutral-400 flex justify-between text-base font-normal'>
						<span className=' capitalize'>Telegram</span>
						<Link
							href='https://t.me/asilbek_tursunov'
							target='_blank'
							className='text-white hover:text-amber-500 transition-all'
						>
							t.me/asilbek_tursunov
						</Link>
					</p>
					<p className='text-neutral-400 flex justify-between text-base font-normal'>
						<span className=' capitalize'>Linkedin</span>
						<Link
							href='https://www.linkedin.com/in/asilbek-tursunov-03236220a/'
							target='_blank'
							className='text-white hover:text-amber-500 transition-all'
						>
							linked.in/asilbek-tursunov
						</Link>
					</p>
					<p className='text-neutral-400 flex justify-between text-base font-normal'>
						<span className=' capitalize'>Git hub</span>
						<Link
							href='https://github.com/AsilbekTursunov'
							target='_blank'
							className='text-white hover:text-amber-500 transition-all'
						>
							github.com/AsilbekTursunov
						</Link>
					</p>
				</div>
			</div>
			<div className='flex items-center justify-start text-xl relative'>
				<span className='relative py-4 lg:ml-8'>
					My Services
					<span className='absolute -left-2 size-8 bg-gradient-to-tr rounded-full bg-transparent from-amber-500/90 to-amber-100/10'></span>
				</span>
				<span className='grad-border-tr' />
			</div>
			<div className='grid grid-cols-2'>
				<div className='px-8 py-6 relative'>
					<div className='rounded-full text-amber-500 border-amber-500 border flex items-center justify-center size-14'>
						<Icon icon='hugeicons:html-5' width='30' height='30' />
					</div>
					<h2 className='font-bold text-lg text-neutral-100 my-3'>Front-End</h2>
					<p className='text-neutral-400 font-normal text-base'>
						Modern and mobile-ready website that will help you reach all of your marketing.
					</p>
					<span className='grad-border-tb' />
				</div>
				<div className='px-8 py-6'>
					<div className='rounded-full text-amber-500 border-amber-500 border flex items-center justify-center size-14'>
						<Icon icon='hugeicons:mobile-programming-01' width='30' height='30' />
					</div>
					<h2 className='font-bold text-lg text-neutral-100 my-3'>Mobile</h2>
					<p className='text-neutral-400 font-normal text-base'>
						Custom mobile app development focused on performance and user experience.
					</p>
				</div>
			</div>
		</div>
	)
}

export default AboutMe
