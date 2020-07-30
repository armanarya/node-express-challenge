//calling express
var express = require('express');
//initializing
var app = express();

var port = 3000;

//startpage
app.get('/', function(req, res) {
    res.sendfile('./main.html')
})
//aboutpage
app.get('/about', function(req, res) {
    res.sendfile('./about.html')
})
//homepage
app.get('/home', function(req, res) {
    res.sendfile('./home.html');
})
//contactpage
app.get('/contact', function(req, res) {
    res.sendfile('./contact.html');
})
//401 status code
app.get('/code', function(req, res) {
    res.sendStatus(401)
})
app.listen(port, function() {
    console.log('listening on port:', port)
})