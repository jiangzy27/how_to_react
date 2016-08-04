'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
    BackAndroid,
    Text
    }  from 'react-native';
import RefreshInfiniteListView from '@remobile/react-native-refresh-infinite-listview';
/*下拉刷新上提加载组件
* 安装：
* npm install @remobile/react-native-refresh-infinite-listview --save
*
* */
//样式表
var styles = StyleSheet.create({
    row: {
        height:60,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    list: {
        alignSelf:'stretch'
    },
    separator: {
        height: 1,
        backgroundColor: '#CCC'
    }
});

class app extends Component {
    constructor(props){
        super(props);
        this.data = {index: 0, maxIndex:20, list:[]};
        this.state = {
            dataSource:new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1 != row2
            })

        };

        this.getData(true);
    }
    getData(init) {
        var total = 5;
        if (init) {
            this.data.index = 0;
            this.data.list = [];
            total = Math.floor(Math.random()*5);
        }
        for (var i=0; i<total; i++) {
            this.data.list[this.data.index] = "Row" + (this.data.index+1);
            this.data.index++;
        }
    }
    onRefresh() {
        this.getData(true);

        this.timer = setTimeout(()=>{
            this.list.hideHeader();
            this.setState({dataSource: ds.cloneWithRows(this.data.list)});
        }, 1000);
    }
    onInfinite() {
        this.getData();
        this.timer_two = setTimeout(()=>{
            this.list.hideFooter();
            this.setState({dataSource: ds.cloneWithRows(this.data.list)});
        }, 1000);
    }
    loadedAllData() {
        return this.data.index >= this.data.maxIndex||this.data.index===0;
    }
    renderRow(text) {
        return (
            <View style={styles.row}>
                <Text >
                    {text}
                </Text>
            </View>
        )
    }
    renderSeparator(sectionID, rowID) {
        return (
            <View style={styles.separator} key={sectionID+rowID}/>
        );
    }
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{height:20}} />
                <RefreshInfiniteListView
                    ref = {(list) => {this.list= list}}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    renderSeparator={this.renderSeparator.bind(this)}
                    loadedAllData={this.loadedAllData.bind(this)}
                    initialListSize={30}
                    scrollEventThrottle={10}
                    style={{backgroundColor:'transparent'/*,top:100, left:10, width:200, height:300, position:'absolute'*/}}
                    onRefresh = {this.onRefresh.bind(this)}
                    onInfinite = {this.onInfinite.bind(this)}
                >
                </RefreshInfiniteListView>
            </View>
        )
    }
    //销毁定时器
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
        this.timer_two && clearTimeout(this.timer_two);
    }
}
AppRegistry.registerComponent('app', () => app);
