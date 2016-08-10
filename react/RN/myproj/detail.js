'use strict';
import React, { Component } from 'react';
import {
    View,
    Text,
    WebView,
    StyleSheet
    }  from 'react-native';
//var url = "http://www.baidu.com";
const HTMLSOURCE = `
<h1>这是详情页</h1>
<hr />
<p>详情页信息详情页信息详情页信息详情页信息详情页信息</p>
`;


class Detail extends Component {
    goBack(){

        this.props.navigator.pop();

    }

    render(){
    	return (
        <View style={{flex:1,flexDirection:'column'}}>

                <View style={{flexDirection:'row',backgroundColor:'#6495ED'}}>
                  <View style={{flex:2,height:60}}>
                    <Text onPress={this.goBack.bind(this)} style={{textAlign:'center',marginTop:10,fontSize:30,color:'white'}}>返回</Text>
                  </View>

                  <View style={{flex:10,height:60}}>
                    <Text style={{marginLeft:200,marginTop:10,fontSize:30,color:'white'}}>详情页</Text>
                  </View>
                </View>      
            <WebView
                style={{backgroundColor:'white'}}
                source={{html:HTMLSOURCE}}
                startInLoadingState={true}
                domStorageEnabled={true}
                javaScriptEnabled={true}
            >

            </WebView>
        </View>

    		);

    }
}

module.exports = Detail;
