import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e1f72fdec54620",
      pass: "17cf69ce459601"
    }
});

export class NodemailerMailerAdapter  implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Aleilson Gomes <aleilsondeveloper@gmail.com>',
            subject,
            html: body
        });
    };
}