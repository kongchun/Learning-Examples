'use strict';


console.log("===isArray")

console.log(Array.isArray([1]));

console.log("===forEach");

[1, 2, 3, 4].forEach(console.log);


var sum = 0;
[1, 2, 3, 4].forEach(function(item, index, array) {
    //console.log(array[index] == item); // true
    sum += item;
});

console.log(sum);


[1, 2, 3, 4].forEach(function(item, index, array) {
    if (index == 0) {
        console.log(this.a);
    }
}, { a: "kc" });

[1, , 3, 4].forEach(console.log);

console.log("===map");
var data = [1, 2, 3, 4];

var arrayOfSquares = data.map(function(item) {
    return item * item;
});

console.log(arrayOfSquares);

var arrayOfSquares2 = data.map(function() {});
console.log(arrayOfSquares2);

console.log("===filter");
var data = [0, 1, 2, 3];
var arrayFilter = data.filter(function(item) {
    return item;
});

console.log(arrayFilter); // [1, 2, 3]



console.log("===some");

function hasNumber(num) {
    var scores = [1, 2, 3, 4];
    return scores.some(function(item) {
        return item == num;
    })
}
console.log(hasNumber(2));
console.log(hasNumber(4));
console.log(hasNumber(5));

console.log("===every");

function isBigThanNumber(num) {
    var scores = [1, 2, 3, 4];
    return scores.every(function(item) {
        return item > num;
    })
}


console.log(isBigThanNumber(0));
console.log(isBigThanNumber(2));


console.log("===indexOf");
var data = [2, 5, 7, 3, 5];

console.log(data.indexOf(5, "x")); // 1 ("x"被忽略)
console.log(data.indexOf(5, "3")); // 4 (从3号位开始搜索)

console.log(data.indexOf(4)); // -1 (未找到)
console.log(data.indexOf("5")); // -1 (未找到，因为5 !== "5")

console.log("===lastIndexOf");

console.log(data.lastIndexOf(5)); // 4
console.log(data.lastIndexOf(5, 3)); // 1 (从后往前，索引值小于3的开始搜索)
console.log(data.lastIndexOf(4)); // -1 (未找到)

console.log("===reduce");

var sum = [1, 2, 3, 4].reduce(function(previous, current, index, array) {
    return previous + current;
});

console.log(sum); // 10

var matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];

// 二维数组扁平化
var flatten = matrix.reduce(function(previous, current) {
    return previous.concat(current);
});

console.log(flatten);


console.log("===reduceRight");


var flatten = matrix.reduceRight(function(previous, current) {
    return previous.concat(current);
});

console.log(flatten);
