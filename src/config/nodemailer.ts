import nodemailer from 'nodemailer'

// async..await is not allowed in global scope, must use a wrapper
// host: 'smtp.gmail.com',
// port: 587,
export const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'asilbekt84@gmail.com',
		pass: 'zzckezpmmtibdgge',
	},
})
// secure: false,

export const emailMessage = ({
	email,
	name,
	message,
}: {
	email: string
	name: string
	message: string
}) => {
	return {
		from: email, // sender address
		to: 'asilbekt84@gmail.com', // Subject line
		html: `
      <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>New Contact Message</title>
    <style>
      body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f7f9fb;
        padding: 20px;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: auto;
        background: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
      }
      .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
        color: #007acc;
      }
      .info {
        margin: 10px 0;
      }
      .label {
        font-weight: bold;
        color: #555;
      }
      .footer {
        margin-top: 30px;
        font-size: 12px;
        color: #aaa;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="title">📩 Yangi bog‘lanish xabari</div>

      <div class="info">
        <span class="label">👤 Ismi:</span> ${name}
      </div>

      <div class="info">
        <span class="label">📧 Email:</span> ${email}
      </div>

      <div class="info">
        <span class="label">💬 Xabar:</span>
        <p style="margin-top: 6px; line-height: 1.6">
          ${message}
        </p>
      </div>

      <div class="footer">
        Ushbu xabar sizning portfolio saytingiz orqali yuborildi.
      </div>
    </div>
  </body>
</html>


    `,
	}
}
