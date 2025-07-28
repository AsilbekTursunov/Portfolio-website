import { randomUUID } from 'crypto'
import { FaLinkedin, FaTelegram, FaGithub } from 'react-icons/fa'
export const socials = [
	{
		id: 2,
		image: FaLinkedin,
		link: 'https://www.linkedin.com/in/asilbek-tursunov/',
	},
	{
		id: 4,
		image: FaTelegram,
		link: 'https://t.me/asilbek_tursunov',
	},
	{
		id: 5,
		image: FaGithub,
		link: 'https://github.com/AsilbekTursunov',
	},
]
export const aboutAuthor = {
	bio: `<p>Hello My Fullname is Asilbek Tursunov. I am 22 years old. I live in Fergana and  have studied at Fergana Branch of the Tashkent University  Information Technologies for 4 years. I am 5th year student. I study  at my university 2 months a year.I will finially finish my university in 2025. <p>&nbsp;</p> </p> 
  <p>I am currently studying Frontend Programming since 10 months so I am looking for a good company to improve my knowledge and become a good developer. I am a resilient, active, enterprising person, I learned everything I learned in this field sitting at home with free lessons and applying it in practice. I think many companies would like to have employees like me. Thank you for your attention. You won't go wrong if you give me a chance</p>`,
	personalDetails: {
		birthday: 'Oktober 15th 2001',
		phone: '+998 91 157 46 65',
		email: 'asilbekt84@gmail.com',
		address: 'Fergana, Uzbekistan',
		jobStatus: 'Open to Work',
		telegram: 'https://t.me/asilbek_tursunov',
	},
	interests: [
		{
			id: 1,
			name: 'Coding',
			icon: '/code.svg',
		},
		{
			id: 2,
			name: 'Reading',
			icon: '/read.svg',
		},
		{
			id: 3,
			name: 'Tennis',
			icon: '/tennis.svg',
		},
		{
			id: 4,
			name: 'Football',
			icon: '/ball.svg',
		},
	],
	skills: [
		{
			id: randomUUID,
			name: 'HTML',
			icon: '/skill-4.png',
		},
		{
			id: randomUUID,
			name: 'Css',
			icon: '/skill-2.png',
		},
		{
			id: randomUUID,
			name: 'Bootstrap',
			icon: '/skill-1.png',
		},
		{
			id: randomUUID,
			name: 'Sass',
			icon: '/skill-8.png',
		},
		{
			id: randomUUID,
			name: 'Tailwind',
			icon: '/skill-9.png',
		},
		{
			id: randomUUID,
			name: 'JavaScript',
			icon: '/skill-5.png',
		},
		{
			id: randomUUID,
			name: 'Typescript',
			icon: '/skill-10.png',
		},
		{
			id: randomUUID,
			name: 'React',
			icon: '/skill-6.png',
		},
		{
			id: randomUUID,
			name: 'Redux',
			icon: '/skill-7.png',
		},
		{
			id: randomUUID,
			name: 'Next.js',
			icon: '/skill-11.png',
		},
		{
			id: randomUUID,
			name: 'Material-UI',
			icon: '/skill-12.png',
		},
		{
			id: randomUUID,
			name: 'Ant-Design',
			icon: '/skill-13.png',
		},
		{
			id: randomUUID,
			name: 'Tan-Stack',
			icon: '/skill-14.png',
		},
		{
			id: randomUUID,
			name: 'Zustand',
			icon: '/skill-15.png',
		},
		{
			id: randomUUID,
			name: 'Daisy-UI',
			icon: '/skill-16.png',
		},
		{
			id: randomUUID,
			name: 'GraphQl',
			icon: '/skill-17.png',
		},
		{
			id: randomUUID,
			name: 'Jira',
			icon: '/skill-18.png',
		},
		{
			id: randomUUID,
			name: 'Vue',
			icon: '/skill-19.png',
		},
		{
			id: randomUUID,
			name: 'Vuex',
			icon: '/skill-20.png',
		},
		{
			id: randomUUID,
			name: 'Element UI',
			icon: '/skill-21.png',
		},
		{
			id: randomUUID,
			name: 'React Native',
			icon: '/skill-22.png',
		},
		{
			id: randomUUID,
			name: 'NativeWind',
			icon: '/skill-22.png',
		},
	],
}

