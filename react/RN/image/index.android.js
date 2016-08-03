'use strict';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import DisplayImage from './image/image.js';


class app extends Component {

    render(){
        return (
            
                <DisplayImage /> 

            );
            
    }
}

AppRegistry.registerComponent('app', () => app);