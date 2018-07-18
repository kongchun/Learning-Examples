// babel babel-es6.js --out-file babel-es5.js
'use strict'

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


async function asyncFun(task) {
	var promiseArr = task.map((func)=>{
		return () => {
			return new Promise((resolve)=>{
				func(resolve);
			})
		}
	})

	for(let func of promiseArr){
	    await func();
	}
	
	

	//OR
	//async.waterfall(...task)
}

//console.log(async)
//请完善asyncFun 函数得到如下预期输出效果

//asyncFun([A,B]); // A,B
asyncFun([A,B,B,A]); // A,B,B,A





//asyncFun()



async function timeout() {
　　return 'hello world';
}

//console.log(timeout())

timeout().then((result)=>{
	//console.log(result)
})


function timeoutRun(ms) {
  return new Promise((resolve) => {
    setTimeout(()=>{
		resolve("hello world2");
	}, ms);
  });
}

async function testResult() {
    let result = await timeoutRun(30);
    return result;
}

testResult().then((t)=>{
	//console.log(t)
})