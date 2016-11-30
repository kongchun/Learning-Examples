// babel babel-es6.js --out-file babel-es5.js
'use strict';

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return this.x + this.y;
    }

    getClassName() {
        return Point.name;
    }
}

let p = new Point(1, 2);
console.log(p.toString());
console.log(p.constractor === Point.prototype.constractor);
console.log(p.getClassName());


let person = new class {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}("hello world");
console.log(person.getName());



class ColorPoint extends Point {
    constructor(x, y) {
        super(x, y)
    }

    toString() {
        return "color:" + super.toString();
    }
}

let cp = new ColorPoint(1, 2);
console.log(cp.toString());
console.log(Object.getPrototypeOf(ColorPoint) === Point);

class Foo {
    static className() {
        return Foo.name;
    }
}

console.log(Foo.className());


function foo() {
    console.log(new.target === foo);
}

foo();
new foo();
