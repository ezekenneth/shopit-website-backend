const nodemailer = require("nodemailer")
const asyncHandler = require("express-async-handler")



const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_ID,
    pass: process.env.MP,
  },
});

const sendEmail = async (data) => {
  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"hello" <ezeken91@gmail.com>',
      to: data.to,
      subject: data.subject,
      text: data.text,
      html: data.htm,
    });
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Error sending email');
  }
};




module.exports = sendEmail;