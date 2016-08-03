'use strict';
import React, { Component } from 'react';
import { TextInput }  from 'react-native';

class SimpleTextInput extends Component {
    constructor(props){
        super(props);
        //初始化state
        this.state = {text:'default text'};
    }
    render() {
        //箭头函数可以有效的避免this问题，或者用bind(this)，二者选其一。
        return (
            <TextInput
                style={{height:40,borderColor:'gray',borderWidth:1}}
                onChangeText = {(text)=>this.setState({text})}
                value={this.state.text}
            />


        );
    }
}

module.exports = SimpleTextInput;