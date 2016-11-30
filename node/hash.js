var crypto = require("crypto");

var md5 = crypto.createHash("md5");

md5.update("888888");

//var t = md5.digest();
var t = md5.digest('hex');
console.log(t);


var sha1 = crypto.createHash("sha1");

sha1.update("888");
sha1.update("888");

//var t = md5.digest();
var t = sha1.digest('hex');
console.log(t);
