import {createStore} from 'redux';
import reducer from "./reducer"

const store = {
    name:"defalutName"
};

//这里定义store的绑定事件
const MyStore = createStore(reducer,store);

export default MyStore;




