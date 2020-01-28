const express = require('express');
const app = express();
const port = 8080;

const hostname = '127.0.0.1';
const http = require('http');

const bodyParser = require('body-parser');
//const port = 3000


//MIDDLEWARE
app.use(bodyParser.urlencoded( {extended: false}));


var ICECREAM = [{
 "flavor" : "Mint",
 "size" : "M",
 "sprinkles" : "N",
 "rating" : 8
}, {
 "flavor" : "Vanilla",
 "size" : "S",
 "sprinkles" : "Y",
 "rating" : 6
}];

app.get('/icecream', function (request, response) {

	response.status(200)//.send("OK!");
	console.log("Request Type:", request.method);
	response.set('Content-Type', 'application/json');
	response.set('Access-Control-Allow-Origin', '*');
	response.json(ICECREAM);
	response.end();
});

app.post('/icecream', function (request, response){
	console.log("the body", request.body);
	
	let icecream = {
		flavor: request.body.flavor,
		size: request.body.size,
		sprinkles: request.body.sprinkles,
		rating: request.body.rating
	};

	ICECREAM.push(request.body);
	response.status(201)//.send("Created!");
	response.set('Content-Type', 'application/json');
	response.set('Access-Control-Allow-Origin', '*');
	response.end();
});


app.listen(port, hostname, function() {
	console.log(`Server ready and listening on port: ${port}!...`);
});