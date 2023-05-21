import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { name, email, message } = body;

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_SERVER,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_SECURE,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    })

    let info = await transporter.sendMail({
        from: `"Portfolio form" <form@tiagoflora.com>`,
        to: `${process.env.SMTP_USER}`,
        subject: "New message from contact form",
        text: `Message from ${name} (${email}) ${message}`,
    })

    return NextResponse.json({ message: 'Email send successfully' });
}