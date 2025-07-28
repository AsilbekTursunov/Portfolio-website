'use client'
import React, { useEffect } from 'react'
import SideBtn from './SideBtn'
import { useSideBar } from '@/lib/store'
import { usePathname, useRouter } from 'next/navigation'
import { changeLocale } from '@/lib/utils'
import { useTranslations } from 'next-intl'
const SideBar = () => {
	const { aside, setAside } = useSideBar()
	const t = useTranslations()
	const router = useRouter()
	const pathName = usePathname()
	useEffect(() => {
		setAside('about')
	}, [])

	const handleLang = (lang: string) => {
		router.replace(changeLocale(lang))
	}

	return (
		<div className='flex max-lg:border-t max-lg:border-t-neutral-600 max-lg:left-0 max-lg:w-full max-lg:fixed lg:top-0  max-lg:bottom-0 lg:flex-col lg:gap-2 lg:w-[80px] z-50 lg:-left-[90px]'>
			<div className='bg-secondyDark max-lg:w-[40%] relative  flex lg:flex-col items-center justify-center lg:rounded-[5px] overflow-hidden'>
				<button
					onClick={() => {
						handleLang('uz')
					}}
					className={`rounded-[5px]  p-4 max-lg:flex-1  cursor-pointer ${
						pathName == '/uz' ? 'text-amber-500' : 'text-neutral-300'
					}`}
				>
					UZ
				</button>
				<button
					onClick={() => {
						handleLang('en')
					}}
					className={`rounded-[5px]  p-4 max-lg:flex-1 cursor-pointer ${
						pathName == '/en' ? 'text-amber-500' : 'text-neutral-300'
					}`}
				>
					EN
				</button>
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
