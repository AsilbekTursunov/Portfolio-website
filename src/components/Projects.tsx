import { works } from '@/constants'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
	const t = useTranslations()
	return (
		<div className='bg-secondyDark w-[100%] flex-1 h-full relative -left-0  justify-center  max-lg:rounded-l-[5px] rounded-r-[5px] overflow-x-hidden overflow-y-auto'>
			{/* Resume section */}
			<section className='relative '>
				<div className='flex items-center justify-start text-xl relative '>
					<span className='relative py-4 block ml-5'>
						{t('works')}
						<span className='absolute -left-2 size-8 bg-gradient-to-tr rounded-full bg-transparent from-amber-500/90 to-amber-100/10' />
					</span>
					<span className='grad-border-tr' />
				</div>
				<div className='mt-10 relative space-y-8 mb-5 px-4 '>
					{works.map(item => (
						<div
							key={item.title}
							className='flex flex-col xl:flex-row gap-4 relative xl:odd:flex-row-reverse '
						>
							<Image
								src={item.thumbnail}
								alt={item.title}
								width={500}
								height={500}
								className='xl:w-72 md:h-full h-64 w-full object-contain '
							/>
							<div className='space-y-4 px-4 relative'>
								<span className='grad-border-tr top-0 left-0' />
								<span className='grad-border-tb-l' />
								<p className='text-lg text-neutral-200'>{item.title}</p>
								<p className='text-sm text-neutral-500'>{t(item.description)}</p>
								<p className=' text-neutral-500 flex pl-5  items-center gap-4'>
									<ul className='flex text-sm flex-wrap items-center gap-4 list-disc'>
										{item.skills.map(link => (
											<li className='text-amber-700/90' key={link}>
												{link}
											</li>
										))}
									</ul>
								</p>
								<Link
									target='_blank'
									className='text-neutral-300 text-base mt-5 hover:text-amber-400  flex items-center gap-4'
									href={item.link}
								>
									<span>{t('see')}</span>
									<Icon icon='hugeicons:link-square-02' width='15' height='15' />
								</Link>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}

export default Projects
