var util = require('util');
var EventEmitter = require('events').EventEmitter;



var Server = function() {
    console.log("init");
}

Server.prototype.help = function(output) {
    console.log(this);
    console.log(output);
    console.log(this.get());
}

Server.prototype.get = function(output) {
    return "test";
}

//继承
util.inherits(Server, EventEmitter);

var s = new Server();
s.on("kc", s.help)

s.emit("kc", "hello");
