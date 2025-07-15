'use client'

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
			<div className='w-[90%] lg:w-[720px]  flex items-center'>
				<div className='bg-secondyDark justify-center'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ad quam iure
					exercitationem. Doloremque ad perspiciatis quod suscipit consequatur earum.
				</div>
			</div>
		</div>
	)
}

export default MainWrap
