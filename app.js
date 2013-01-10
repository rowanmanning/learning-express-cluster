// Include Express
var express = require('express');

// Create a new Express application
var app = express();

// Add a basic route – index page
app.get('/', function (req, res) {
    res.send('Hello World!');
});

// Bind to a port
app.listen(3000);
console.log('Application running!');