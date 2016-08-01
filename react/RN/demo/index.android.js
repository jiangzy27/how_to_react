/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;
import Header from './header';
import List from './list';
import News from './news'
var app = React.createClass({
  render: function() {
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
});


AppRegistry.registerComponent('AwesomeProject', () => app);
