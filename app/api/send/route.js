import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, message, email } = await request.json();

    const myemail = process.env.SMTP_EMAIL;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: myemail,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOption = {
      from: email,
      to: myemail,
      subject: "New Mail from Portfolio",
      html: `
        <h3>Hello Akash</h3>
        <p>You have a message from ${name}</p>
        <p> ${message}</p> 
        `,
    };

    const replymailOption = {
      from: myemail,
      to: email,
      subject: "New Mail from Portfolio",
      html: `
        <h3>Hello ${name}</h3>
        <p> Thanks for contacting me ,Will get back to you soon</p> 
        `,
    };

    await transporter.sendMail(mailOption);
    await transporter.sendMail(replymailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
