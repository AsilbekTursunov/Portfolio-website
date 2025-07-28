import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const changeLocale = (newLocale: string) => {
	const pathname = window.location.pathname // masalan: /ru
	const hash = window.location.hash // masalan: #resume
	const segments = pathname.split('/').filter(Boolean) // ['ru']

	// Faqat birinchi segmentni almashtiramiz
	if (segments.length > 0) {
		segments[0] = newLocale
	} else {
		segments.push(newLocale)
	}

	const newPath = '/' + segments.join('/') + hash

	// Router orqali navigate qilamiz
	return newPath
}



