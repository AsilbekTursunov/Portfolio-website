// components/PageTransition.tsx
'use client'
import { useSideBar } from '@/lib/store'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageTransition({ children }: { children: React.ReactNode }) {
	const { aside } = useSideBar()
	return (
		<AnimatePresence mode='wait'>
			<motion.div
				key={aside}
				initial={{ opacity: 0, y: 100 }} // Component pastdan boshlanadi
				animate={{ opacity: 1, y: 0 }} // Markazda ko'rinadie
				exit={{ opacity: 0, y: -100 }} // Tepaga ko'tarilib yo'qoladi
				transition={{ duration: 1.2 }} // 0.6 sekund smooth o'tish
			>
				<div className=' lg:h-[600px] flex-1 '>{children}</div>
			</motion.div>
		</AnimatePresence>
	)
}
