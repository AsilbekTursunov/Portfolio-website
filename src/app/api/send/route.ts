import { emailMessage, transporter } from '@/src/config/nodemailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
	const { name, email, message } = await req.json()
	try {
		await transporter.sendMail({
			...emailMessage({ name, email, message }),
			subject: 'New message from portfolio website',
		})
		return NextResponse.json(
			{ ok: true, message: '' },
			{
				status: 201,
			}
		)
	} catch (error) {
		console.log('Registration error:', error)
		return NextResponse.json(
			{ message: error },
			{
				status: 500,
			}
		)
	}
}
