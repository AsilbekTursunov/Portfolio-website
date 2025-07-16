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
				initial={{ opacity: 0, y: 50 }} // Component pastdan boshlanadi
				animate={{ opacity: 1, y: 0 }} // Markazda ko'rinadi
				exit={{ opacity: 0, y: -50 }} // Tepaga ko'tarilib yo'qoladi
				transition={{ duration: 0.6 }} // 0.6 sekund smooth o'tish
			>
				{children}
			</motion.div>
		</AnimatePresence>
	)
}
