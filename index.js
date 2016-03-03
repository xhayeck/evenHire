//Node configuration goes here
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/dist')));
require('./server/routes')(app);

var port = process.env.PORT || 8000;

app.listen(port, function() {
  console.log('EvenHire running on port ' + port);
});
