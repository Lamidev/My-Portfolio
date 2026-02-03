const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// POST route to handle contact form submissions
router.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields are required' 
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const ownerEmailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          .email-container { font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background-color: #030712; color: #f9fafb; border-radius: 16px; overflow: hidden; border: 1px solid #1f2937; }
          .header { background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%); padding: 40px 20px; text-align: center; }
          .content { padding: 40px; }
          .label { color: #9ca3af; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px; }
          .value { color: #f9fafb; font-size: 16px; margin-bottom: 24px; line-height: 1.6; }
          .message-box { background-color: #111827; padding: 24px; border-radius: 12px; border: 1px solid #374151; }
          .footer { padding: 20px; text-align: center; border-top: 1px solid #1f2937; color: #6b7280; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">New Message Received</h1>
          </div>
          <div class="content">
            <div class="label">Name</div>
            <div class="value">${name}</div>
            
            <div class="label">Email</div>
            <div class="value">${email}</div>
            
            <div class="label">Subject</div>
            <div class="value">${subject}</div>
            
            <div class="label">Message</div>
            <div class="message-box">
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div class="footer">
            Sent from your Lamidev Portfolio Contact Form
          </div>
        </div>
      </body>
      </html>
    `;

    const userEmailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          .email-container { font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background-color: #030712; color: #f9fafb; border-radius: 16px; overflow: hidden; border: 1px solid #1f2937; }
          .header { background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%); padding: 40px 20px; text-align: center; }
          .content { padding: 40px; text-align: center; }
          .footer { padding: 20px; text-align: center; border-top: 1px solid #1f2937; color: #6b7280; font-size: 12px; }
          .btn { background: #6366f1; color: #ffffff !important; padding: 12px 24px; border-radius: 50px; text-decoration: none; display: inline-block; margin-top: 24px; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">Hello ${name}!</h1>
          </div>
          <div class="content">
            <h2 style="color: #6366f1;">Thank you for reaching out.</h2>
            <p style="color: #9ca3af; line-height: 1.6;">I've received your message regarding "<strong>${subject}</strong>" and I'll get back to you as soon as possible.</p>
            <p style="color: #9ca3af; line-height: 1.6;">In the meantime, feel free to check out more of my work on my portfolio or connect with me on social media.</p>
            <div style="margin-top: 24px;">
              <a href="https://www.linkedin.com/in/akinyemi-oluwatosin-95519130b/" class="btn" style="margin-right: 12px;">LinkedIn</a>
              <a href="https://www.instagram.com/thisslami/" class="btn" style="background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);">Instagram</a>
            </div>
          </div>
          <div class="footer">
            &copy; ${new Date().getFullYear()} Lamidev | Software Engineer
          </div>
        </div>
      </body>
      </html>
    `;

    // 1. Send Notification to Owner
    await transporter.sendMail({
      from: `"Lamidev Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL || 'Akinyemioluwaseunjunior@gmail.com',
      subject: `🚀 New Project Inquiry: ${subject}`,
      html: ownerEmailHTML,
    });

    // 2. Send Acknowledgement to User
    await transporter.sendMail({
      from: `"Akinyemi Oluwatosin" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Got your message! - Akinyemi Oluwatosin`,
      html: userEmailHTML,
    });

    res.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email. Please try again later.' 
    });
  }
});

module.exports = router;