import { create } from 'zustand'

export interface ISide {
	aside: 'about' | 'resume' | 'projects'
	setAside: (side: 'about' | 'resume' | 'projects') => void
}

export const useSideBar = create<ISide>(set => ({
	aside: 'about',
	setAside: side => set({ aside: side }),
}))
