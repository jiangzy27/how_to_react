import {createStore,combineReducers} from 'redux';

//传入action，改变旧状态，返回新状态
var reducer1 =function(oldState,action){
   if(action.type=="A"){
       return {status:'ok'};
   }else{
       return {
           status:'no'
       }
   }
};

var reducer2 = function(oldState,action){
    if(action.type=="C"){
        return {status2:'ok2'};
    }else{
        return {
            status2:'no2'
        }
    }
};

var reducer = combineReducers({
    item1:reducer1,
    item2:reducer2
});

var store = createStore(reducer);
//只有在state发生变化了之后，才会触发。
store.subscribe(function(){
    console.log(store.getState());
});
//分发状态改变的请求
store.dispatch({type:'A'});
