import React, { Component } from 'react';
import {
    Text,
    View
    }  from 'react-native';
import {styles} from './styles';

class List extends Component{
    render(){
        return (
            <View style={styles.list_item}>
                <Text style={styles.list_item_font}>{this.props.title}</Text>
            </View>
        );
    }
}


module.exports = List;