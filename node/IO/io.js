var fs = require("fs");

fs.readFile('foo.txt', 'utf8', function(err, data) {
    console.log(data);
});


fs.readFile('bar.txt', 'utf8', function(err, data) {
    console.log(data);
});