export const products = [
	{
		title: 'Udev.io clone',
		link: 'https://udev-clone.vercel.app/en',
		description:
			"Loyihada udev.io saytining kloni tayyorlangan. Bu loyiha Next.js, Javascript, Tailwindcss yordamida tayyorlangan va ko'p tillarda ishlatish mumkin",
		thumbnail: '/project-8.jpg',
		skills: ['/skill-5.png', '/skill-9.png', '/skill-11.png'],
	},
	{
		title: 'Dev.Blogs',
		link: 'https://asilbek-dev-blogs.vercel.app/',
		description:
			'Bu loyiha blog yaratish uchun tayyorlangan. Bu loyiha Next.js, Javascript, Tailwindcss yordamida tayyorlangan',
		thumbnail: '/project-9.jpg',
		skills: ['/skill-10.png', '/skill-9.png', '/skill-11.png', '/skill-17.png'],
	},
	{
		title: 'Elektric Fam',
		link: 'https://electric-fam-ko.vercel.app/',
		description:
			"Bu loyiha korea kompaniyasi uchun qilinan. Asosan ma'lumotlar kiritsh uchun. Bu kompaniya ichkilari haqida ma'lumot olish ko'rsatilgan",
		thumbnail: '/project-11.jpg',
		skills: ['/skill-19.png', '/skill-20.png', '/skill-8.png', '/skill-21.png'],
	},
	{
		title: 'Resume Builder',
		link: 'https://resume-frontend-mu.vercel.app/',
		description:
			'Bu loyiha resume yaratish uchun tayyorlangan. Bu loyiha React.js, Typescript, Tailwindcss yordamida tayyorlangan',
		thumbnail: '/project-12.png',
		skills: ['/skill-6.png', '/skill-9.png', '/skill-10.png'],
	},
	{
		title: 'Stream and Messaging chat platform',
		link: 'https://chatty-stream-app.vercel.app/',
		description:
			"Bu loyihada foydalanuvchilar asosan til o'rganish do'stlar bilan yozishish va video qo'ng'iroqlar qilshi maqsadida qilingan bir foydalanuchi boshqasida do'st taklifini yuboradi va yuborilgan odam uni qabul qilsagina ular chat qilishlari mumkin",
		thumbnail: '/project-13.png',
		skills: ['/skill-11.png', '/skill-9.png', '/skill-10.png', '/skill-14.png', '/skill-15.png'],
	},
]

export const works = [
	{
		title: 'Udevs.com clone',
		link: 'https://udev-clone.vercel.app/en',
		description: 'project1desc',
		thumbnail: '/project-8.jpg',
		skills: ['Javascript', 'TailwindCss', 'Next.js', 'I18N'],
	},
	{
		title: 'Dev.Blogs',
		link: 'https://asilbek-dev-blogs.vercel.app/',
		description: 'project2desc',
		thumbnail: '/project-9.jpg',
		skills: ['Typescript', 'Next.js', 'TailwindCss', 'GraphQl'],
	},
	{
		title: 'Elektric Fam',
		link: 'https://electric-fam-ko.vercel.app/',
		description: 'project3desc',
		thumbnail: '/project-11.jpg',
		skills: ['Vue', 'Vuex', 'Sass/Scss', 'Element UI'],
	},
	{
		title: 'Resume Builder',
		link: 'https://resume-frontend-mu.vercel.app/',
		description: 'project4desc',
		thumbnail: '/project-12.png',
		skills: ['React.js', 'TailwindCss', 'TypeScript', 'Nodejs'],
	},
	{
		title: 'Stream and Messaging chat platform',
		link: 'https://chatty-stream-app.vercel.app/',
		description: 'project5desc',
		thumbnail: '/project-13.png',
		skills: ['Next.js', 'TailwindCss', 'Typescript', 'TanStack Query', 'Zustand'],
	},
]
