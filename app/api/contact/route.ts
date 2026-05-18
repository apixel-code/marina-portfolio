import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAIL = "marinaakter878@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body as {
      name: string;
      email: string;
      subject: string;
      message: string;
    };

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: OWNER_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0a1428;color:#e2e8f0;border-radius:12px;border:1px solid #1e293b">
          <h2 style="color:#3b82f6;margin-top:0">New message from your portfolio</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#94a3b8;width:80px">From</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#94a3b8">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#3b82f6">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#94a3b8">Subject</td><td style="padding:8px 0">${subject}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #1e293b;margin:16px 0"/>
          <p style="margin:0;line-height:1.7;white-space:pre-wrap">${message.replace(/</g, "&lt;")}</p>
          <hr style="border:none;border-top:1px solid #1e293b;margin:16px 0"/>
          <p style="margin:0;font-size:12px;color:#475569">Sent via marina portfolio contact form · Reply directly to respond to ${name}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] email send failed:", err);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
