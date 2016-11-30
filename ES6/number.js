// babel babel-es6.js --out-file babel-es5.js
'use strict';

console.log(Number.isFinite(15));
console.log(Number.isFinite('15'));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));
console.log("====");
console.log(Number.isNaN(NaN));
console.log(Number.isNaN('NaN'));
console.log(isNaN('NaN'));
console.log(Number.isNaN(15));
console.log(Number.isNaN('15'));
console.log(Number.isNaN('15' / NaN));
console.log(9 / 0);
console.log("====");
console.log(Number.isInteger(15));
console.log(Number.isInteger(15.0));
console.log(Number.isInteger(15.1));
console.log(Number.isInteger('15'));
console.log("====");

var a = 0.1,
    b = 0.2,
    c = 0.3;
var d = 0.1 + 0.2 - 0.3;
console.log(d);
console.log(d.toFixed(20));
console.log(d < Number.EPSILON);

console.log("====");
//去小数
console.log(Math.trunc(4.1));
console.log(Math.trunc(-4.1));

console.log("====");
//正数1，负数-1
console.log(Math.sign(5));
console.log(Math.sign(-5));
console.log(Math.sign(0));
console.log(Math.sign(-0));
console.log(Math.sign(NaN));
//立方根
console.log(Math.cbrt(2));
//32位二进制
console.log(Math.clz32(0));
//符号数乘法
console.log(Math.imul(2, 4));
console.log(Math.imul(-2, 4));
console.log(Math.imul(-2, -4));
//单精度浮点数
console.log(Math.fround(1));
console.log(Math.fround(1.337));
//平方和的平方根
console.log(Math.hypot(3, 4));

console.log("====");
//e~x-1
console.log(Math.expm1(-1));
//ln(1+x)
console.log(Math.log1p(1));
//log10
console.log(Math.log10(2));
//log2
console.log(Math.log2(0.2));

console.log("====");
console.log(Math.sinh(2));
console.log(Math.cosh(2));
console.log(Math.tanh(2));
console.log(Math.asinh(2));
console.log(Math.acosh(2));
console.log(Math.atanh(2));

console.log("====");

//console.log(2 ** 3 == 8 ) //es7
