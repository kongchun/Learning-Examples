// babel babel-es6.js --out-file babel-es5.js
'use strict';

function f(x, y) {
    return { x, y }
}

console.log(f(1, 2));

var o = {
    show() {
        console.log("show");
    }
}
o.show();

console.log(Object.is(o, o));
console.log(Object.is({}, {}));
console.log(Object.is(0, 0));
console.log(Object.is(0, -0));

var target = { a: 1 };
var source1 = { b: 2 };
var source2 = { b: 4, c: 3 };

Object.assign(target, source1, source2);
console.log(target);


class Point {
    constructor(x, y) {
        Object.assign(this, { x, y })
    }
}

console.log(new Point(1, 2));

let obj = { foo: 123, bar: 456 };
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
Object.defineProperty(obj, 'bar', {
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(obj, 'bar'));

console.log("======");
for (let prop in obj) {
    console.log(prop);
}

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
console.log(Reflect.ownKeys(obj));


let proto = {};
let test = { x: 10 };
Object.setPrototypeOf(test, proto)
proto.y = 20;
console.log(test.y);
