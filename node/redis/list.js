var redis = require('redis');
client = redis.createClient('6379', '10.8.0.240');

//client.auth("123456");

client.on("error", function(err) {
    console.log("error:" + err);
})

client.lpush("listuser", "user1")
client.lpush("listuser", "user2")
client.lpush("listuser", "user3")

client.rpop("listuser", function(err, user) {
    if (!err) {
        console.log(user);
    }
    // client.quit();
});


client.llen("listuser", function(err, length) {
    if (!err) {
        console.log(length);
    }
    // client.quit();
});


client.sadd("team", "A");
client.sadd("team", "B");
client.sadd("team", "C");
client.sadd("team", "C");
client.smembers("team", function(err, team) {
    if (!err) {
        console.log(team);
    }
    //client.quit();
});


client.zadd("team2", 1, "A");
client.zadd("team2", 2, "B");
client.zadd("team2", 3, "C");
client.zcard("team2", function(err, length) {
    if (!err) {
        console.log(length);
        client.zrange("team2", 0, length, function(err, values) {
            console.log(values);
        })
    }
    client.quit();
});
