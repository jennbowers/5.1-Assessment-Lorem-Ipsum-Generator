const express = require('express');
const loremIpsum = require('lorem-ipsum');
var output = loremIpsum({
  count: 3,
  units: 'paragraphs',
  format: 'html'
});
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/lorem', function(req, res) {
  res.send(output);
});

app.get('/lorem/:paraNum', function(req, res) {
  res.send(output = loremIpsum({
    count: req.params.paraNum,
    units: 'paragraphs',
    format: 'html'
  }));
});

app.listen(3000, function(){
  console.log('Successfully started express application!');
});
