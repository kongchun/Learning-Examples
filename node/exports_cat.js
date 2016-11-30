var name = function() {
    console.log("i am cat");
}

exports.name = name;

var aa = {
    name: function() {
        console.log("i am cat 2");
    }
}

module.exports = aa
