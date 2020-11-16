"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isDone = false;
var decLiteral = 6;
var hexLiteral = 0xf00d; // 61453
var name = "bob";
name = "smith";
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var x;
console.log(x = ['hello', 10]);
//console.log(x = [10, 10])
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
function warnUser() {
    console.log("This is my warning message");
}
// Not much else we can assign to these variables!
var u = undefined;
var n = null;
create({ prop: 0 });
var someValue = "this is a string";
var strLength = someValue.length;
var strLength2 = someValue.length;
