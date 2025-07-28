'use client'
import Link from 'next/link'
import React from 'react'
import { Icon } from '@iconify/react'
import { useTranslations } from 'next-intl'
const AboutMe = () => {
	const t = useTranslations()
	return (
		<div className='bg-secondyDark relative justify-center h-full max-lg:rounded-l-[5px] rounded-r-[5px] w-full overflow-hidden overflow-y-auto'>
			<div className='flex items-center justify-start text-xl relative'>
				<span className='relative py-4  ml-5'>
					{t('headerone')}
					<span className='absolute -left-2 size-8 bg-gradient-to-tr rounded-full bg-transparent from-amber-500/90 to-amber-100/10'></span>
				</span>
				<span className='grad-border-tr' />
			</div>
			<div id='about-info' className=' px-4 py-6'>
				<h3 className='font-bold text-z text-neutral-400 mb-4'>{t('aboutTitle')}</h3>
				<p className='font-normal text-neutral-400 text-justify'>{t('bio')}</p>
			</div>
			<div className='flex items-center justify-start text-xl relative'>
				<span className='relative py-4 ml-5'>
					{t('pdetails')}
					<span className='absolute -left-2 size-8 bg-gradient-to-tr rounded-full bg-transparent from-amber-500/90 to-amber-100/10'></span>
				</span>
				<span className='grad-border-tr' />
			</div>
			<div className='px-4 py-6'>
				<div className='flex flex-col gap-2 text-base font-normal '>
					<p className='text-neutral-400 flex justify-between '>
						<span className=' capitalize'>{t('name')} </span>
						<span className='flex-1 border-neutral-300 px-4'></span>
						<span className='text-white'>Asilbek Tursunov</span>
					</p>
					<p className='text-neutral-400 flex justify-between '>
						<span className=' capitalize'>{t('age')}</span>
						<span className='text-white'>24</span>
					</p>
					<p className='text-neutral-400 flex justify-between '>
						<span className=' capitalize'>{t('expertise')}</span>
						<span className='text-white'>Frontend Developer</span>
					</p>
					<p className='text-neutral-400 flex justify-between '>
						<span className=' capitalize'>{t('phone')}</span>
						<span className='text-white'>+998 91 157 46 65</span>
					</p>
					<p className='text-neutral-400 flex justify-between '>
						<span className=' capitalize'>{t('address')}</span>
						<span className='text-white'>{t('addressvalue')}</span>
					</p>
				</div>
			</div>
			<div className='flex items-center justify-start text-xl relative'>
				<span className='relative py-4 ml-5'>
					{t('slinks')}
					<span className='absolute -left-2 size-8 bg-gradient-to-tr rounded-full bg-transparent from-amber-500/90 to-amber-100/10'></span>
				</span>
				<span className='grad-border-tr' />
			</div>
			<div className='px-4 py-6'>
				<div className='flex flex-col gap-2'>
					<p className='text-neutral-400 flex justify-between text-base font-normal'>
						<span className=' capitalize'>{t('email')}</span>
						<Link
							href='https://asilbekt84@gmail.com'
							target='_blank'
							className='text-white hover:text-amber-500 transition-all'
						>
							asilbek84@gmail.com
						</Link>
					</p>
					<p className='text-neutral-400 flex justify-between text-base font-normal'>
						<span className=' capitalize'>{t('telegram')}</span>
						<Link
							href='https://t.me/asilbek_tursunov'
							target='_blank'
							className='text-white hover:text-amber-500 transition-all'
						>
							t.me/asilbek_tursunov
						</Link>
					</p>
					<p className='text-neutral-400 flex justify-between text-base font-normal'>
						<span className=' capitalize'>{t('linkedin')}</span>
						<Link
							href='https://www.linkedin.com/in/asilbek-tursunov-03236220a/'
							target='_blank'
							className='text-white hover:text-amber-500 transition-all'
						>
							linked.in/asilbek-tursunov
						</Link>
					</p>
					<p className='text-neutral-400 flex justify-between text-base font-normal'>
						<span className=' capitalize'>{t('github')}</span>
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
				<span className='relative py-4 ml-5'>
					{t('myservices')}
					<span className='absolute -left-2 size-8 bg-gradient-to-tr rounded-full bg-transparent from-amber-500/90 to-amber-100/10'></span>
				</span>
				<span className='grad-border-tr' />
			</div>
			<div className='grid grid-cols-2'>
				<div className='px-4 py-6 relative'>
					<div className='rounded-full text-amber-500 border-amber-500 border flex items-center justify-center size-14'>
						<Icon icon='hugeicons:html-5' width='30' height='30' />
					</div>
					<h2 className='font-bold text-lg text-neutral-100 my-3'> {t('serviceonetitle')}</h2>
					<p className='text-neutral-400 font-normal text-base'>{t('serviceonedesc')}</p>
					<span className='grad-border-tb' />
				</div>
				<div className='px-8 py-6'>
					<div className='rounded-full text-amber-500 border-amber-500 border flex items-center justify-center size-14'>
						<Icon icon='hugeicons:mobile-programming-01' width='30' height='30' />
					</div>
					<h2 className='font-bold text-lg text-neutral-100 my-3'>{t('servicetwotitle')}</h2>
					<p className='text-neutral-400 font-normal text-base'>{t('servicetwodesc')}</p>
				</div>
			</div>
		</div>
	)
}

export default AboutMe
