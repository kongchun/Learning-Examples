// babel babel-es6.js --out-file babel-es5.js
'use strict';
var [a, b, c] = [1, 2, 3];

console.log(3);
//foo.a = 1;


var [head, ...tail] = [0, 1, 2, 3];
console.log(tail);
console.log(tail[0]);


//let [a] = 1;//无法解构


//默认值

var [x, y = "b"] = [a];
console.log(y);

var [x = 1] = [undefined];
console.log(x);
var [x = 1] = [null];
console.log(x);


function f() {
    console.log("aaa");
}

let [z = f()] = [1];
console.log(z);

let [d = e, e = 1] = [];
console.log(d);
console.log(e);


var { foo, bar: biz } = { bar: "aaa", foo: "bbb" };
console.log(foo);
//console.log(bar);
console.log(biz);


let { length: len } = "hello";
console.log(len);


function add([x, y]) {
    return x + y;
}

console.log(add([1, 2]));


//使用场景

function example() {
    return [1, 2, 3]
}

var [aa, bb, cc] = example();
console.log(bb);


function example1() {
    return {
        foo: 1,
        bar: 2
    }
}

var { foo, bar } = example1();
console.log(foo);


var jsonData = {
    id: 111,
    data: [213, 234]
}

let { id, data: number } = jsonData;
console.log(number);


var map = new Map();
map.set("aa", '11');
map.set("bb", "22");

for (let [key, value] of map) {
    console.log(key + ":" + value)
}
