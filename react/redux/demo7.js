import React,{ Component } from 'react';
import  ReactDOM  from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import App from './App';



//创建reducer
function reducer1(oldState,action){
    console.log(oldState);
    oldState = {completed:false};
    if(action.type=="ok"){
        return {completed:true};
    }
    else{
        return oldState;
    }
}

var store = createStore(
    reducer1,
    applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);


