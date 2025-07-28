import { Icon, IconifyIcon } from '@iconify/react'
import { Button } from '@/src/components/ui/button'

interface ISideBtn {
	onClick?: () => void
	href: string
	iconName: string | IconifyIcon
	label: string
	isLast?: boolean
	isActive?: boolean
}

const SideBtn = ({ onClick, href, iconName, label, isLast = false, isActive }: ISideBtn) => {
	return (
		<Button
			onClick={onClick}
			className={`aside-btn hover:bg-transparent bg-transparent no-underline max-lg:flex`}
		>
			<Icon icon={iconName} width='24' height='24' className={isActive ? 'text-amber-500' : ''} />
			<span className={` lg:flex ${isActive ? 'text-amber-500' : ''}`}>{label}</span>
			{!isLast && <span className='aside-border hidden lg:flex' />}
		</Button>
	)
}

export default SideBtn
