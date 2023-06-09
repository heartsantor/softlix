import nodemailer from 'nodemailer';

export default function handler(req, res) {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    port: 587,
    host: 'smtp.gmail.com',
    auth: {
      user: 'support@SOFTLIX .tech',
      pass: '4a44wfL&Qu3S',
    },
    secure: false,
  });

  const mailData = {
    from: 'support@SOFTLIX .tech',
    to: 'support@SOFTLIX .tech', //shubhamsharma715@gmail.com',
    subject: `Message From ${req.body.fname}`,
    text: 'Sent from: ' + req.body.email,
    html: `<p>Name: ${req.body.fname}</p>
    <p>Email: ${req.body.email}</p>
    <p>Mobile: ${req.body.lname}</p>
    <p>Requirements: ${req.body.message}</p>`,
  };
  transporter.sendMail(mailData, function (err) {
    if (err)
      res.status(400).end(JSON.stringify({ message: 'Error' + err.message }));
    else res.status(200).end(JSON.stringify({ message: 'Send Mail' }));
  });
  res.status(200);
}
