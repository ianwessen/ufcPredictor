const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  utility = require('utility'),
  R = require('ramda');

const PORT = 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/prediction', function(req, res) {
  const weightA = req.body.weightA;
  const weightB = req.body.weightB;
  
  const maxWeightFinder = utility.compose(utility.curry(Math.max, weightA), Math.ceil);

  const winningWeight = maxWeightFinder(weightB)
  const winner = R.invertObj(req.body)[winningWeight]

  if (weightA == weightB) {
    res.send("It's a tie!");
  } else {
    res.send(winner == "weightA" ? "Fighter A" : "Fighter B");
  }
});

app.listen(PORT, function() {
  console.log('server listening on port ' + PORT);
});
