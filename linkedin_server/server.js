
var scrape_in = require('./scrape_in.js');
var express   = require('express');
var app       = express();

app.get('/process_get', function (req, res) {
    scrape_in(req.query.url);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listening at http://localhost:%s", port);
});
