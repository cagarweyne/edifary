import nodemailer from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';

interface Payload {
  [name: string]: string;
}

export async function sendEmail(
  email: string,
  subject: string,
  payload: Payload,
  template: string,
  contact: boolean
) {
  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 465,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Server is ready to take our messages');
        resolve(success);
      }
    });
  });

  const source = fs.readFileSync(
    path.join(process.cwd(), `/template/${template}`),
    'utf8'
  );

  const compiledTemplate = handlebars.compile(source);
  const options = () => {
    return {
      from: 'no-reply@fullstackstudent.com',
      to: contact ? 'a.cagarweyne@gmail.com' : email,
      subject: subject,
      html: compiledTemplate(payload),
    };
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(options(), (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
}
