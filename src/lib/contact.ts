import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
  honeypot?: string;
};

function getEnv(name: string): string | undefined {
  if (typeof process !== "undefined" && process.env[name]) {
    return process.env[name];
  }

  return import.meta.env[name];
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitise(value: string, maxLength: number): string {
  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function handleContactPost(request: Request): Promise<Response> {
  const apiKey = getEnv("RESEND_API_KEY");
  const fromEmail = getEnv("RESEND_FROM_EMAIL");
  const contactTo = getEnv("CONTACT_TO_EMAIL") ?? "alex@alexburrows.net";

  if (!apiKey || !fromEmail) {
    console.error(
      "Resend is not configured: missing RESEND_API_KEY or RESEND_FROM_EMAIL"
    );
    return Response.json(
      { error: "Email is not configured on the server." },
      { status: 500 }
    );
  }

  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (body.honeypot) {
    return Response.json({ success: true });
  }

  const name = sanitise(body.name ?? "", 120);
  const email = sanitise(body.email ?? "", 254);
  const company = sanitise(body.company ?? "", 120);
  const message = sanitise(body.message ?? "", 5000);

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);

  const subject = `Website enquiry from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: contactTo,
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("Resend error:", error);

      const isDev = import.meta.env?.DEV;
      const isDomainError =
        error.name === "validation_error" &&
        typeof error.message === "string" &&
        error.message.includes("domain is not verified");

      if (isDev && isDomainError) {
        return Response.json(
          {
            error:
              "Resend rejected the send: alexburrows.net is not verified. Add the domain at resend.com/domains and update DNS, or use onboarding@resend.dev for local testing.",
          },
          { status: 502 }
        );
      }

      return Response.json(
        { error: "Failed to send your message. Please try again later." },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return Response.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 502 }
    );
  }
}
