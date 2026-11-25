import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAIL = "marinaakter878@gmail.com";

const LIMITS = { name: 100, email: 200, subject: 200, message: 5000 };

// Simple in-memory rate limit: max 5 messages per IP per 10 minutes.
// Note: on serverless hosts this is per-instance, so it slows bots down but isn't a hard guarantee.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 1000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > RATE_MAX;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, website } = body as Record<string, unknown>;

    // Honeypot: real users never see or fill the "website" field. Bots do.
    if (typeof website === "string" && website.trim() !== "") {
      return NextResponse.json({ success: true });
    }

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many messages. Please try again in a few minutes." },
        { status: 429 }
      );
    }

    if (
      typeof name !== "string" || typeof email !== "string" ||
      typeof subject !== "string" || typeof message !== "string" ||
      !name.trim() || !email.trim() || !subject.trim() || !message.trim()
    ) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    if (
      name.length > LIMITS.name || email.length > LIMITS.email ||
      subject.length > LIMITS.subject || message.length > LIMITS.message
    ) {
      return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
    }
    if (!/^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const safe = {
      name: escapeHtml(name.trim()),
      email: escapeHtml(email.trim()),
      subject: escapeHtml(subject.trim()),
      message: escapeHtml(message.trim()),
    };

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: OWNER_EMAIL,
      replyTo: email.trim(),
      // Subject is a plain-text header, not HTML; strip line breaks instead of escaping.
      subject: `[Portfolio] ${subject.trim().replace(/[\r\n]+/g, " ")}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0a1428;color:#e2e8f0;border-radius:12px;border:1px solid #1e293b">
          <h2 style="color:#3b82f6;margin-top:0">New message from your portfolio</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#94a3b8;width:80px">From</td><td style="padding:8px 0;font-weight:600">${safe.name}</td></tr>
            <tr><td style="padding:8px 0;color:#94a3b8">Email</td><td style="padding:8px 0"><a href="mailto:${safe.email}" style="color:#3b82f6">${safe.email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#94a3b8">Subject</td><td style="padding:8px 0">${safe.subject}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #1e293b;margin:16px 0"/>
          <p style="margin:0;line-height:1.7;white-space:pre-wrap">${safe.message}</p>
          <hr style="border:none;border-top:1px solid #1e293b;margin:16px 0"/>
          <p style="margin:0;font-size:12px;color:#475569">Sent via marina portfolio contact form · Reply directly to respond to ${safe.name}</p>
        </div>
      `,
    });

    if (error) {
      console.error("[contact] resend error:", error);
      return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] email send failed:", err);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
