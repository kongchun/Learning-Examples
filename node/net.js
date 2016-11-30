var net = require("net");

var chatServer = net.createServer();

chatServer.on('connection', function(client) {
    client.write("hi\n");

    //client.end();
    clinet.on("data", function(data) {
        console.log(data);
    })
})


chatServer.listen(9000);
