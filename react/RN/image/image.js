'use strict';
import React, { Component } from 'react';
import { Image } from 'react-native';

class DisplayImage extends Component {
    render(){
        return (
            <View>
                <Image source = {require('./img/logo.png')} />
                <Image source = {{uri:'http://facebook.github.io/react/img/logo_og.png'}} />
            </View>
        );
    }
}

module.exports = DisplayImage;