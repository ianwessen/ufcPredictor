const express = require('express');
const path = require('path');
const app = express();

const PORT = 8080

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/app.html');
});

app.listen(PORT, function() {
  console.log('server listening on port ' + PORT);
});

// function handleRequest (request,response) {
// 
//     // TODO: I probably have some linter violations here.
//   const requestParams = url.parse(request.url, true).query
//   const weightA = parseFloat(requestParams["weightB"])
//   const weightB = parseFloat(requestParams["weightA"])
//   const maxWeightFinder = compose(curry(Math.max, weightA), Math.ceil)
// 
//   response.end(JSON.stringify({
//       "weightA": weightA,
//       "weightB": weightB,
//       "heaviestRoundedUp": maxWeightFinder(weightB)
//   }));
// }
// 
// http.createServer(handleRequest).listen(PORT, function () {
//   console.log('Server listening on: http://localhost:%s', PORT)
// });
