import { EmailTemplate } from '@/components/email-template'
import { ReactElement } from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!process.env.MY_EMAIL) return Response.json({ error: 'You didnt provide an email' }, { status: 500 });
  try {
    const { data, error } = await resend.emails.send({
      from: 'My portfolio page <onboarding@resend.dev>',
      to: [process.env.MY_EMAIL as string],
      subject: `Message from ${name}, sent through portfollio page`,
      react: EmailTemplate({ firstName: name, email, message }) as ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}