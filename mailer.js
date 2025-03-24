// filepath: c:\Users\josue\Downloads\new\mailer.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'magnolia.maco@outlook.com', // Reemplaza con tu correo
    pass: 'maco6969' // Reemplaza con tu contraseña
  }
});

const sendWelcomeEmail = (to) => {
  const mailOptions = {
    from: 'magnolia.maco@outlook.com',
    to: to,
    subject: 'Bienvenido a nuestra aplicación',
    text: 'Gracias por registrarte en nuestra aplicación.'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Correo enviado: ' + info.response);
    }
  });
};

const sendLoginAlertEmail = (to) => {
  const mailOptions = {
    from: 'magnolia.maco@outlook.com',
    to: to,
    subject: 'Alerta de inicio de sesión',
    text: 'Se ha iniciado sesión en tu cuenta.'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Correo enviado: ' + info.response);
    }
  });
};

module.exports = { sendWelcomeEmail, sendLoginAlertEmail };