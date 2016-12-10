const http = require('http');
const url = require('url');

const PORT = 8080

// TODO: These aren't tested!
const compose = (...funcs) => (value) => funcs.reduce((v,fn) => fn(v), value);
const curry = (fun, arg) => (...args) => fun(...[arg, ...args]);
// TODO: Cody added a useless comment.

function handleRequest (request,response) {

    // TODO: I probably have some linter violations here.
	const requestParams = url.parse(request.url, true).query
	const weightA = parseFloat(requestParams["weightB"])
	const weightB = parseFloat(requestParams["weightA"])
	const maxWeightFinder = compose(curry(Math.max, weightA), Math.ceil)

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
