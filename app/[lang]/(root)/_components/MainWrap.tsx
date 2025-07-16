'use client'

import AboutMe from './AboutMe'
import SideBar from './SideBar'
import UserCard from './UserCard'

const MainWrap = () => {
	return (
		<div className='flex flex-col lg:flex-row'>
			<div className='w-[90%] lg:w-[540px] flex flex-row h-fit '>
				<div className='mr-2'>
					<SideBar />
				</div>
				<UserCard />
			</div>
			<div className='w-[90%] lg:w-[720px] flex items-center flex-1 overflow-hidden border relative -left-8 lg:ml-3  '>
				<AboutMe />
			</div>
		</div>
	)
}

export default MainWrap
