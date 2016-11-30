// babel babel-es6.js --out-file babel-es5.js
'use strict';

function* f() {
    yield "hello";
    yield "world";
    return true;
}

var x = f();
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());

for (let v of f()) {
    console.log(v);
}
