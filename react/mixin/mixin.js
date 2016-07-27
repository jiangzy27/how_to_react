import React from 'react';
import ReactDOM from 'react-dom';

//声明一个mixin,注意这是一个对象！
var helloMixin = {
    componentDidMount: function () {
        console.log('from mixin');
    },
    show:function(){
        alert('haha');
    }
};

var MyTitle = React.createClass({
    mixins:[helloMixin],//打入
    //如果设置相同的 Prop 和 State则会报错。
    //如果mixin有周期函数，则先加载，如果多个mixin都有周期函数，按照从左到右的顺序加载。
    componentDidMount: function () {
        console.log('from MyTitle');
    },
    render:function(){
        return <button onClick={this.show}>click me</button>
    }
});

ReactDOM.render(
    <MyTitle />,
    document.getElementById('app')

);