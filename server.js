const http = require('http');
const url = require('url');
const util = require('./util.js');

const PORT = 8080;

function handleRequest (request,response) {
	// TODO: I probably have some linter violations here.
	const requestParams = url.parse(request.url, true).query
	const weightA = parseFloat(requestParams["weightB"])
	const weightB = parseFloat(requestParams["weightA"])
	const maxWeightFinder = util.compose(util.curry(Math.max, weightA), Math.ceil)

	response.end(JSON.stringify({
	    "weightA": weightA,
	    "weightB": weightB,
	    "heaviestRoundedUp": maxWeightFinder(weightB)
	}));
}

const server = http.createServer(handleRequest)

server.listen (PORT, function () {
	console.log('Server listening on: http://localhost:%s', PORT)
});

// TODO: Second useless comment
