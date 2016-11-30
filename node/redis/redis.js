var redis = require('redis');
client = redis.createClient('6379', '10.8.0.240');

//client.auth("123456");

client.on("error", function(err) {
    console.log("error:" + err);
})

console.log("setting key1");

client.set("key1", "My name is kongchun", redis.print);

console.log("get key1");

client.get("key1", function(err, reply) {
    console.log("result:" + reply);
    client.quit();
})
