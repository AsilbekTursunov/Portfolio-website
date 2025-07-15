import { create } from 'zustand'

interface ISide {
	aside: string
	setAside: (side: string) => void
}

export const useSideBar = create<ISide>(set => ({
	aside: '',
	setAside: side => set({ aside: side }),
}))
