import {createStore} from 'redux';
//传入action，改变旧状态，返回新状态
var store = createStore(function(oldState,action){
    var defaultStatus = "无所事事";
    if(action.type=="A"){
        return {status:"吃饭"};
    }
    else if(action.type=="B"){
        return {status:"睡觉"};
    }
    else if(action.type="C"){
        return {status:"工作"};
    }else{
        return {status:defaultStatus};
    }
});
//订阅-观察者，只有在state发生变化了之后，才会触发。
store.subscribe(function(){
    console.log(store.getState());
});
//分发请求
var action1 = { type: 'A' };
var action2 = { type: 'B' };
var action3 = { type: 'C' };
store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action3);