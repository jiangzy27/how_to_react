
'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
    BackAndroid,
    Text
    }  from 'react-native';
import IndexView from './nav/index';
import ListView from './nav/list';
import DetailView from './nav/detail';
/*
 getCurrentRoutes() - 获取当前栈里的路由，也就是push进来，没有pop掉的那些。
 jumpBack() - 跳回之前的路由，当然前提是保留现在的，还可以再跳回来，会给你保留原样。
 jumpForward() - 上一个方法不是调到之前的路由了么，用这个跳回来就好了。
 jumpTo(route) - 跳转到已有的场景并且不卸载。
 push(route) - 跳转到新的场景，并且将场景入栈，你可以稍后跳转过去
 pop() - 跳转回去并且卸载掉当前场景
 replace(route) - 用一个新的路由替换掉当前场景
 replaceAtIndex(route, index) - 替换掉指定序列的路由场景
 replacePrevious(route) - 替换掉之前的场景
 immediatelyResetRouteStack(routeStack) - 用新的路由数组来重置路由栈
 popToRoute(route) - pop到路由指定的场景，其他的场景将会卸载。
 popToTop() - pop到栈中的第一个场景，卸载掉所有的其他场景。
*
* */
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
                Component = IndexView;
                break;
            case 'list':
                Component = ListView;
                break;
            case 'detail':
                Component = DetailView;
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
