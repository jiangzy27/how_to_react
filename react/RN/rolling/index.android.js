'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    WebView,
    StyleSheet
    }  from 'react-native';
//npm install react-native-swiper

import Swiper from 'react-native-swiper';

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

class app extends Component{
  render(){
    return (
        <Swiper style={styles.wrapper} showButtons={true}>
          <View style={styles.slide1}>
              <Text>slide1</Text>

          </View>
          <View style={styles.slide2}>
              <Text>slide2</Text>

          </View>
          <View style={styles.slide3}>
              <Text>slide3</Text>

          </View>

        </Swiper>

      );
  }
}


AppRegistry.registerComponent('app', () => app);
