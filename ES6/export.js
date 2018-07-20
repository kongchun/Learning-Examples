// babel babel-es6.js --out-file babel-es5.js
'use strict';



var lastName = "chun";

function show(x) {
    console.log(x);
}

function hi() {
    console.log("hi");
}

export var firstName = "kong";

export  { lastName, show };


export default class User {
    constructor() {
        console.log("new User");
    }
}
