import * as ActionTypes from './ActionType';

export default (state,action) =>{
    
    const {name} = action;
    if(action.type == ActionTypes.SET_NAME){
       console.log("Redux 3：获取到分发的事件，进行操作数据 ")
       return {...state,name:name};
    }
    return state;
}



