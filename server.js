const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');

const PORT = 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/app.html');
});

app.post('/form', function(req, res) {
  const weightA = req.body.weightA
  const weightB = req.body.weightB
  const maxWeightFinder = compose(curry(Math.max, weightA), Math.ceil);

  const maxWeight = JSON.stringify({
    "weightA": weightA,
    "weightB": weightB,
    "heaviestRoundedUp": maxWeightFinder(weightB)
  })
  
  console.log(maxWeight);
  res.send(maxWeight);
  
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
