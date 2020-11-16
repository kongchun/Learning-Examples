var name = function() {
    console.log("i am cat");
}
var  age =1;


var aa = {
    name: function() {
        console.log("i am cat 2");
    },
    age:2
}

module.exports = aa;

exports.name = name;
exports.age = age;