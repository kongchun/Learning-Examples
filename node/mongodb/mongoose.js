var mongoose = require("mongoose");
var db = mongoose.createConnection('mongodb://10.8.0.240:27017/node-mongo-test');
// 链接错误
db.on('error', function(error) {
    console.log(error);
});

var Schema = mongoose.Schema;


// Schema 结构
var ArticleSchema = new Schema({
    username: { type: String, default: '匿名用户' },
    title: { type: String },
    content: { type: String }
});

var Article = db.model('Article', ArticleSchema);

var docs = {
    username: "kongchun",
    title: "hello world",
    content: "this is a text"
}

new Article(docs).save(function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log('saved OK!');
    }


    Article.find({ title: "hello world" }, function(err, docs) {
        console.log("find");
        console.log(docs);

        Article.remove({ title: "hello world" }, function(error) {
            if (error) {
                console.log(error);
            } else {
                console.log('delete ok!');
            }


            // 关闭数据库链接
            db.close();
        });


    });

});
