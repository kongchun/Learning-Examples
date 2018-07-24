// babel babel-es6.js --out-file babel-es5.js
'use strict';

console.log("wwwwwwwwwwwwwwwwwwwwwwwB");
let arrLike = {
	"0": "a",
	"1": "b",
	length: 3
}
console.log(Array.isArray(arrLike));
arrLike = Array.from(arrLike);
console.log(Array.isArray(arrLike));
console.log(Array.from("hello"));
console.log(Array.from({
	length: 3
}));
console.log(Array.from([1, 2, 3], (x) => x * x));
console.log(Array.from([1, 2, 3], x => typeof x));
console.log("====");
console.log(Array.of(1, 2, 3));
console.log(new Array(1, 2, 3));
console.log(Array.of(3));
console.log(new Array(3));
console.log("====");
console.log([1, 2, 3].copyWithin(0, 1));
console.log([1, 2, 3].copyWithin(0, 1, 2));
console.log([1, 2, 3].find((n) => n > 1));
console.log([1, 2, 3].findIndex((n) => n > 1));
console.log([1, 2, 3].fill(8));
console.log([1, 2, 3].fill(8, 1, 2));
console.log("====");

for (let index of["a", "b"].keys()) {
	console.log(index);
}
for (let index of["a", "b"].values()) {
	console.log(index);
}
for (let [index, el] of["a", "b"].entries()) {
	console.log(index);
	console.log(el);
}

let x = ["a", "b"].entries();
console.log(x.next());
console.log(x.next());
console.log("====");

console.log([1, 2, 3].includes(1))
console.log([1, 2, 3].includes(1, 2))

console.log("====");

let y = [1,2,3];
let z = y.reduce(function(prev, cur, index, arr) {
    console.log(prev, cur, index);
    return prev+cur;
})


let yy = [1,2,[3,4,5]];
console.log(Array.prototype.concat.apply([],yy));
let zz = y.reduce(function(prev, cur, index, arr) {
    console.log(prev, cur, index);
    return prev+cur;
})

 console.log(z);
//数组推导 ES7
