//引入包
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';
import $ from 'jquery';
//创建多个actions的方法
var  TodoActions = Reflux.createActions(['addItem','deleteItem']);
//创建store，监控多个action方法
var TodoStore = Reflux.createStore({
    items:["jack","tom"],//数据
    init:function(){
        this.listenTo(TodoActions.addItem,'addItem');//这个类似backbone的写法了。
        this.listenTo(TodoActions.deleteItem,'deleteItem');

    },
    addItem:function(model){
        console.log('*********');
        this.items.push(model);
        this.trigger(this.items);//更新items
        console.log(this.items);
    },
    deleteItem:function(model){
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
class TodoComponent extends Component{

    constructor(props){
        super(props);
        this.state = {list:[]};

    }
    componentDidMount(){
        this.listenTo(TodoStore,this._onChange);
    }
    //监听到store发生变化后触发
    _onChange(){
        this.setState({list:TodoStore.items});
    }
    render(){
    return (
        <div>
                {this.state.list.map(function(item,key){
                    return <p key={key}>{item}</p>
                })}

        </div>

        );
    }
}
/*
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
*/
ReactMixin.onClass(TodoComponent, Reflux.ListenerMixin);

ReactDOM.render(<TodoComponent />,document.getElementById('app'));
//启动,单项数据流动
TodoActions.addItem('newperson');
setTimeout(function(){
    TodoActions.deleteItem('jack');
},2000);
