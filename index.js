var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');1
});

app.get('/shafeen', function (req, res) {
  res.send('<b>Hello Shafeen!</b>');
});

app.get('/budget/monthly/', function (req, res) {
  res.send('<b>Hello Rashmi!</b>');
});

app.get('/our/site/', function (req, res) {
  res.sendfile('index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
