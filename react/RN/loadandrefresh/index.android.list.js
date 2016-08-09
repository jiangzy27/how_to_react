import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ListView,
} from 'react-native';

import {PullList} from 'react-native-pull';
var count = 0;
class app extends Component {

    constructor(props) {
        super(props);
        this.dataSource = [{
            id: 0,
            title: '第一屏数据',
        }];
        this.state = {
            list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.dataSource),
        };
        this.renderHeader = this.renderHeader.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.loadMore = this.loadMore.bind(this);
        // this.loadMore();
    }

    onPullRelease(resolve) {
        //do something
        setTimeout(() => {
            resolve();
        }, 3000);
    }

    topIndicatorRender(pulling, pullok, pullrelease) {
        return <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60}}>
          <ActivityIndicator size="small" color="gray" />
          {pulling ? <Text>正在刷新...</Text> : null}
          {pullok ? <Text>正在刷新....</Text> : null}
          {pullrelease ? <Text>正在完成...</Text> : null}
        </View>;
    }

    render() {
        return (
          <View style={styles.container}>
              <PullList
                  style={{}}
                  onPullRelease={this.onPullRelease} topIndicatorRender={this.topIndicatorRender} topIndicatorHeight={60}
                  renderHeader={this.renderHeader}
                  dataSource={this.state.list}
                  pageSize={10}
                  initialListSize={10}
                  renderRow={this.renderRow}
                  onEndReached={this.loadMore}
                  onEndReachedThreshold={60}
                  renderFooter={this.renderFooter}
                  />
          </View>
        );
    }

    renderHeader() {
      return (
          <View style={{height: 80, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold',fontSize:30}}>列表页</Text>
          </View>
      );
    }

    renderRow(item, sectionID, rowID, highlightRow) {
      return (
          <View style={{height: 200, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize:30}}>{item.title}</Text>
          </View>
      );
    }

    renderFooter() {
      //  alert('foot');
      if(this.state.nomore) {
          return (
                <View style={{flex:1,flexDirection:'column',backgroundColor:'white'}}>
                    <View style={{height:50,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:30}}>没有更多了</Text>
                    </View>
                </View>    
            );
      }
      return (
          <View style={{height: 100}}>
              <ActivityIndicator />
          </View>
      );
    }

    loadMore() {
        count++;
       // alert('loading');
        // this.dataSource.push({
        //     id: 0,
        //     title: `begin to create data ...`,
        // });
        if(count > 3){
            this.state.nomore = true;
            
        }else{
        for(var i = 0; i < 10; i++) {
            this.dataSource.push({
                id: i + 1,
                title: `this is ${i*count}`,
            })
        }
        // this.dataSource.push({
        //     id: 6,
        //     title: `finish create data ...`,
        // });
        setTimeout(() => {
            this.setState({
                list: this.state.list.cloneWithRows(this.dataSource)
            });
        }, 1000);

        }
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ccc',
  },
});
AppRegistry.registerComponent('app', () => app);