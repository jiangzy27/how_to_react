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