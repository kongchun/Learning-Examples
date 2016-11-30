// babel babel-es6.js --out-file babel-es5.js
'use strict';
var arr = ["a", "b"];
var it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
