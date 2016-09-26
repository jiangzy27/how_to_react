import {createStore,applyMiddleware} from 'redux';

//传入action，改变旧状态，返回新状态
var reducer =function(oldState,action){
    if(action.type=="A"){
        return {status:'ok'};
    }else{
        return {
            status:'no'
        }
    }
};
//中间件声明
function ExampleMiddleware({ dispatch, getState }) {

    return function(next) {

        return function (action) {

            return typeof action === 'function' ?
                action(dispatch, getState) :
                next(action);
        }
    }
}
const finalCreateStore = applyMiddleware(ExampleMiddleware)(createStore);

var store = finalCreateStore(reducer);
//只有在state发生变化了之后，才会触发。
store.subscribe(function(){
    console.log(store.getState());
});
//分发状态改变的请求
var actionFunc = function(){

    return function(dispatch){
        setTimeout(function () {
            dispatch({
                type: "A"
            });
        },2000);
    }
}
//Uncaught Error: Actions must be plain objects. Use custom middleware for async actions.
store.dispatch(actionFunc());
