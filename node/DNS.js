var dns = require("dns")
dns.resolve("163.com", 'A', function(e, r) {
    if (e) {
        console.log(e);
    }
    console.log(r);
})
