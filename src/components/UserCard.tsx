'use client'
import { socials } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { useTranslations } from 'next-intl'

const UserCard = () => {
	const t = useTranslations()
	return (
		<div className='flex flex-1 w-full flex-col justify-between h-[620px]  relative bg-secondyDark rounded-[5px] shadow-2xl z-20 shadow-zinc-900 overflow-hidden'>
			<div className='  w-full'>
				<Image
					src={'/back.jpg'}
					alt='banner-image'
					width={1000}
					height={1000}
					className='w-full object-cover h-80'
				/>
			</div>
			<div className=' flex-1 flex-col  justify-between  box-content h-20 rounded-t-[50%] -top-14 relative w-full flex items-center  bg-secondyDark'>
				<div className='relative'>
					<Image
						src={'/asilbek.jpg'}
						alt='userimage'
						width={1000}
						height={1000}
						unoptimized
						className=' relative z-10 -top-14 object-cover size-32 rounded-full '
					/>
					<span className='absolute size-32 -top-12 -left-2 z-0 bg-gradient-to-br rounded-full from-yellow-400/70 to-yellow-500/10'></span>
				</div>
				<h2 className='text-neutral-300 text-[34px] font-bold'>Asilbek Tursunov</h2>
				<span className='text-neutral-300 text-sm '>
					<Typewriter
						words={[
							'Programmer',
							'Frontend Developer React | Vue',
							'Mobile Developer React Native',
						]}
						loop={Infinity}
						cursor
						cursorStyle='|'
						typeSpeed={100}
						deleteSpeed={50}
						delaySpeed={500}
					/>
				</span>
				<div className='flex gap-2 my-2'>
					{socials.map(item => (
						<Link
							href={item.link}
							key={item.id}
							className='max-md:p-2 p-3 rounded-full flex items-center justify-center'
							target='_blank'
						>
							{<item.image className=' size-4' />}
						</Link>
					))}
				</div>
			</div>
			<div className='   mt-20 w-full bottom-0    flex relative '>
				<Link
					href={'/resume-en.pdf'}
					target='_blank'
					className='text-neutral-200 border-r border-r-neutral-700 relative flex-1 flex p-4  gap-2 items-center justify-center'
				>
					{t('downloaden')}
					<Icon icon='hugeicons:file-download' width='16' height='16' />
				</Link>
				<Link
					target='_blank'
					href={'/resume-uz.pdf'}
					className='text-neutral-200 flex-1 flex gap-2 p-4 items-center justify-center'
				>
					{t('downloaduz')}
					<Icon icon='hugeicons:file-download' width='16' height='16' />
				</Link>
				<span className='aside-border top-0 '></span>
			</div>
		</div>
	)
}

export default UserCard
