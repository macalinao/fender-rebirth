var express = require('express');
var app = express();
app.get('/config.js', function(req, res) {
  res.end('var env = ' + JSON.stringify(process.env));
});
app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening on port ' + port);
});
