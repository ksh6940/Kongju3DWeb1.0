const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'templates')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/templates/main.html'));
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/templates/main.html'));
})

app.get('/ask', async (req, res) => {
    res.sendFile(path.join(__dirname + '/templates/ask.html'));
})

app.get('/such', (req, res) => {
    res.sendFile(path.join(__dirname + '/templates/such.html'))
})

app.get('/mail', (req, res) => {
    res.sendFile(path.join(__dirname + '/templates/mail.html'))
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
})