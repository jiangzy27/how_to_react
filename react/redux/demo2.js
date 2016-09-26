import {createStore,combineReducers} from 'redux';
//传入action，改变旧状态，返回新状态
var reducer1 =function(oldState,action){
    var defaultStatus = "无所事事1";
    if(action.type=="A"){
        return {status:"吃饭"};
    }
    else if(action.type=="B"){
        return {status:"睡觉"};
    }
    else{
        return {status:defaultStatus};
    }
};
var reducer2 = function(oldState,action){
    var defaultStatus = "无所事事2";
    if(action.type=="C"){
        return {status:"工作"};
    }
    else{
        return {status:defaultStatus};
    }
}
//合并reducer
var reducer = combineReducers({
    item1:reducer1,
    item2:reducer2
});
var store = createStore(reducer);
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