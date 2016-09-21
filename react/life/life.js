'use strict';

import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class Life extends Component {

    componentWillMount() {
        console.log("渲染前");
        this.timer = setInterval(function(){
            console.log('不断打印中.....');
        },500);
    }

    render() {
        console.log("渲染中.....");
        return (
            <div>
                我出生了！
            </div>
        );
    }

    componentDidMount() {
        console.log("渲染后");
    }
     componentWillUnmount(){
         console.log("销毁啦！");
         clearInterval(this.timer);
     }

}
//创建组件
ReactDOM.render(
    <Life />,
    document.getElementById("app")
);
//2s后销毁
setTimeout(function(){
    ReactDOM.unmountComponentAtNode(document.getElementById("app"));
},2000);
