// babel babel-es6.js --out-file babel-es5.js
'use strict';

//let 作用域内有效
{
    let a = 1;
    var b = 2;
}

//console.log(a); // not defined 
console.log(b);

var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i)
    }
};

a[5]();

for (let i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i)
    }
};

a[5]();

typeof x;
let x;

{
    console.log(foo); // 输出undefined
    console.log(bar); // 报错ReferenceError

    var foo = 2;
    let bar = 2;
}

function func(arg) {
    a = 1;
    console.log(a);
    let a = 2;
    console.log(a);

    //let arg;
    //

}


var tmp = new Date();

function f() {
    console.log(tmp);
    if (false) {
        var tmp = "hello world";
    }

}

f();


function f2() { console.log('i am outside'); };
(function() {
    if (false) {
        function f2() { console.log('i am inside'); };
    }
    f2();
}())


let f3; {
    let a = 1;

    f3 = function() {
        return a;
    }

}
console.log(f3());
