import { Icon } from '@iconify/react'
import { useTranslations } from 'next-intl'
import React from 'react'

const Resume = () => {
	const t = useTranslations()

	return (
		<div className='bg-secondyDark w-[100%] flex-1 h-full relative -left-0 justify-center rounded-r-[5px] overflow-x-hidden overflow-y-auto'>
			{/* Resume section */}
			<section className='relative'>
				<div className='flex items-center justify-start text-xl relative'>
					<span className='relative py-4 ml-5'>
						{t('resume')}
						<span className='absolute -left-2 size-8 bg-gradient-to-tr rounded-full bg-transparent from-amber-500/90 to-amber-100/10'></span>
					</span>
					<span className='grad-border-tr' />
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 relative'>
					<div className='px-4 py-4 relative'>
						<span className='grad-border-tb hidden md:flex' />
						<div className='flex gap-4 items-center relative pb-4'>
							<span className='grad-border-tr' />
							<span className='icon-b'>
								<Icon icon='hugeicons:work-history' width='30' height='30' />
							</span>
							<p className='text-neutral-100 font-semibold text-lg'>{t('experience')}</p>
						</div>
						<div className='py-5 px-6 relative space-y-6'>
							<div className='relative'>
								<span className='absolute -left-6  w-[1px] top-5 h-full bg-neutral-600' />
								<span
									id='date'
									className='border relative p-1 px-2 text-sm border-neutral-400 inline-block rounded-[5px] text-neutral-400 '
								>
									2024/05 - 2024/09
									<span className='size-2 bg-neutral-400 rounded-full top-1/2 -translate-y-1/2 absolute -left-7' />
								</span>
								<div className=' flex flex-col gap-2 mt-2'>
									<p className='text-lg font-bold text-neutral-100'>Frontend React Developer</p>
									<p className='text-sm font-normal text-neutral-400'>Rishton Soft</p>
									<div className='text-xs font-normal text-neutral-400 mt-2'>
										<ul className='space-y-2 list-disc'>
											<li>{t('rishtonone')}</li>
											<li>{t('rishtontwo')}</li>
											<li>{t('rishtonthree')}</li>
											<li>{t('rishtonfour')}</li>
											<li>{t('rishtonfive')}</li>
											<li>{t('rishtonsix')}</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='relative pt-4'>
								<span className='absolute -left-6 -top-1 w-[1px] h-full bg-neutral-600' />
								<span className='grad-border-tr top-0  -left-6' />

								<span
									id='date'
									className='border relative p-1 px-2 text-sm border-neutral-400 inline-block rounded-[5px] text-neutral-400 '
								>
									2025/01 - 2025/03
									<span className='size-2 bg-neutral-400 rounded-full top-1/2 -translate-y-1/2 absolute -left-7' />
								</span>
								<div className=' flex flex-col gap-2 mt-2'>
									<p className='text-lg font-bold text-neutral-100'>Frontend Vue Developer</p>
									<p className='text-sm font-normal text-neutral-400'>{t('koreaType')}</p>
									<div className='text-xs font-normal text-neutral-400 mt-2'>
										<ul className='space-y-2 list-disc'>
											<li>{t('koreaone')}</li>
											<li>{t('koreatwo')}</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='relative pt-4'>
								<span className='absolute -left-6 -top-8 w-[1px] h-[110%] bg-neutral-600' />
								<span className='grad-border-tr top-0  -left-6' />

								<span
									id='date'
									className='border relative p-1 px-2 text-sm border-neutral-400 inline-block rounded-[5px] text-neutral-400 '
								>
									2025/08 - 2025/09
									<span className='size-2 bg-neutral-400 rounded-full top-1/2 -translate-y-1/2 absolute -left-7' />
								</span>
								<div className=' flex flex-col gap-2 mt-2'>
									<p className='text-lg font-bold text-neutral-100'>
										Frontend React/Next Developer
									</p>
									<p className='text-sm font-normal text-neutral-400'>Soff Hub</p>
									<div className='text-xs font-normal text-neutral-400 mt-2'>
										<ul className='space-y-2 list-disc'>
											<li>{t('soffhubone')}</li>
											<li>{t('soffhubtwo')}</li>
											<li>{t('soffhubthree')}</li>
											<li>{t('soffhubfour')}</li>
											<li>{t('soffhubfive')}</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='relative pt-4'>
								<span className='absolute -left-6 -top-10 w-[1px] h-[110%] bg-neutral-600' />
								<span className='grad-border-tr top-0  -left-6' />

								<span
									id='date'
									className='border relative p-1 px-2 text-sm border-neutral-400 inline-block rounded-[5px] text-neutral-400 '
								>
									2025/09 - 2025/11
									<span className='size-2 bg-neutral-400 rounded-full top-1/2 -translate-y-1/2 absolute -left-7' />
								</span>
								<div className=' flex flex-col gap-2 mt-2'>
									<p className='text-lg font-bold text-neutral-100'>
										Frontend React/Next Developer
									</p>
									<p className='text-sm font-normal text-neutral-400'>Udevs</p>
									<div className='text-xs font-normal text-neutral-400 mt-2'>
										<ul className='space-y-2 list-disc'>
											<li>{t('udevsone')}</li>
											<li>{t('udevstwo')}</li>
											<li>{t('udevsthree')}</li>
											<li>{t('udevsfour')}</li>
											<li>{t('udevsfive')}</li>
											<li>{t('udevssix')}</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='px-4 py-4 relative'>
						<div className='flex gap-4 items-center relative pb-4'>
							<span className='grad-border-tr' />
							<span className='icon-b'>
								<Icon icon='hugeicons:elearning-exchange' width='30' height='30' />
							</span>
							<p className='text-neutral-100 font-semibold text-lg'>{t('education')}</p>
						</div>
						<div className='py-5 px-6 relative space-y-6'>
							<div className='relative'>
								<span className='absolute -left-6  w-[1px] top-5 h-full bg-neutral-600' />
								<span
									id='date'
									className='border relative p-1 px-2 text-sm border-neutral-400 inline-block rounded-[5px] text-neutral-400 '
								>
									2019/09 - 2025/06
									<span className='size-2 bg-neutral-400 rounded-full top-1/2 -translate-y-1/2 absolute -left-7' />
								</span>
								<div className=' flex flex-col gap-2 mt-2'>
									<p className='text-lg font-bold text-neutral-100'>{t('eduname')}</p>
									<p className='text-sm font-normal text-neutral-400'>{t('addressvalue')}</p>
									<p className='text-xs font-normal text-neutral-400 mt-2'>{t('eduFerganaBio')}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Skills section */}
			<div className='flex items-center justify-start text-xl relative'>
				<span className='relative py-4 ml-5'>
					{t('skill')}
					<span className='absolute -left-2 size-8 bg-gradient-to-tr rounded-full bg-transparent from-amber-500/90 to-amber-100/10'></span>
				</span>
				<span className='grad-border-tr' />
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 relative'>
				<div className='px-4 py-4 relative'>
					<span className='grad-border-tb hidden md:flex' />
					<div className='flex gap-4 items-center relative pb-4'>
						<span className='grad-border-tr' />
						<span className='icon-b'>
							<Icon icon='hugeicons:source-code-circle' width='30' height='30' />
						</span>
						<p className='text-neutral-100 font-semibold text-lg'>{t('code')}</p>
					</div>
					<div className='text-sm flex gap-2 font-normal text-neutral-400 mt-6'>
						<ul className='space-y-2 list-none flex-1'>
							<li>HTML</li>
							<li>Css / Sass/ Scss</li>
							<li>Javascript</li>
							<li>Typescript</li>
							<li>Redux / RTK-Query</li>
							<li>React.js</li>
							<li>Next.js</li>
							<li>React Native</li>
							<li>Zustand</li>
							<li>TanStack Query</li>
							<li>Strapi</li>
							<li>Vitest</li>
							<li>Gatsby</li>
							<li>PWA (Web App)</li>
						</ul>
						<ul className='space-y-2 list-none flex-1'>
							<li>TailwindCss</li>
							<li>Material UI</li>
							<li>Ant Design</li>
							<li>Element UI</li>
							<li>Chakra UI</li>
							<li>Daisy UI</li>
							<li>NativeWind</li>
							<li>Shad/cn UI</li>
							<li>Styled Components</li>
							<li>i18n</li>
						</ul>
					</div>
					<div className='py-5 px-6 relative space-y-6'></div>
				</div>
				<div className='px-4 py-4 relative'>
					<div className='flex gap-4 items-center relative pb-4'>
						<span className='grad-border-tr' />
						<span className='icon-b'>
							<Icon icon='hugeicons:gitbook' width='30' height='30' />
						</span>
						<p className='text-neutral-100 font-semibold text-lg'>{t('knowledge')}</p>
					</div>
					<div className='py-5  text-neutral-400 relative space-y-6'>
						<ul className='space-y-2 text-sm font-normal list-none flex-1'>
							<li className='flex items-center gap-4'>
								<Icon
									icon='hugeicons:checkmark-square-03'
									className='text-amber-500'
									width='15'
									height='15'
								/>
								<span>{t('knowledgeone')}</span>
							</li>
							<li className='flex items-center gap-4'>
								<Icon
									icon='hugeicons:checkmark-square-03'
									className='text-amber-500'
									width='15'
									height='15'
								/>
								<span>{t('knowledgetwo')}</span>
							</li>
							<li className='flex items-center gap-4'>
								<Icon
									icon='hugeicons:checkmark-square-03'
									className='text-amber-500'
									width='15'
									height='15'
								/>
								<span>{t('knowledgethree')}</span>
							</li>
							<li className='flex items-center gap-4'>
								<Icon
									icon='hugeicons:checkmark-square-03'
									className='text-amber-500'
									width='15'
									height='15'
								/>
								<span>{t('knowledgefour')}</span>
							</li>
							<li className='flex items-center gap-4'>
								<Icon
									icon='hugeicons:checkmark-square-03'
									className='text-amber-500'
									width='15'
									height='15'
								/>
								<span>{t('knowledgefive')}</span>
							</li>
						</ul>
					</div>
					<div className='flex mt-3 gap-4 items-center relative pb-4'>
						<span className='grad-border-tr' />
						<span className='icon-b'>
							<Icon icon='hugeicons:language-square' width='30' height='30' />
						</span>
						<p className='text-neutral-100 font-semibold text-lg'>{t('languages')}</p>
					</div>
					<div className='py-5  text-neutral-400 relative space-y-6'>
						<ul className='space-y-2 text-sm font-normal list-none flex-1'>
							<li className='flex items-center gap-4 justify-between'>
								<span>{t('langone')}</span>
								<span>{t('langonev')}</span>
							</li>
							<li className='flex items-center gap-4 justify-between'>
								<span>{t('langtwo')}</span>
								<span>{t('langtwov')}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Resume
