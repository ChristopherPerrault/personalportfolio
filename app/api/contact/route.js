import nodemailer from "nodemailer";

// Load environment variables
const user = process.env.GMAIL_USER;
const pass = process.env.GMAIL_PASS;
const recipient = process.env.RECIPIENT_EMAIL;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: user,
    pass: pass,
  },
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const mailOptions = {
      from: user,
      to: recipient,
      subject: `Via Portfolio`,
      html: `
  <h3>Portfolio Contact Form Submission</h3>
  <p><strong style="color: #FF8C00;">Name:</strong> ${name}</p>
  <p><strong style="color: #FF8C00;">Email:</strong> ${email}</p>
  <p><strong style="color: #FF8C00;">Message:</strong> ${message}</p>
`,
    };

    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({
        status: "success",
        message: "Email sent successfully!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ status: "error", message: "Failed to send email." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
