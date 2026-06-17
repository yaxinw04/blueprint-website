"use server";

import nodemailer from "nodemailer";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";

const CONTACT_EMAIL = "yaxin.w04@gmail.com";

async function sendViaGmail(data: {
  name: string;
  email: string;
  grade: string;
  support: string;
  message: string;
}) {
  const user = process.env.GMAIL_USER?.trim();
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");

  if (!user || !pass || pass.includes("REPLACE_WITH")) {
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"Yaxin Wang Coaching" <${user}>`,
    to: CONTACT_EMAIL,
    replyTo: data.email,
    subject: `New coaching inquiry from ${data.name}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Grade: ${data.grade}`,
      `Support: ${data.support}`,
      `Message: ${data.message || "(none)"}`,
    ].join("\n"),
    html: `
      <h2>New coaching inquiry</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Grade:</strong> ${data.grade}</p>
      <p><strong>Support:</strong> ${data.support}</p>
      <p><strong>Message:</strong> ${data.message || "(none)"}</p>
    `,
  });

  return true;
}

async function sendViaFormSubmit(data: {
  name: string;
  email: string;
  grade: string;
  support: string;
  message: string;
}) {
  const response = await fetch(
    `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        grade: data.grade,
        support: data.support,
        message: data.message || "(none)",
        _subject: `New coaching inquiry from ${data.name}`,
        _template: "table",
        _captcha: "false",
      }),
    }
  );

  const result = (await response.json()) as {
    success?: string;
    message?: string;
  };

  if (result.success === "true") {
    return { ok: true as const };
  }

  if (result.message?.toLowerCase().includes("activation")) {
    return { ok: false as const, reason: "activation" as const };
  }

  return { ok: false as const, reason: "failed" as const };
}

export async function submitContact(formData: FormData) {
  const data = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    grade: String(formData.get("grade") ?? "").trim(),
    support: String(formData.get("support") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  if (!data.name || !data.email || !data.grade || !data.support) {
    redirect("/?error=missing-fields#contact");
  }

  try {
    let sentViaGmail = false;
    try {
      sentViaGmail = await sendViaGmail(data);
    } catch (gmailError) {
      console.error("Gmail send failed:", gmailError);
    }

    if (sentViaGmail) {
      redirect("/?submitted=true#contact");
    }

    const formSubmitResult = await sendViaFormSubmit(data);
    if (formSubmitResult.ok) {
      redirect("/?submitted=true#contact");
    }

    if (formSubmitResult.reason === "activation") {
      redirect("/?error=activation-needed#contact");
    }

    redirect("/?error=send-failed#contact");
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    console.error("Contact form failed:", error);
    redirect("/?error=send-failed#contact");
  }
}
