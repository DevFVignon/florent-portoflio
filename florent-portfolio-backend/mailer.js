const nodemailer = require('nodemailer');
const sanitizeHtml = require('sanitize-html');
const validator = require('validator');
//require('dotenv').config();
require('dotenv').config();

// Configuration de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendMail = async (name, email, message) => {
  // Validation et désinfection des données
  const sanitizedName = sanitizeHtml(name, {
    allowedTags: [],
    allowedAttributes: {}
  });
  const sanitizedEmail = sanitizeHtml(email, {
    allowedTags: [],
    allowedAttributes: {}
  });
  const sanitizedMessage = sanitizeHtml(message, {
    allowedTags: [],
    allowedAttributes: {}
  });

  // Validation de l'adresse email
  if (!validator.isEmail(sanitizedEmail)) {
    return { success: false, message: 'Adresse e-mail invalide.' };
  }

  const mailOptions = {
    from: sanitizedEmail,
    to: 'florent.vignon81@gmail.com',
    subject: `Nouveau message de ${sanitizedName}`,
    text: sanitizedMessage,
    replyTo: sanitizedEmail
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Email envoyé avec succès' };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return { success: false, message: 'Erreur lors de l\'envoi de l\'email' };
  }
};

module.exports = { sendMail };
