"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const { name, email, message } = formData;

  if (!name || !email || !message) {
    return { error: "All fields are required." };
  }

  const { error: sendError } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "shovondaschowdhury1560@gmail.com",
    subject: `New message from ${name}`,
    replyTo: email,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });

  if (sendError) {
    console.error("Resend error:", sendError);
    return { error: sendError.message };
  }

  return { success: true };
}
