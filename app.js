const express = require('express');
const bodyParser = require('body-parser');
const http = require('http').Server(app);
var app = express();
var httpRequest = require('request');




app.use(bodyParser.json());
app.post("/listener/sm", function(request, response) {

	console.log(request.body);

});

app.listen(8081);
