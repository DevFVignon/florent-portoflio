const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { sendMail } = require('./mailer');

const app = express();

app.use(helmet());

// Limiteur de taux
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limite chaque IP à 100 requêtes par fenêtre
  message: "Trop de requêtes depuis cette IP, veuillez essayer à nouveau plus tard."
});

// Appliquer le limiteur à toutes les requêtes
app.use(limiter);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const result = await sendMail(name, email, message);

  if (result.success) {
    res.status(200).send(result.message);
  } else {
    res.status(500).send(result.message);
  }
});

module.exports = app;