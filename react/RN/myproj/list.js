import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ActivityIndicator,
  ListView,
  TouchableOpacity,
} from 'react-native';

import {PullList} from 'react-native-pull';
var arr = [];
class List extends Component {

    constructor(props) {
        super(props);
        this.page = 1;
        this.state = {
            list: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
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
                <View style={{flexDirection:'row',backgroundColor:'#6495ED'}}>
                  <View style={{flex:2,height:60}}>
                    <Text onPress={this.goBack.bind(this)} style={{textAlign:'center',marginTop:10,fontSize:30,color:'white'}}>返回</Text>
                  </View>

                  <View style={{flex:10,height:60}}>
                    <Text style={{marginLeft:200,marginTop:10,fontSize:30,color:'white'}}>列表页</Text>
                  </View>
                </View>      

            );
    }
    goDetail(){
        this.props.navigator.push({name:'detail'});


    }
    goBack(){

        this.props.navigator.pop();

    }
    renderRow(item, sectionID, rowID, highlightRow) {
      //  alert(item);
      return (
          <TouchableOpacity onPress={this.goDetail.bind(this)} style={{flex:1,flexDirection:'row',height: 200, borderColor:'#ddd',borderBottomWidth:1}}>
              <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
                  <Image source={{uri:item.img}} style={{width:150,height:150,borderWidth:2,borderColor:'#ccc',resizeMode:Image.resizeMode.contain}} />
              </View>
              <View style={{flex:1,flexDirection:'column',marginRight:15,alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{fontSize:30,color:'darkred'}}>{item.title}</Text>
                  <Text style={{fontSize:20,color:'black'}}>{item.desc}</Text>
              </View>

          </TouchableOpacity>
      );
    }

    renderFooter() {
       // alert('footer');
      if(this.state.nomore) {
        
          return (
               
                    <View style={{flex:1,height:50,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:30}}>没有更多了...</Text>
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
        this.loadMore();
    }
    loadMore() {
        var url  =  'http://192.168.2.1:9998/query?page=';

        url = url+this.page;
        //alert(url);
          fetch(url)
          .then((response)=>response.json())
          .then((resData)=>{
                   // alert(resData.length);
                  if(resData && resData.length>0){
                    //alert(resData.length);
                    //alert('sss');
                    for(let i=0;i<resData.length;i++){
                        arr.push(resData[i]);
                    }
                    
                      this.setState({
                          //类实例下面的方法调用，将ajax返回的数据填充到列表
                          list:this.state.list.cloneWithRows(arr)

                      });
                      this.page++;
                  }else{
                    //alert('over');
                      this.state.nomore = true;
                      return null;
                      //this.renderFooter();
                  }

               })
          .done();

    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  }
});


module.exports = List;