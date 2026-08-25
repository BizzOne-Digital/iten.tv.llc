const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_APP_PASSWORD,
  },
});

const brandWrapper = (title, bodyHtml) => `
<div style="background:#030303;padding:32px 0;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#101010;border:1px solid #222;border-radius:8px;overflow:hidden;">
    <tr>
      <td style="background:#0a0a0a;padding:24px;border-bottom:2px solid #E10600;">
        <span style="font-size:22px;font-weight:900;letter-spacing:1px;color:#F5F5F5;">iTEN<span style="color:#E10600;">.TV</span></span>
      </td>
    </tr>
    <tr>
      <td style="padding:24px;color:#F5F5F5;">
        <h2 style="color:#F5F5F5;margin-top:0;">${title}</h2>
        ${bodyHtml}
      </td>
    </tr>
    <tr>
      <td style="padding:16px 24px;background:#0a0a0a;color:#A5A5A5;font-size:12px;">
        iTEN.TV, LLC — info@iten.tv — +1 520-757-3019 — iten.tv
      </td>
    </tr>
  </table>
</div>`;

const sendContactNotification = async (submission) => {
  const html = brandWrapper(
    'New Contact Submission',
    `<p><strong>Name:</strong> ${submission.name}</p>
     <p><strong>Email:</strong> ${submission.email}</p>
     <p><strong>Phone:</strong> ${submission.phone || '-'}</p>
     <p><strong>Company:</strong> ${submission.company || '-'}</p>
     <p><strong>Project Type:</strong> ${submission.projectType}</p>
     <p><strong>Subject:</strong> ${submission.subject || '-'}</p>
     <p><strong>Message:</strong><br/>${submission.message}</p>
     ${submission.referenceImage?.url ? `<p><a href="${submission.referenceImage.url}" style="color:#FF1616;">View Reference Image</a></p>` : ''}`
  );
  return transporter.sendMail({
    from: `"iTEN.TV Website" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER,
    replyTo: submission.email,
    subject: `New Inquiry: ${submission.projectType} — ${submission.name}`,
    html,
  });
};

const sendContactConfirmation = async (submission) => {
  const html = brandWrapper(
    'Thanks for reaching out!',
    `<p>Hi ${submission.name},</p>
     <p>We've received your message and a member of the iTEN.TV team will get back to you shortly.</p>
     <p><strong>Your message:</strong><br/>${submission.message}</p>
     <p>In the meantime, follow our latest content at <a href="https://facebook.com/itentvnews" style="color:#FF1616;">facebook.com/itentvnews</a>.</p>
     <p>— The iTEN.TV Team</p>`
  );
  return transporter.sendMail({
    from: `"iTEN.TV" <${process.env.SMTP_USER}>`,
    to: submission.email,
    subject: 'We received your message — iTEN.TV',
    html,
  });
};

module.exports = { transporter, sendContactNotification, sendContactConfirmation };
