'use strict';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

var InputState = React.createClass({
    getInitialState:function(){
        //初始状态
        return {
            enable:false
        };
    },
    handleClick:function(){
        this.setState({enable:!this.state.enable});
    },
    render:function(){
        return (
            <p>
                <input type="text" disabled={this.state.enable} />
                <button onClick={this.handleClick}>change state</button>


            </p>
        );
    }
});


ReactDOM.render(
   <InputState />,
    document.getElementById('test')
);
