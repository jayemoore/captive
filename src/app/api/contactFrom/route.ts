import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, phone, email, message } = await request.json();

    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "developer@innovativemojo.com",
        pass: "kuuw czei mcmg fvmm",
      },
    });
    // ${process.env.Email_Captive}
    const mailoptionsToAdmin = {
      from: email,
      to: `developer@innovativemojo.com `,
      subject: "Captive Response",
      text: `Following is the new message:
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}`,
    };

    const mailoptionsToUser = {
      from: "developer@innovativemojo.com",
      to: email,
      subject: "Thank You for reaching us!",
      html: `
    Dear Mr. ${lastName},
    Thank you for contacting Captive Integrated Services, LLC (CIS). We will respond to your message as soon as possible. 
`,
    };

    await transport.sendMail(mailoptionsToAdmin);

    await transport.sendMail(mailoptionsToUser);
    return NextResponse.json({ error: "" });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json({ "Server error": error });
  }
}
