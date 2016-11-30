// babel babel-es6.js --out-file babel-es5.js
'use strict';
const PI = 3.14

//PI = 1;

export const A = 1;
export const B = 2;


const T = {};

T.a = 1;
T.a = 2;

console.log(T.a);


const foo = Object.freeze({});
//foo.a = 1;
