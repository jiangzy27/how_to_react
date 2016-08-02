
'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator
    }  from 'react-native';
import IndexView from './index';
import ListView from './list';
import DetailView from './detail';

class app extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{name:'index'}}
            configureScene={this.configureScene}
            renderScene={this.renderScene}
        />
    );
  }
//配置转场动画
    configureScene(route){
        return  Navigator.SceneConfigs.FadeAndroid;
    }
//渲染路由
    renderScene(router,navigator){
        var Component = null;this._navigator = navigator;
        switch(router.name){
            case 'index':
                Component = IndexView;
                break;
            case 'list':
                Component = ListView;
                break;
            case 'detail':
                Component = DetailView;
        }
        //无论跳到那个组件，参数都作为props传递。
        //navigator是个全局变量
        return <Component {...route.params}  navigator={navigator} />

    }
    componentDidMount(){
        var navigator = this._navigator;
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
