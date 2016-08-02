'use strict';
import React, { Component } from 'react';
import {
    View,
    Text
    }  from 'react-native';

class IndexView extends Component {
    gotoList(){
        this.props.navigator.push({name:'list'});
    }
    render(){
        return (
            <View>
                <Text onPress={this.gotoList.bind(this)}>
                    this is  the index view.

                </Text>
            </View>
        );
    }
}


module.exports = IndexView;