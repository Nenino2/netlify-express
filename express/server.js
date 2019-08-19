const express = require('express');
const serverless = require('serverless-http');
const app = express();
const ingredientsRouter = require('./routes/ingredientsRouter');

app.use(express.json());

app.use('/.netlify/functions/server', ingredientsRouter);

app.use(express.static(__dirname + '/../'));

module.exports = app;
module.exports.handler = serverless(app);
