var express = require('express');
var app = express();

// Serve static assets
app.use(express.static('public'));

// Routes
app.use('/', require('./routes/home'));

// Start server
app.listen(3000, function() {
	console.log('Listening !');
});