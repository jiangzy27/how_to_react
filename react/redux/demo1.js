import {createStore} from 'redux';

//传入action，改变旧状态，返回新状态
var store = createStore(function(oldState,action){
   if(action.type=="A"){
       return {status:"吃饭"};
   }
   else if(action.type=="B"){
       return {status:"睡觉"};
   }
   else if(action.type="C"){
       return {status:"工作"}
   }else{
       return {status:"无所事事"};
   }
});
//只有在state发生变化了之后，才会触发。
store.subscribe(function(){
    console.log(store.getState());
});

//分发状态改变的请求
store.dispatch({type:'A'});
store.dispatch({type:'B'});
store.dispatch({type:'C'});
