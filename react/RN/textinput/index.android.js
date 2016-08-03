'use strict';
import React, { Component } from 'react';
import { AppRegistry,View }  from 'react-native';
import { SimpleTextInput } from './simple';
class app extends Component {
    render(){
        <View>
            <SimpleTextInput />
        </View>

    }
}

AppRegistry.registerComponent('app', () => app);
