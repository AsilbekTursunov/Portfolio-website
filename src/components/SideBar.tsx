'use client'
import React, { useEffect } from 'react'
import SideBtn from './SideBtn'
import { useSideBar } from '@/lib/store'
import { useRouter, usePathname as nextPathname } from 'next/navigation'
import { changeLocale } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '../i18n/navigation'
const SideBar = () => {
	const { aside, setAside } = useSideBar()
	const t = useTranslations()
	const pathname = nextPathname()
	const pathName = usePathname()
	useEffect(() => {
		setAside('about')
	}, [])

	return (
		<div className='flex max-lg:border-t max-lg:border-t-neutral-600 max-lg:left-0 max-lg:w-full max-lg:fixed lg:top-0  max-lg:bottom-0 lg:flex-col lg:gap-2 lg:w-[80px] z-50 lg:-left-[90px]'>
			<div className='bg-secondyDark max-lg:w-[40%] relative  flex lg:flex-col items-center justify-center lg:rounded-[5px] overflow-hidden'>
				<Link
					href={pathName}
					locale='uz'
					className={`rounded-[5px]  p-4 max-lg:flex-1  cursor-pointer ${
						pathname == '/uz' ? 'text-amber-500' : 'text-neutral-300'
					}`}
				>
					UZ
				</Link>
				<Link
					href={pathName}
					locale='en'
					className={`rounded-[5px]  p-4 max-lg:flex-1 cursor-pointer ${
						pathname == '/en' ? 'text-amber-500' : 'text-neutral-300'
					}`}
				>
					EN
				</Link>
				<span className=' lg:hidden grad-border-tb ' />
			</div>
			<div className='bg-secondyDark max-lg:flex-1  flex lg:flex-col lg:rounded-[5px] overflow-hidden max-lg:justify-around'>
				<SideBtn
					href='#about'
					onClick={() => setAside('about')}
					isActive={aside == 'about' ? true : false}
					iconName='tabler:user'
					label={t('about')}
				/>
				<SideBtn
					href='#resume'
					onClick={() => setAside('resume')}
					iconName='hugeicons:news'
					isActive={aside == 'resume' ? true : false}
					label={t('resume')}
				/>
				<SideBtn
					href='#projects'
					onClick={() => setAside('projects')}
					isActive={aside == 'projects' ? true : false}
					iconName='tabler:list'
					label={t('works')}
					isLast
				/>
			</div>
		</div>
	)
}

export default SideBar
