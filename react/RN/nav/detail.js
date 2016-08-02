'use strict';
import React, { Component } from 'react';
import {
    View,
    Text
    }  from 'react-native';

class DetailView extends Component {
    render(){
        return (
            <View>
                <Text>
                    this is the {this.props.id} detail view.
                </Text>

            </View>

        );
    }
}

module.exports = DetailView;