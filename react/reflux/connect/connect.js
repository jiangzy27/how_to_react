//引入包
import React from 'react';
import ReactDOM from 'react-dom';
import Reflux from 'reflux';
import $ from 'jquery';
//创建多个actions的方法
var  TodoActions = Reflux.createActions(['addItem','deleteItem']);
//创建store，监控多个action方法
var TodoStore = Reflux.createStore({
    items:["jack","tom"],//数据
    init:function(){
        this.listenToMany(TodoActions);//监听所有方法，方法是驼峰命名
        //this.listenTo(TodoActions.addItem,'addItem');//这个类似backbone的写法了。
        //this.listenTo(TodoActions.deleteItem,'deleteItem');

    },
    onAddItem:function(model){
        console.log('*********');
        this.items.push(model);
        this.trigger(this.items);//更新items
        console.log(this.items);
    },
    onDeleteItem:function(model){
        console.log('@@@@@@@@@@');
        var index = this.items.indexOf(model);
        if (index > -1) {
            this.items.splice(index, 1);
            this.trigger(this.items);//更新items
        }
        console.log(this.items);

    }
});
//创造一个view
var TodoComponent = React.createClass({

    //监听store，省略了onStatusChange函数，
    //store变化后，会直接体现到list这个state模型上
    mixins:[Reflux.connect(TodoStore,'list')],
    getInitialState:function(){
        return {list:[]};
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
//启动,单项数据流动
TodoActions.addItem('newperson');
setTimeout(function(){
    TodoActions.deleteItem('tom');
},2000);
