var redis = require('redis');
aclient = redis.createClient('6379', '10.8.0.240');
bclient = redis.createClient('6379', '10.8.0.240');
//client.auth("123456");
bclient.on("subscribe", function(channel, count) {
    aclient.publish(channel, "hello" + channel);
    aclient.publish(channel, "subscribe" + count);
})

bclient.on("unsubscribe", function(channel, count) {
    if (count === 0) {
        aclient.quit();
        bclient.quit();
    }
})

bclient.on("message", function(channel, message) {
    console.log(channel + ":" + message);
})


bclient.on("ready", function() {
    bclient.subscribe("channelA", "channelB");
    setTimeout(function() { bclient.unsubscribe("channelA", "channelB") }, 2000);
})
