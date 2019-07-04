import * as ActionTypes from './ActionType';
import Dispatcher from './Dispatcher';

//这里封装一个操作或者一个组件的 Action，包含所有分发dispatcher的操作
export const setName = (name) =>{
    console.log("flux 2：通过dispatch 触发事件 ")
    Dispatcher.dispatch({
        type:ActionTypes.SET_NAME,
        name
    })
} 



