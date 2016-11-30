// babel babel-es6.js --out-file babel-es5.js
'use strict';
for (let code of "foo") {
	console.log(code);
}


var s = "hello world";
console.log(s.startsWith("hell"));
console.log(s.endsWith("ld"));
console.log(s.includes("a"));
console.log(s.startsWith("world", 6));

console.log("x".repeat(3));
console.log("x".repeat(0));
console.log("x".repeat(0.9));
console.log("x".repeat("a"));


console.log("x".padStart(4, "dd"));
console.log("x".padEnd(4, "dd"));

let str = `this test
my test \n hello
`

console.log(str)


var x = 1,
	y = 2;

function fn() {
	return `${x} + ${y} = ${x+y}`
}

console.log(`${fn()}`);



var msg = test `hello ${x}`

function test(x, y) {
	console.log(x);
	console.log(y);
	return "hehe";
}
console.log(msg);


var aa = "\r\n        Greg Shea—Work for different world famous companies, including HP (China) , Berry Black (China President from 2010-2013 ) and now work as Direcror APAC , Hortonworks .\n                                      \n      ";
console.log(aa.replace(/[\\r|\\n| ]/ig, "").length)