var http = require('http');
var opts = {
    host: 'localhost',
    port: '3000',
    path: '/send',
    method: 'POST',
    headers: { "content-type": 'application/x-www-form-urlencoded ' }
}

try {
    var req = http.get(opts, function(res) {
        console.log('run ok');
    })

    req.on('error', function(e) {
        console.log('error:' + e);
    })

} catch (e) {
    console.log('error:' + e);
}
