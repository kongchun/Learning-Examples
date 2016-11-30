// babel babel-es6.js --out-file babel-es5.js
'use strict';

function log(x, y = "world") {
    console.log(x, y);
}

log("hello");
log("hello", "China");

function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

console.log(new Point);

function foo({ x, y = 5 }) {
    console.log(x, y);
}

foo({});
foo({ x: 1 });
foo({ x: 1, y: 2 });


var x = 1;

function f(x, y = x) {
    console.log(y);
}

f(2);

let z = 1;

function f(y = z) {
    let z = 3;
    console.log(y);
}

f();
console.log("=============");

function add(...values) {
    for (var val of values) {
        console.log(val);
    }
}

add(2, 4, 6);

console.log(0, ...[1, 2, 3], 5);


var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2)
console.log(arr1);

var [head, ...tail] = [0, 1, 2, 3];
console.log(head);
console.log(tail);

console.log("=============");

function func1() {
    this.name = "aaa";
}
console.log(func1.name);
console.log((new Function).name);
console.log(func1.bind({}).name);
console.log("=============");

var f = v => v;
console.log(f(1));
var f = () => 5;
console.log(f());
var sum = (a, b) => a + b;
console.log(sum(1, 1));

var number = (...nums) => nums;
console.log(number(1, 2, 3));



function foo2() {
    setTimeout(function() {
        console.log("id:", this.id);
    }, 100)

    setTimeout(() => {
        console.log("id2:", this.id);
    }, 100)
}

//foo2();
foo2.call({ id: 5 })
console.log("=============");

//foo1::foo2
//foo2.bind(foo1)
