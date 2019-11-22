var app = require('express')();
const colors = require("colors/safe"); //console colors because i want to be gay with rainbows great;
var http = require('http').createServer(app);
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
;thi