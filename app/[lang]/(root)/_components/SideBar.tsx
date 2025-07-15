'use client'
import React, { useEffect } from 'react'
import { Icon } from '@iconify/react'
import SideBtn from './SideBtn'
import { useSideBar } from '@/lib/store'
const SideBar = () => {
	const { aside, setAside } = useSideBar()
	useEffect(() => {
		setAside(window.location.hash)
	}, [])
	return (
		<div className='flex md:flex-col md:gap-2 w-fit'>
			<div className='bg-secondyDark flex items-center justify-center rounded-[5px] overflow-hidden'>
				<button className='rounded-[5px]  p-4  text-neutral-300 cursor-pointer'>
					<Icon icon='tabler:language' width='30' height='30' />
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
