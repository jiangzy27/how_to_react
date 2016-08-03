'use strict';
import React { Component } from 'react';
import { AppRegistry,View} from 'react-native';

import {DisplayImage} from './image';


class app extends Component {
    render(){
            <DisplayImage />
    }
}

AppRegistry.registerComponent('app', () => app);