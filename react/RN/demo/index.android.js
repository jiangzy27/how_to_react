/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    View
    }  from 'react-native';
import {styles} from './styles';
import Header from './header';
import List from './list';
import News from './news';
class app extends Component {
  render() {
    return (
        <View style={styles.flex}>
            <Header></Header>
            <List title="新闻1"></List>
            <List title="新闻2"></List>
            <List title="新闻3"></List>

            <News news={[
                '今日要闻1',
                '今日要闻2',
                '今日要闻3'
            ]}>
            </News>
        </View>
    );
  }
};

AppRegistry.registerComponent('app', () => app);
