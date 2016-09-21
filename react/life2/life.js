'use strict';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class InputState extends Component{
    constructor(props){
        super(props);
        this.state = {

            enable:false
        };

    }

    handleClick(){
        this.setState({enable:!this.state.enable});
    }

    componentWillUpdate(){
        console.log("更新前");
    }

    componentDidUpdate(){
        console.log("更新后");
    }

    render(){
        console.log("渲染中.....");
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
    document.getElementById('app')
);

