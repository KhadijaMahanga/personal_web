
const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();
const mailer = require(__dirname +'/services/mailer.js');
const bodyParser = require('body-parser');

require('babel-polyfill');
require('babel-core/register');

//import * as searchRenderer from './src/search/SearchRenderer.jsx';
//var searchRenderer = require('./src/search/SearchRenderer.jsx');
// serve static assets normally
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

// Handles all routes so you do not get a not found error
//app.get('/search', searchRenderer.renderPage);
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.post('/contact', mailer.handleMessage);

app.listen(port);
console.log("server started on port " + port);
