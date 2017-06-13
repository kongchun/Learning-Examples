// babel babel-es6.js --out-file babel-es5.js
'use strict';

import  async  from "async";

function A(callback){
	setTimeout(function(){
		console.log("A");
		callback();
	},1000)
};

function B(callback){
	setTimeout(function(){
		console.log("B");
		callback();
	},500)
};



function asyncFun(...task){
	async.waterfall(...task)
}

//console.log(async)
//请完善asyncFun 函数得到如下预期输出效果

//asyncFun([A,B]); // A,B
asyncFun([A,B,B,A]); // A,B,B,A


