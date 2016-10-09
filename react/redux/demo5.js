import React,{ Component } from 'react';
import  ReactDOM  from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
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

var store = createStore(reducer1);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);


