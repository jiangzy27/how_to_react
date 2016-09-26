import {createStore} from 'redux';
// 管理状态的函数
function count (state, action) {
    var defaultState = {
        year: 2015
    };
    state = state || defaultState;
    switch (action.type) {
        case 'add':
            return {
                year: state.year + 1
            };
        case 'sub':
            return {
                year: state.year - 1
            }
        default :
            return state;
    }
}
//将状态函数装入store里面管理。
var store = createStore(count);
//订阅，如果状态发生改变，就会触发。
store.subscribe(function(){
    console.log('the year is:',store.getState().year);
});

// action: 触发state改变的唯一方法(按照redux的设计思路)
var action1 = { type: 'add' };
var action2 = { type: 'add' };
var action3 = { type: 'sub' };

// 改变store里面的方法
store.dispatch(action1); // 'the year is: 2016
store.dispatch(action2); // 'the year is: 2017
store.dispatch(action3); // 'the year is: 2016