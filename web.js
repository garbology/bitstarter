var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var responseTxt = "";
var indexFile = 'index.html';

app.get('/', function(request, response) {
  try {
    responseTxt = fs.readFileSync(indexFile).toString();
  }
  catch(err) {
    responseTxt = "Error opening file: " + indexFile;
  }
  response.send(responseTxt);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
