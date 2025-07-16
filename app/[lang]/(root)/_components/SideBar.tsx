'use client'
import React, { useEffect } from 'react'
import { Icon } from '@iconify/react'
import SideBtn from './SideBtn'
import { useSideBar } from '@/lib/store'
import { usePathname, useRouter } from 'next/navigation'
import { changeLocale } from '@/lib/utils'
const SideBar = () => {
	const { aside, setAside } = useSideBar()
	const router = useRouter()
	const pathName = usePathname()
	useEffect(() => {
		setAside(window.location.hash)
	}, [])

	return (
		<div className='flex md:flex-col md:gap-2 w-fit'>
			<div className='bg-secondyDark flex flex-col items-center justify-center rounded-[5px] overflow-hidden'>
				<button
					onClick={() => router.push(changeLocale('uz'))}
					className={`rounded-[5px]  p-4   cursor-pointer ${
						pathName == '/uz' ? 'text-amber-500' : 'text-neutral-300'
					}`}
				>
					UZ
				</button>
				<button
					onClick={() => router.push(changeLocale('en'))}
					className={`rounded-[5px]  p-4  cursor-pointer ${
						pathName == '/en' ? 'text-amber-500' : 'text-neutral-300'
					}`}
				>
					EN
				</button>
				<button
					onClick={() => router.push(changeLocale('ru'))}
					className={`rounded-[5px]  p-4  cursor-pointer ${
						pathName == '/ru' ? 'text-amber-500' : 'text-neutral-300'
					}`}
				>
					RU
				</button>
			</div>
			<div className='bg-secondyDark flex md:flex-col rounded-[5px] overflow-hidden'>
				<SideBtn
					href='#about'
					isActive={aside == '#about' ? true : false}
					iconName='tabler:user'
					label='About'
				/>
				<SideBtn
					href='#resume'
					iconName='hugeicons:news'
					isActive={aside == '#resume' ? true : false}
					label='Resume'
				/>
				<SideBtn
					href='#projects'
					isActive={aside == '#projects' ? true : false}
					iconName='tabler:list'
					label='Projects'
				/>
				<SideBtn
					href='#courses'
					isActive={aside == '#courses' ? true : false}
					iconName='hugeicons:knowledge-02'
					label='Learn'
				/>
				<SideBtn
					isLast
					href='#contact'
					isActive={aside == '#contact' ? true : false}
					iconName='hugeicons:telegram'
					label='Contact'
				/>
			</div>
		</div>
	)
}

export default SideBar
