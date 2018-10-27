const express = require('express');
const { Router } = express;

const testRouter = Router();

//here I'm seding html. or I could serve an html file. but I just want to send
//the data to the url and retrieve it with the front end.
//Axios has to come into play here. But isn't going to always pull? Ugh
testRouter.get('/', function(req, res) {
	res.send('<h1>Test Route</h1>');
});

module.exports = testRouter;
