const http = require('http'), 
  url = require('url'), 
  util = require('./util.js');

const PORT = 8080;

function handleRequest (request,response) {
  const requestParams = url.parse(request.url, true).query,
    weightA = parseFloat(requestParams["weightB"]),
    weightB = parseFloat(requestParams["weightA"]),
    maxWeightFinder = util.compose(util.curry(Math.max, weightA), Math.ceil);

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
