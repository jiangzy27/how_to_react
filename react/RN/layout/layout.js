'use strict';
import React,{ Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableHighlight
    } from 'react-native';

import Swiper from 'react-native-swiper';

var sliderImgs = [
    'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
    'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
    'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'

];


var iconImgs = [
    'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png',
    'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png',
    'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png',
    'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/gonglue.png'

];

var activityImgs = [
    'http://webresource.c-ctrip.com/ResCRMOnline/R5/html5/images/zzz_pic_salead01.png',
    'http://images3.c-ctrip.com/rk/apph5/B1/201505/app_home_ad06_310_120.jpg'
];

var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F2F2F2'
    },
    wrapper:{
        height:80
    },
    slide:{
        height:80

    },
    icon_img:{
        height:40,
        width:40
    },
    firstpart:{
        flex:1,
        height:84,
        marginLeft:5,
        marginRight:5,
        borderWidth:1,
        borderRadius:5,
        flexDirection:'row'//元素横向排列
    },
    firstpart_color:{
        backgroundColor: '#FA6778',
        borderColor:'#FA6778'
    }


});

//轮播图
class Slider extends Component{
    render(){
        return (
            <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}  showsPagination={false}>
                <Image style={[styles.slide]} source={{uri: sliderImgs[0]}}></Image>
                <Image style={[styles.slide]} source={{uri: sliderImgs[1]}}></Image>
                <Image style={[styles.slide]} source={{uri: sliderImgs[2]}}></Image>

            </Swiper>

        );
    }
}

class Index extends Component{
    render(){
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Slider />
                    <View style={[styles.firstpart,styles.firstpart_color]}>

                        <View>
                            <Text>酒店</Text>
                            <Image style={styles.icon_img}  source={{uri:iconImgs[0]}}></Image>
                        </View>

                        <View>
                            <Text>海外</Text>
                        </View>

                        <View>
                            <Text>周边</Text>
                        </View>

                        <View>
                            <Text>团购.特惠</Text>
                        </View>
                        <View>
                            <Text>客栈.公寓</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>

        );
    }
}