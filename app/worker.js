const config = require('./config');

const os = require("os");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const renderWorkerHtml = require('./worker.html.js');

const hostname = os.hostname();

app.get('/worker', (req, res) => {
    res.send(renderWorkerHtml(hostname));
});

app.post('/worker', (req, res) => {
    fs.appendFileSync(config.MESSAGE_FILE, `Username: ${req.body.username}\tMessage: ${req.body.message}\n`);
    res.send(renderWorkerHtml(hostname));
    console.log(req.body)
});

app.listen(config.PORT, () => {
    console.log(`Example app listening at http://localhost:${config.PORT}`)
});