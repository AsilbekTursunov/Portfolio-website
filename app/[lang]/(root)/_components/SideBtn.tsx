import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useSideBar } from '@/lib/store'

interface ISideBtn {
	onClick?: () => void
	href: string
	iconName: string
	label: string
	isLast?: boolean
	isActive?: boolean
}

const SideBtn = ({ onClick, href, iconName, label, isLast = false, isActive }: ISideBtn) => {
	const { setAside } = useSideBar()
	return (
		<Link href={href} onClick={() => setAside(href)} className={`aside-btn no-underline`}>
			<Icon icon={iconName} width='24' height='24' className={isActive ? 'text-amber-500' : ''} />
			<span className={`hidden md:flex ${isActive ? 'text-amber-500' : ''}`}>{label}</span>
			{!isLast && <span className='aside-border' />}
		</Link>
	)
}

export default SideBtn
