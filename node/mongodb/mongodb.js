var mongo = require("mongodb");
var host = "10.8.0.240";
var port = "27017";

var server = new mongo.Server(host, port, {}); //本地27017端口

var db = new mongo.Db('node-mongo-test', server, {});
db.open(function(error, db) { //数据库：node-mongo-test
    if (error) throw error;

    db.collection('user', function(err, collection) {
        collection.insert({ username: "kongchun" }, function(err, docs) {
            console.log(docs);
        })

        collection.find(function(error, cursor) {
            cursor.each(function(error, doc) {
                if (doc) {
                    console.log("name:" + doc.username + ",_id:" + doc._id);
                }
            });
        });
        /*
        collection.remove({ username: "kongchun" }, { safe: true }, function(err, result) {
            console.log(result);
        });
        */
        db.close();
    }); //表：user


});
