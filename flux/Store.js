import {EventEmitter} from 'events';
import * as ActionTypes from './ActionType';
import Dispatcher from './Dispatcher';


const store = {
    name:"defalutName"
};

//这里定义store的绑定事件
const MyStore = Object.assign({},EventEmitter.prototype,{

    getName:function(){
        console.log(store.name);
        return store.name;
    },

    emitChange: function () {
        console.log("flux 4：触发数据操作后的回调事件")
        this.emit('CHANGE');
    },

    addChangeListener: function(callback) {
        this.on('CHANGE', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('CHANGE', callback);
    }
})

MyStore.dispatcherToken = Dispatcher.register((action)=>{
    console.log("flux 3：获取到分发的事件，进行操作数据 ")
    if(action.type == ActionTypes.SET_NAME){
        store.name = action.name;
        MyStore.emitChange();
    }
})

export default MyStore;



