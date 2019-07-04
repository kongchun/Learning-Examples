import * as ActionTypes from './ActionType';
//这里封装一个操作或者一个组件的 Action，包含所有分发dispatcher的操作
export const setName = (name) =>{
    console.log("Redux 2：触发事件 ")
    return({
        type:ActionTypes.SET_NAME,
        name
    })
} 



