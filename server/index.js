const express = require('express');
const app = express();
app.use(express.json());

require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_CONNECTION_URI);

const auth = require('./api/auth');
app.use('/api/auth', auth);

const PORT = process.env.PORT || 1776;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'));
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
})