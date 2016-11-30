// babel babel-es6.js --out-file babel-es5.js
'use strict';

let s = Symbol("aaa");
console.log(typeof s);

var t = Symbol("t");
let o = {
    [t]: 123
}

console.log(o[t]);
console.log(o.t);

var log = {}
log.levels = {
    DEGBUG: Symbol("debug"),
    INFO: Symbol("info")
}

console.log(log.levels.DEGBUG);
