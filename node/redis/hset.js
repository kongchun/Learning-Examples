var redis = require('redis');
client = redis.createClient('6379', '10.8.0.240');

//client.auth("123456");

client.on("error", function(err) {
    console.log("error:" + err);
})

console.log("setting user hash");

client.hset("user", "username", "kongchun");
client.hmset("user", "firstname", "kong", "lastname", "chun");

console.log("get user");



client.hkeys("user", function(err, replies) {
    console.log("replies:" + replies.length);
    replies.forEach(function(reply, i) {
            console.log(i + ":" + reply);
        })
        //client.quit();
})


client.hvals("user", function(err, replies) {
    console.log("replies:" + replies.length);
    replies.forEach(function(reply, i) {
        console.log(i + ":" + reply);
    })
    client.quit();
})
