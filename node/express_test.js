var http = require('http');

assert = require('assert');
var opts = {
    host: 'localhost',
    port: '3000',
    path: '/send',
    method: 'POST',
    headers: { "content-type": 'application/x-www-form-urlencoded ' }
}
var req = http.request(opts, function(res) {
    res.setEncoding('utf8');
    var data = "";
    res.on("data", function(d) {
        data += d;
    })

    res.on("end", function() {
        assert.strictEqual(data, '{"result":"ok"}');
        console.log("run End");
    })

})
req.write('message=1');
req.end();
