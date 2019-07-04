import * as Actions from './Action';
import myStore from "./Store";


//注册数据变化事件，data变更后 更新VIEW视图
myStore.addChangeListener(function(){
    console.log("flux 5：数据变更后的处理")
    myStore.getName();
})

//原始数据
myStore.getName();

//机制触发 数据变更
console.log("flux 1：开始执行")
Actions.setName("kedacom");