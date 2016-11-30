var http = require('http');
var cluster = require('cluster');
var numCPUs = require("os").cpus().length;

console.log(numCPUs);


if (cluster.isMaster) {

    for (var i = 0; i < numCPUs; i++) {
        var worker = cluster.fork();
        console.log('worker [%d] has been created', worker.process.pid);
    }

    cluster.on('listening', function(worker, address) {
        console.log('listening: worker ' + worker.process.pid + ', Address: ' + address.address + ":" + address.port);
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' exit');
    });

    cluster.on('death', function(worker) {
        console.log('worker' + worker.pid + "died");
    })

} else {
    http.createServer(function(req, res) {
        res.writeHead(200);
        res.end("hello world\n");
    }).listen(3000);
}
