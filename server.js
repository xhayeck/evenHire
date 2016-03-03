//Node configuration goes here
var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 8000;

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
app.use(express.static(path.join(__dirname, '/dist/')));

app.listen(port, function () {
  console.log('App listening on port ' + port);
});
