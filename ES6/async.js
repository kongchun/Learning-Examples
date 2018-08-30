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
	for(let func of task){
	    await new Promise((resolve)=>{
			func(resolve);
		})
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

// function timeout(){
// 	//return Promise.resolve("hello world")
//   return new Promise((resolve) => {
//  	 resolve("hello world")
//   });
// }


//console.log(timeout())

// timeout().then((result)=>{
// 	console.log(result)
// })


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


// function timeout2(ms=500,callback) {
//     // setTimeout(function(){
//     // 	console.log(1);
//     // 	callback && callback(1);
//     // }, ms);
    
//     return new Promise((resolve) => {
// 	    setTimeout(()=>{
// 	    	console.log(1);
// 			resolve(2);
// 		}, ms);
// 	 });
	
   
// }


// async function run(){
// 	console.log(0)

// 	// timeout2(500,function(value){
// 	// 	console.log("hello world",value)
// 	// });
	 
// 	// timeout2(500).then((value)=>{
// 	// 	console.log("hello world",value);
// 	// })
	
// 	var value = await timeout2(500);
// 	console.log("hello world",2);
// }

// run()
// 
// 
// 
// 
// 
function wait(){
	// setTimeout(function(){
	// 	console.log(1);
	// 	callback && callback("success");
	// },500)


	 return new Promise((resolve) => {
	    setTimeout(()=>{
	    	console.log(1);
			resolve("success");
		}, 500);
	})
}


function getJSON(url){
	return  new  Promise((resolve,reject) => {
	   $.getJSON(url,function(json){
	   		resolve(json)
		}).error(function(e){
			reject(e)
		})
	})
}




(async function(){
	// wait(function(value){
	// 	console.log(2);
	// 	console.log(value);
	// })
	
	// wait().then((value)=>{
	// 	console.log(2);
	// 	console.log(value);
	// }).catch((e)=>{
	// 	console.log(e);
	// })
	
	 var value = await wait();
	 console.log(2);
	 console.log(value);

	 //var json = await getJSON(url);
	 //console.log(json);
})()




function play(){
    step1(function(){
        step2(function(){
            step3(function(){
                step4(function(){
                    func();
                });
            })
        })
    })
}


function play(){
    step1.then(function(){
       return step2();
    }).then(()=>{
       return step3();
    }).then(()=>{
       return step4();
    }).then(()=>{
       return func();
    }).catch((e)=>{
		console.log(e);
		return {}
	})
}



async function play(){

	await step1();
	await step2();
	await step3();
	await step4();
	return func();

}

//play()