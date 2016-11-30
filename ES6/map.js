// babel babel-es6.js --out-file babel-es5.js
'use strict';

var s = new Set([1, 2, 3, 4]);
s.add(5).add(6).add(1).add(2)
console.log(s);
console.log(s.size);
console.log([...s]);
console.log(s.has(2));
s.delete(1);
console.log(s);
console.log(s.size);

for (let item of s.entries()) {
    console.log(item);
}

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
let union = new Set([...a, ...b]);
console.log(union);
let intersect = new Set([...a].filter(x => b.has(x)));
console.log(intersect);
let defference = new Set([...a].filter(x => !b.has(x)));
console.log(defference);

console.log("=======");

var ws = new WeakSet();
var obj = {};
var foo = {};
ws.add(obj).add(foo);
console.log(ws.has(obj));
ws.delete(foo);
console.log(ws);

console.log("=======");


var m = new Map();
var o = { "p": "hello world" }
m.set(o, "content");
console.log(m.get(o));
console.log(m);

var map = new Map([
    ["name", "k"],
    ["title", "hi"]
])
console.log(map.size);
console.log(map.has("name"));
console.log(map.get("name"));

for (let i of map.entries()) {
    console.log(i[0], i[1]);
}


map.clear();
console.log(map.size);

//weakmap DOM节点作为key
