import React,{ Component } from 'react';
import {
    AppRegistry,
    Navigator,
    BackAndroid,
    Image,
    StyleSheet,
    Text,
    View,
    ListView
    } from 'react-native';


import  Index from './myproj/index';
import  List  from './myproj/list';
import Detail from './myproj/detail';
class app extends Component {

    //配置转场动画
    _configureScene(route){
        return  Navigator.SceneConfigs.FadeAndroid;
    }
//渲染路由
    _renderScene(router,navigator){
        var Component = null;
        //alert(navigator);
        this.nav = navigator;

        switch(router.name){
            case 'index':
                Component = Index;
                break;
            case 'list':
                Component = List;
                break;
            case 'detail':
                Component = Detail;
                break;
        }
        //无论跳到那个组件，参数都作为props传递。
        //navigator是个全局变量
        return <Component {...router.params}  navigator={navigator} />

    }

  render() {
    //一定注意这里面的bind(this),不写就报错!!
    return (
        <Navigator
            initialRoute={{name:'index'}}
            configureScene={this._configureScene.bind(this)}
            renderScene={this._renderScene.bind(this)} />
        
    );
  }
    componentDidMount(){
        var navigator = this.nav;
        BackAndroid.addEventListener('hardwareBackPress',function(){
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                navigator.pop();
                return true;
            }

            return false;
        });
    }
    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress');
    }
}

AppRegistry.registerComponent('app', () => app);