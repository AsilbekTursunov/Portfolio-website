import skills from '@/components/skills'
import { randomUUID } from 'crypto'
import { FaFacebook, FaLinkedin, FaInstagram, FaTelegram, FaGithub } from 'react-icons/fa'
export const socials = [
  {
    id: 1,
    image: FaFacebook,
    link: 'mufeed.visualization',
  },
  {
    id: 2,
    image: FaLinkedin,
    link: 'https://www.linkedin.com/in/asilbek-tursunov/',
  },
  {
    id: 3,
    image: FaInstagram,
    link: 'https://www.instagram.com/mufeed.visualization/',
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
  ],
}

export const products = [
  {
    title: 'Modern Website design',
    link: 'https://asilbektursunov.github.io/brainwave/',
    description: 'Brainwave website design. This is only design to learn Tailwind',
    thumbnail: '/project-1.jpg',
    skills: ['/skill-6.png', '/skill-9.png'],
  },
  {
    title: 'MovieX',
    link: 'https://react-moviex-app.netlify.app/',
    description: 'Online upcoming movies website. Everyone find new movies',
    thumbnail: '/project-6.jpg',
    skills: ['/skill-6.png', '/skill-9.png', '/skill-7.png'],
  },
  {
    title: 'Cryptoverse',
    link: 'https://cryptverse-app.netlify.app/',
    description: 'There lastest crypto news and Changes of the crypto prices',
    thumbnail: '/project-3.jpg',
    skills: ['/skill-6.png', '/skill-12.png'],
  },

  {
    title: 'IT Articles',
    link: 'https://asilbek-nextjs-blog-app.vercel.app/',
    description: 'There are more articles about it technologies and ai news',
    thumbnail: '/project-5.jpg',
    skills: ['/skill-6.png', '/skill-12.png', '/skill-11.png', '/skill-10.png'],
  },
  {
    title: 'Coolpal Meal Recipes',
    link: 'https://cookpal-six.vercel.app/',
    description: 'There are delicious any kind of meals. Every can  find  new meals',
    thumbnail: '/project-2.jpg',
    skills: ['/skill-11.png', '/skill-9.png', '/skill-10.png'],
  },
  {
    title: 'Udev.io clone',
    link: 'https://udev-clone.vercel.app/en',
    description:
      'This clone website of Udev It company. That is  fully responsive and two languages',
    thumbnail: '/project-8.jpg',
    skills: ['/skill-5.png', '/skill-9.png', '/skill-11.png'],
  },
  {
    title: 'Dev.Blogs',
    link: 'https://asilbek-dev-blogs.vercel.app/',
    description:
      'This is developers   acrticles Everyone can learn new features  of ths programming languages',
    thumbnail: '/project-9.jpg',
    skills: ['/skill-10.png', '/skill-9.png', '/skill-11.png', '/skill-17.png'],
  },
  {
    title: 'Workout Time',
    link: 'https://workout-time-portfolio.vercel.app/',
    description:
      'Everyone calculate workout time during exercises. This is usefull to manage workout time during your life',
    thumbnail: '/project-10.jpg',
    skills: ['/skill-5.png', '/skill-9.png', '/skill-11.png', '/skill-15.png'],
  },
  {
    title: 'CarePalse',
    link: 'https://carepulse-healthcare-omega.vercel.app/',
    description:
      'CarePalse is patient appointment platform for hospitals. Everyone can book a doctor from anywere before going to hospital.',
    thumbnail: '/project-7.jpg',
    skills: ['/skill-10.png', '/skill-9.png', '/skill-11.png'],
  },
]
