'use strict';
/*
 * 执行这一段代码，实际上做了三件事：

 创建了一个类 NodesList
 创建了一个对象 list1
 创建了一个对象 list2
 *那么在创建类的时候，输出：

 getDefaultProps

 在创建list1和 list2的时候都会输出：
 geyInitialState
 componentWillMount
 render
 componentDidMount


 于是执行这段代码，最终输出的就是：

 getDefaultProps
 geyInitialState
 componentWillMount
 render
 componentDidMount
 --------------------
 geyInitialState
 componentWillMount
 render
 componentDidMount

 此时已经存在一个类 NodesList 和 两个对象 list1 & list2
 然后我们执行 list1.setState({val: "ccc”})。那么输出如下：

 componentWillUpdate
 render
 componentDidUpdate

 可以发现页面上的 hello 已经变成了 ccc,
 也就是说，我们在外部更新状态值，就是调用update更新，而不是创建。
 * */
import React from 'react';
import ReactDOM from 'react-dom';

var NotesList = React.createClass({
    getDefaultProps: function () {
        console.log("getDefaultProps");
        return {};
    },
    getInitialState: function () {
        console.log("geyInitialState");
        return {
            val:'hello'

        };
    },
    componentWillMount: function () {
        console.log("componentWillMount");
    },
    render: function () {
        console.log("render");
        return (
            <div>hello
                <strong>{this.props.name}</strong>
                <strong>{this.state.val}</strong>
            </div>
        );
    },
    componentDidMount: function () {
        console.log("componentDidMount");
    },
    componentWillRecieveProps: function() {
        console.log("componentWillRecieveProps");
    },
    componentWillUpdate: function() {
        console.log("componentWillUpdate");
    },
    componentDidUpdate: function() {
        console.log("componentDidUpdate");
    }
});
//创建组件
var list1 = ReactDOM.render(
    <NotesList name='aaa' />,
    document.getElementById("div1")
);

var list2 = ReactDOM.render(
    <NotesList name='bbb' />,
    document.getElementById("div2")
);
//更新组件
list1.setState({val: "ccc"});
