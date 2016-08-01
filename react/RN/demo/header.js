'use strict';
/*
react的width没有单位，实际上单位默认的是pt。
如果我们的图片是100*100，那么直接设置为100,100是会模糊的，实际上应该是100*pixelRatio的大小。
* PixelRatio:设备上物理像素和设备独立像素(device-independent pixels (dips))的比例。
* 公式表示就是：window.devicePixelRatio = 物理像素 / dips
* 比如一张图片的宽度是200*100,
* 为了避免在手机上模糊，则应该如下实现：
*
*var image = getImage({
 width: 200 * PixelRatio.get(),
 height: 100 * PixelRatio.get()
 });
 <Image source={image} style={{width: 200, height: 100}} />
* */
 import React, { Component } from 'react';
import {
    Text,
    View
    }  from 'react-native';
import {styles} from './styles';

class Header extends Component{
    render(){
        return (
            <View style={styles.flex_header}>
                <Text style={styles.font}>
                    <Text style={styles.font_1}>百度</Text>
                    <Text style={styles.font_2}>新闻</Text>

                </Text>

            </View>
        );
    }
}




module.exports = Header;//输出模块
