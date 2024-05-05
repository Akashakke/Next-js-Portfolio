// import { EmailTemplate } from '../../../components/EmailTemplate';

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Akash <akashpraveen576@gmail.com>",
      to: ["akash.akke4@gmail.com"],
      subject: "Hello world",
      //   react: EmailTemplate({ firstName: 'Akash' }),
      react: (
        <>
          <p>Email Body</p>{" "}
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
