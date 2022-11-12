const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');

const app = express();

app.use(bodyParser.json);

const PORT = process.env.PORT || 1776;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public/'));
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
})