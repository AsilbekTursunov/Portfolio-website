import skills from '@/components/skills'
import { randomUUID } from 'crypto'

export const socials = [
  {
    id: 1,
    image: '/facebook.png',
    link: 'mufeed.visualization',
  },
  {
    id: 2,
    image: '/linkedin.png',
    link: 'https://www.linkedin.com/in/asilbek-tursunov-03236220a/',
  },
  {
    id: 3,
    image: '/instagram.png',
    link: 'https://www.instagram.com/mufeed.visualization/',
  },
  {
    id: 4,
    image: '/telegram.png',
    link: 'https://t.me/asilbek_tursunov',
  },
  {
    id: 5,
    image: '/github.png',
    link: 'https://github.com/AsilbekTursunov',
  },
]
export const aboutAuthor = {
  bio: `<p>Hello My Fullname is Asilbek Tursunov. I am 22 years old. I live in Fergana and  have studied at Fergana Branch of the Tashkent University  Information Technologies for 4 years. I am 5th year student. I study  at my university 2 months a year. So I have free time to work anywhere.</p> 
  <p>I have been learning programming languages and frameworks for 7 months. I have finished more than 5 projects for my portfolio.  I learned all the software by myself sitting at home. I am a hardworking, active, and sociable person.</p>`,
  personalDetails: {
    birthday: 'Oktober 15th 2001',
    phone: '+998 91 157 46 65',
    email: 'asilbekt84@gmail.com',
    address: 'Fergana, Uzbekistan',
    jobStatus: 'Looking for a job',
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
      name: 'AntDesign',
      icon: '/skill-12.png',
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
      name: 'Git',
      icon: '/skill-3.png',
    },
  ],
}

export const products = [
  {
    title: 'Modern Website design',
    link: 'https://asilbektursunov.github.io/brainwave/',
    description:
      'Brainwave website design. This is only design to learn Tailwind',
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
    link: 'https://portfolio-crypto-react-app.netlify.app/',
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
    title: 'Fazo Online Market',
    link: 'https://fazo-online-shop.netlify.app/',
    description: 'There are a lot of any kind of products. Everyone can find  everything they want',
    thumbnail: '/project-4.jpg',
    skills: ['/skill-6.png', '/skill-9.png', '/skill-7.png'],
  },
]
