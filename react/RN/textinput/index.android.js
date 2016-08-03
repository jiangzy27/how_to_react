'use strict';
import React, { Component } from 'react';
import { AppRegistry,View }  from 'react-native';
import SimpleTextInput  from './textinput/simple';
class app extends Component {
    render(){
    	return (
        <View>
            <SimpleTextInput />
        </View>

    		);

    }
}

AppRegistry.registerComponent('app', () => app);
