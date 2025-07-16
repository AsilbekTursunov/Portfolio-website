'use client'

import PageTransition from '@/components/PageTransition'
import AboutMe from './AboutMe'
import SideBar from './SideBar'
import UserCard from './UserCard'
import Resume from './Resume'

const MainWrap = () => {
	return (
		<div className='flex flex-col lg:flex-row'>
			<div className='w-[90%] lg:w-[540px] flex flex-row h-fit '>
				<div className='mr-2'>
					<SideBar />
				</div>
				<UserCard />
			</div>
			<div className='w-[90%] lg:w-[720px] border flex items-center flex-1 overflow-hidden  relative '>
				<div className='w-full flex-1'>
					<PageTransition>
						<div className='overflow-hidden lg:h-[600px] flex-1'>
							<Resume />
						</div>
					</PageTransition>
				</div>
			</div>
		</div>
	)
}

export default MainWrap
