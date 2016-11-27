var http = require('http');
var url = require('url');

const PORT = 8080

// TODO: These aren't tested!
let compose = (...funcs) => (value) => funcs.reduce((v,fn) => fn(v), value);
let curry = (fun, arg) => (...args) => fun(...[arg, ...args]);

function handleRequest (request,response) {

    // TODO: I probably have some linter violations here.
	var requestParams = url.parse(request.url, true).query
	var weightA = parseFloat(requestParams["weightB"])
	var weightB = parseFloat(requestParams["weightA"])
	var maxWeightFinder = compose(curry(Math.max, weightA), Math.ceil)

	response.end(JSON.stringify({
	    "weightA": weightA,
	    "weightB": weightB,
	    "heaviestRoundedUp": maxWeightFinder(weightB)
	}));
}

var server = http.createServer(handleRequest)

server.listen (PORT, function () {
	console.log('Server listening on: http://localhost:%s', PORT)
});
