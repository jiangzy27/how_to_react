'use strict';
import React, { Component } from 'react';
import { Image,View } from 'react-native';

class DisplayImage extends Component {
    render(){
        return (
            <View style={{width:70}}>
                <Image source = {require('./ic_launcher.png')} />
                <Image style={{width:180,height:180}} source = {{uri:'http://pic.pptbz.com/pptpic/201204/2012041411433867_S.jpg'}} />
            </View>
        );
    }
}

module.exports = DisplayImage;