import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

async function verifyTurnstile(
  token: string | undefined,
  remoteip: string | undefined
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;

  if (!token) return false;

  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);
  if (remoteip) body.set("remoteip", remoteip);

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    }
  );

  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      company,
      phone,
      budget,
      projectType,
      message,
      turnstileToken,
    } = body;

    // Validar campos requeridos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    if (process.env.TURNSTILE_SECRET_KEY) {
      if (!turnstileToken) {
        return NextResponse.json(
          { error: "CAPTCHA_REQUIRED" },
          { status: 400 }
        );
      }
      const forwarded = request.headers.get("x-forwarded-for");
      const remoteip = forwarded?.split(",")[0]?.trim();
      const ok = await verifyTurnstile(turnstileToken, remoteip);
      if (!ok) {
        return NextResponse.json(
          { error: "CAPTCHA_FAILED" },
          { status: 400 }
        );
      }
    }

    // Configurar el transporter de nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT || "465"),
      secure: true, // true para puerto 465, false para otros puertos
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    // Verificar la conexión
    await transporter.verify();

    // Formatear el contenido del correo
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
        <h2 style="color: #4F46E5; margin-bottom: 20px;">Nuevo Mensaje de Contacto - Devs Valhalla</h2>
        
        <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #1f2937; margin-top: 0;">Información del Contacto</h3>
          <p style="margin: 8px 0;"><strong>Nombre:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${company ? `<p style="margin: 8px 0;"><strong>Empresa:</strong> ${company}</p>` : ""}
          ${phone ? `<p style="margin: 8px 0;"><strong>Teléfono:</strong> <a href="tel:${phone}">${phone}</a></p>` : ""}
        </div>

        <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #1f2937; margin-top: 0;">Detalles del Proyecto</h3>
          ${budget ? `<p style="margin: 8px 0;"><strong>Presupuesto:</strong> ${budget}</p>` : ""}
          ${projectType ? `<p style="margin: 8px 0;"><strong>Tipo de Proyecto:</strong> ${projectType}</p>` : ""}
        </div>

        <div style="background-color: white; padding: 20px; border-radius: 8px;">
          <h3 style="color: #1f2937; margin-top: 0;">Mensaje</h3>
          <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>

        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
          <p>Este correo fue enviado desde el formulario de contacto de Devs Valhalla</p>
          <p>Fecha: ${new Date().toLocaleString("es-ES", { timeZone: "America/Bogota" })}</p>
        </div>
      </div>
    `;

    // Enviar el correo
    const mailOptions = {
      from: `"Devs Valhalla Contact Form" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO || "wilmercampos2004@gmail.com",
      replyTo: email,
      subject: `Nuevo Contacto: ${name} - ${company || "Sin empresa"}`,
      html: emailContent,
      text: `
        Nuevo Mensaje de Contacto - Devs Valhalla
        
        Información del Contacto:
        - Nombre: ${name}
        - Email: ${email}
        ${company ? `- Empresa: ${company}` : ""}
        ${phone ? `- Teléfono: ${phone}` : ""}
        
        Detalles del Proyecto:
        ${budget ? `- Presupuesto: ${budget}` : ""}
        ${projectType ? `- Tipo de Proyecto: ${projectType}` : ""}
        
        Mensaje:
        ${message}
        
        ---
        Este correo fue enviado desde el formulario de contacto de Devs Valhalla
        Fecha: ${new Date().toLocaleString("es-ES", { timeZone: "America/Bogota" })}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
