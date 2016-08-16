/*

*/
import React,{ Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    } from 'react-native';

import Picker from 'react-native-modal-date-picker';
import moment from 'moment';

class app extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:moment(new Date()).format('YYYY-MM-DD')
        };
    }
    onSelect(value){
        this.setState({value:value});
    }

    render(){
        return (

            <View style={{marginTop:40}}>
                <Text>{this.state.value}</Text>
                <Picker selectData={this.state.value}
                        onSelect={this.onSelect.bind(this)}
                />

            </View>



            );
    }
}


AppRegistry.registerComponent('app', () => app);