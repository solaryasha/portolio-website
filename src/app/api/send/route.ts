import { EmailTemplate } from '@/components/email-template'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: 'My portfolio page <onboarding@resend.dev>',
      to: [process.env.MY_EMAIL],
      subject: `Message from ${name}, sent through portfollio page`,
      react: EmailTemplate({ firstName: name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}