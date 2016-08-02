'use strict';
import React, { Component } from 'react';
import {
    View,
    Text
    }  from 'react-native';

class ListView extends Component {
    gotoDetail(){
        this.props.navigator.push({name:'detail',params: {id:100}});

    }
    render(){
        return (
            <View>
                <Text onPress = {this.gotoDetail}>
                    this is the list view.
                </Text>
            </View>
        );
    }
}

module.exports = ListView;