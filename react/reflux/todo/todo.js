import React from 'react';
import ReactDOM from 'react-dom';
import Reflux from 'reflux';
import $ from 'jquery';
//创造一个action
var TodoActions = Reflux.createActions(['addItem']);
//创造一个store
var TodoStore = Reflux.createStore({

    items:["jack","tom"],//数据

    listenables:[TodoActions],//监听action
//这个函数其实是监控action的，
// 上面的todoAtions篮子有addItem函数，我们要监控它，
// 前面加个on，使用驼峰命名法
    onAddItem:function(model){
        $.post('/server/add',{name:model},function(data){
            console.log(data);

            this.items.push(data);
            this.trigger(this.items);//更新items
        }.bind(this));
    }

});
//创造一个view
var TodoComponent = React.createClass({

    //监听store
    mixins:[Reflux.listenTo(TodoStore,'onStatusChange')],
    getInitialState:function(){
        return {list:[]};
    },
    //监听到store发生变化后触发
    onStatusChange:function(){
        this.setState({list:TodoStore.items});
    },
    render:function(){
        return (
            <div>
                {this.state.list.map(function(item){
                    return <p>{item}</p>
                })}

            </div>


        );
    }
});
ReactDOM.render(<TodoComponent />,document.getElementById('app'));

/**
 * action->store->view
 * action数据发生了变化，store监控到了之后，更新数据，然后view也监听到了store的变化，更新视图。
 * 单项数据流动，意为：view如果发生了变化，不会倒流回action，
 * 这一点跟backbone是一致的，跟angularjs相比不一样。
 *
 * */

//启动,单项数据流动
TodoActions.addItem('newperson');