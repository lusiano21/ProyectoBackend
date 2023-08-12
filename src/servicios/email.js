/*import nodemailer from 'nodemailer'
import config from '../config/config.js';
class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'kieran72@ethereal.email',
        pass: 'sRjg4yDdSvHAVWcCuQ'
    }
    })
  }

  sendEmail(to, subject, html) {
    return this.transporter.sendMail({
      from: 'kieran72@ethereal.email',
      to,
      subject,
      html,
    })
  }
}

export default new EmailService();*/