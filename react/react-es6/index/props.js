'use strict';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//导出默认类
export default class MyTitle extends Component {
    constructor(props){
        super(props);

    }

    show(){
        console.log(this.props.title);
        console.log(this.props.contents);
        console.log(this.props.name);
    }

    render(){
        return <button onClick={this.show.bind(this)}>click me</button>
    }
};

