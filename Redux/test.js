import * as Actions from './Action';
import myStore from "./Store";


//注册数据变化事件，data变更后 更新VIEW视图
myStore.subscribe(function(){
    console.log("Redux 4：数据变更后的处理")
    console.log(myStore.getState());
})

//原始数据
console.log(myStore.getState());

//机制触发 数据变更
console.log("Redux 1：开始执行")
myStore.dispatch(Actions.setName("kedacom"));