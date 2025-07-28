'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

const Contact = () => {
	const t = useTranslations()
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	})

	const sendMessage = async () => {
		setLoading(true)
		try {
			await fetch('/api/send', {
				method: 'POST',
				headers: {
					'Contect-Type': 'application-json',
				},
				body: JSON.stringify(form),
			})
			setSuccess(true)
			setTimeout(() => {
				setSuccess(false)
			}, 2000)
		} catch (error: any) {
		} finally {
			setLoading(false)
		}
	}
	return (
		<div className='bg-secondyDark w-[100%] flex-1 h-full relative justify-center rounded-r-[5px] overflow-x-hidden overflow-y-auto'>
			{/* Resume section */}
			<section className='relative '>
				<div className='flex items-center justify-start text-xl relative'>
					<span className='relative py-4 ml-5'>
						{t('contact')}
						<span className='absolute -left-2 size-8 bg-gradient-to-tr rounded-full bg-transparent from-amber-500/90 to-amber-100/10'></span>
					</span>
					<span className='grad-border-tr' />
				</div>
				<form className='mt-10 block mx-5'>
					<div className='flex items-center gap-4'>
						<input
							type='text'
							value={form.name}
							onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
							className=' bg-secondyDark focus:text-amber-400 focus-within:border-b-amber-400 text-base  focus-within:placeholder:text-neutral-200 border-b border-b-neutral-500 text-neutral-300 w-full outline-none py-3'
							placeholder={t('name')}
						/>
						<input
							type='email'
							value={form.email}
							onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
							className=' bg-secondyDark focus:text-amber-400 focus-within:border-b-amber-400 text-base  focus-within:placeholder:text-neutral-200 border-b border-b-neutral-500 text-neutral-300 w-full outline-none py-3'
							placeholder={t('email')}
						/>
					</div>
					<textarea
						rows={5}
						value={form.message}
						onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
						className=' bg-secondyDark resize-none focus:text-amber-400 focus-within:border-b-amber-400 text-base  focus-within:placeholder:text-neutral-200 border-b border-b-neutral-500 text-neutral-300 w-full outline-none py-3'
						placeholder={t('message')}
					/>
					<button
						type='submit'
						disabled={!form.email && !form.name && !form.message}
						onClick={sendMessage}
						className=' mt-4 border border-neutral-500 hover:border-amber-400 outline-none flex items-center gap-3 text-neutral-300 bg-secondyDark px-4 py-3 hover:text-amber-400 group'
					>
						<span>{t('send')}</span>{' '}
						{loading ? (
							<Icon
								className='group-hover:translate-x-2 transition-all animate-spin'
								icon='hugeicons:loading-03'
								width='20'
								height='20'
							/>
						) : (
							<Icon
								className='group-hover:translate-x-2 transition-all'
								icon='hugeicons:arrow-right-02'
								width='20'
								height='20'
							/>
						)}
					</button>
				</form>
			</section>
			<div className='p-2 h-5'></div>
		</div>
	)
}

export default Contact
