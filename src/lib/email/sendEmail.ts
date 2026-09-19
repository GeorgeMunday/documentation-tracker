import nodemailer from 'nodemailer';

type EmailMessage = {
  to: string;
  subject: string;
  html: string;
};

export async function sendEmail({ to, subject, html }: EmailMessage) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const from = process.env.SMTP_FROM;

  if (!host || !user || !password || !from) {
    throw new Error('Email service is not configured');
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass: password },
  });

  await transporter.sendMail({ from, to, subject, html });
}