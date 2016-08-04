'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
    BackAndroid,
    Text,
    Dimensions
    }  from 'react-native';
import RefreshInfiniteListView from 'react-native-refresh-infinite-listview';
/*下拉刷新上提加载组件
* 安装：
* npm install react-native-refresh-infinite-listview --save
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
var url  =  'http://localhost:9998/query';
var data = [];
class app extends Component {
    constructor(props){
        super(props);
        this.page = 1;
        this.state = {
            dataSource:new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1 != row2
            })


        };
        getData();

    }
    //请求数据
    getData(){
        url = url+"?page="+this.page;
        fetch(url)
            .then((response)=>response.json())
            .then((resData)=>{
                data.push(resData);
                this.setState({
                    //类实例下面的方法调用，将ajax返回的数据填充到列表
                    dataSource:this.state.dataSource.cloneWithRows(data)

                });
            })
            .done();

    }
    onRefresh() {
        this.page = 1;
        this.getData();

    }
    onInfinite() {
        this.page = this.page+1;
        this.getData();

    }

    renderRow(rowData, sectionID, rowID) {
        return (
            <View style={styles.row}>
                <Text >
                    {"rowData:"+rowData+"===rowId:"+rowID}
                </Text>
            </View>
        )
    }

    render() {
        return (

                <RefreshInfiniteListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}

                    onRefresh = {this.onRefresh.bind(this)}
                    onInfinite = {this.onInfinite.bind(this)}
                />


        )
    }

}
AppRegistry.registerComponent('app', () => app);
