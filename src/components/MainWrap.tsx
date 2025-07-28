'use client'

import PageTransition from '@/src/components/PageTransition'
import AboutMe from './AboutMe'
import SideBar from './SideBar'
import UserCard from './UserCard'
import Resume from './Resume'
import Projects from './Projects'
import Contact from './Contact'
import { useSideBar } from '@/lib/store'

const sections = {
	about: <AboutMe />,
	resume: <Resume />,
	projects: <Projects />,
}
const MainWrap = () => {
	const { aside } = useSideBar()
	return (
		<div className='flex flex-col lg:flex-row'>
			<div className='w-[100%]  lg:w-[480px] xl:w-[540px] lg:gap-2 flex flex-row h-fit relative '>
				<SideBar />
				<UserCard />
			</div>
			<div className='w-[100%]  mt-10 lg:mt-0 lg:w-[520px] xl:w-[720px] flex items-center flex-1  relative '>
				<div className='w-full flex-1 max-lg:mb-20'>
					<PageTransition key={aside}>{sections[aside]}</PageTransition>
				</div>
			</div>
		</div>
	)
}

export default MainWrap
