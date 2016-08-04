'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    WebView,
    StyleSheet
    }  from 'react-native';
var url = "http://www.baidu.com";
class app extends Component {
    render(){
    	return (
        <View style={{flex:1}}>
            <Text style={{hieght:40}}>网页展示</Text>
            <WebView
                style={{backgroundColor:'red'}}
                url={url}
                startInLoadingState={true}
                domStorageEnabled={true}
                javaScriptEnabled={true}
            >

            </WebView>
        </View>

    		);

    }
}

AppRegistry.registerComponent('app', () => app);
