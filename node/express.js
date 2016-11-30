var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var message = [];

// parse application/x-www-form-urlencoded 
var urlencoded = app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json 
app.use(bodyParser.json())

/*
app.use(function(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
})
*/

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.post("/send", function(req, res) {
    console.log(req.body);
    if (req.body && req.body.message) {

        message.push(req.body.message);
        res.send({ result: "ok" });
    } else {
        res.send({ result: "err" });
    }

})

app.get('/message', function(req, res) {
    res.send(message);
});



var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
