/*

*/
import React,{ Component } from 'react';
import {
    AppRegistry,
    ToastAndroid,
    Text,
    TouchableHighlight,
    View,
    StyleSheet
    } from 'react-native';

class app extends Component{

    render(){
        return (
            <View style={{marginTop:22,backgroundColor:'green'}}>


                <TouchableHighlight  onPress={()=>{
                    
                    ToastAndroid.show('This is a toast with long duration', ToastAndroid.LONG);
                }}
                style={{height:100}}
                >
                    <Text>显示toast</Text>
                </TouchableHighlight>
            </View>

            );
    }


}


AppRegistry.registerComponent('app', () => app);