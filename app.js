var express = require('express');
var app = express();

const port = 3000;
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(port, () => console.log('App Listening on port '+port) );