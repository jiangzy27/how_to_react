'use strict';
/*
* 说明：state就是状态的意思。
* 1.我们知道，使用props可以接收父类传递下来的信息，但是有些情况下，比如有些状态，是需要不断改变的，
* 2.也就是说，props一般都是定义后不会改变的内容传递，而state则是随着用户互动而改变的。
* 3.我们使用getInitialState方法返回一个对象的方式，定义初始的state。
* 4.通过setState方法，改变state的值。
* 5.如果是用props则无法实现，因为我们一旦获取了值，就无法再改变了。
* 6.分析一个视图，哪些是state，哪些是props很重要。
* */
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class InputState extends Component{
    //getInitialState:function(){
    //    //初始状态
    //    return {
    //        enable:false
    //    };
    //},
    constructor(props){
        super(props);//这句不能省，否则会报错

        this.state = {

            enable:false
        };

    }
    handleClick(){
        this.setState({enable:!this.state.enable});
    }
    render(){
        return (
            <p>
                <input type="text" disabled={this.state.enable} />
                <button onClick={this.handleClick.bind(this)}>change state</button>


            </p>
        );
    }
}


ReactDOM.render(
   <InputState />,
    document.getElementById('test')
);
