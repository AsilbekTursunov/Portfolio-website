import { Icon } from '@iconify/react'
import React from 'react'

const Resume = () => {
	return (
		<div className='bg-secondyDark w-[100%] flex-1 h-full relative -left-4 pl-4 justify-center rounded-r-[5px] overflow-hidden overflow-y-auto'>
			<div className='flex items-center justify-start text-xl relative'>
				<span className='relative py-4 lg:ml-8'>
					Resume
					<span className='absolute -left-2 size-8 bg-gradient-to-tr rounded-full bg-transparent from-amber-500/90 to-amber-100/10'></span>
				</span>
				<span className='grad-border-tr' />
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 relative'>
				<div className='px-8 py-4 relative'>
					<span className='md:grad-border-tb' />
					<div className='flex gap-4 items-center relative pb-4'>
						<span className='grad-border-tr' />
						<span className='icon-b'>
							<Icon icon='hugeicons:work-history' width='30' height='30' />
						</span>
						<p className='text-neutral-100 font-semibold text-lg'>Experience</p>
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
								<p className='text-xs font-normal text-neutral-400 mt-2'>
									<ul className='space-y-2 list-disc'>
										<li>Developed responsive web applications using HTML, CSS, and JavaScript.</li>
										<li>Collaborated with design team to enhance user interface and experience.</li>
										<li>Implemented performance optimization techniques to improve load times.</li>
										<li>Conducted code reviews and maintained code quality standards.</li>
										<li>Assisted in integrating APIs for seamless functionality.</li>
										<li>Create CRM system for education centers</li>
									</ul>
								</p>
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
								<p className='text-sm font-normal text-neutral-400'>Freelance</p>
								<p className='text-xs font-normal text-neutral-400 mt-2'>
									<ul className='space-y-2 list-disc'>
										<li>Built an employee management system using Vue 3 and Vuex</li>
										<li>
											Implemented a responsive and efficient UI with Element-UI for optimal user
											experiencer
										</li>
									</ul>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='px-8 py-4 relative'>
					<div className='flex gap-4 items-center relative pb-4'>
						<span className='grad-border-tr' />
						<span className='icon-b'>
							<Icon icon='hugeicons:elearning-exchange' width='30' height='30' />
						</span>
						<p className='text-neutral-100 font-semibold text-lg'>Education</p>
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
								<p className='text-lg font-bold text-neutral-100'>
									Fergana State Technical University
								</p>
								<p className='text-sm font-normal text-neutral-400'>Fergana - Uzbekistan</p>
								<p className='text-xs font-normal text-neutral-400 mt-2'>
									I pursued a degree in Computer Engineering, studying 2 years full-time and 3 years
									part-time at university. During my academic journey, I covered a broad range of
									subjects including computer systems, networking, and internet service providers.
									As I progressed, I chose to specialize in Web and Mobile Development, dedicating
									myself to mastering frontend technologies and gaining in-depth knowledge in
									building modern web and mobile applications
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Resume
