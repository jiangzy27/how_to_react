import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ListView,
} from 'react-native';

import {PullList} from 'react-native-pull';
var url  =  'http://localhost:9998/query';
class List extends Component {

    constructor(props) {
        super(props);
        this.page = 1;
        this.state = {
            list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.dataSource),
        };
        this.renderHeader = this.renderHeader.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.loadMore = this.loadMore.bind(this);
        //this.loadMore();
    }

    onPullRelease(resolve) {
        //do something
        setTimeout(() => {
            resolve();
        }, 2000);
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
          <View style={{flex:1,flexDirection:'row',height: 200, borderColor:'#ccc',borderBottomWidth:1}}>
              <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
                  <Image source={item.img} style={{width:80,height:80,resizeMode:Image.resizeMode.contain}} />
              </View>
              <View style={{flex:1,flexDirection:'column',alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{fontSize:30}}>{item.title}</Text>
                  <Text style={{fontSize:20}}>{item.desc}</Text>
              </View>

          </View>
      );
    }

    renderFooter() {

      if(this.state.nomore) {
          return (
                <View style={{flex:1,flexDirection:'column',backgroundColor:'white'}}>
                    <View style={{height:50,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:30}}>没有更多了...</Text>
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
    componentDidMount(){
        loadMore();
    }
    loadMore() {
        url = url+"?page="+this.page;
          fetch(url)
          .then((response)=>response.json())
          .then((resData)=>{
                  if(resData){

                      this.setState({
                          //类实例下面的方法调用，将ajax返回的数据填充到列表
                          dataSource:this.state.list.cloneWithRows(resData)

                      });
                      this.page++;
                  }else{
                      this.state.nomore = true;
                  }

               })
          .done();

    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ccc'
  }
});

module.exports = List;