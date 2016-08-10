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
        backgroundColor:'#F2F2F2',
        flexDirection:'column'
    },
    slide:{
        height:150

    },
    icon_img:{
        height:80,
        width:80,
        resizeMode:Image.resizeMode.contain
    },
    myfont:{
        fontSize:35,
        color:'white',
        fontWeight:'bold'
    },
    mytext:{

        height:50
    },
    firstpart:{
        flex:1,
        height:200,
        marginTop:10,
        marginLeft:5,
        marginRight:5,
        borderWidth:1,
        borderRadius:5,
        borderColor:'white',
        flexDirection:'row'//元素横向排列
    },
    firstpart_color:{
        backgroundColor: '#FA6778'
            },
    secondpart:{
        flex:1,
        height:200,
        marginTop:10,
        marginLeft:5,
        marginRight:5,
        borderWidth:1,
        borderRadius:5,
        borderColor:'white',
        flexDirection:'row'//元素横向排列
    },
    secondpart_color:{
        backgroundColor: '#3D98FF'
        
    },
    thirdpart:{
        flex:1,
        height:200,
        marginTop:10,
        marginLeft:5,
        marginRight:5,
        borderWidth:1,
        borderRadius:5,
        borderColor:'white',
        flexDirection:'row'//元素横向排列
    },
    thirdpart_color:{
        backgroundColor: '#5EBE00'
        
    },
    fourthpart:{
        flex:1,
        height:200,
        marginTop:10,
        marginLeft:5,
        marginRight:5,
        borderWidth:1,
        borderRadius:5,
        borderColor:'white',
        flexDirection:'row'//元素横向排列
    },
    fourthpart_color:{
        backgroundColor: '#FC9720'
        
    },
    fivepart:{
        flex:1,
        height:100,
        marginTop:10,
        marginLeft:5,
        marginRight:5,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#ccc',
        flexDirection:'row'//元素横向排列

    },
    cont:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    borderBottomCont:{
        borderColor:'white',
        borderBottomWidth:2
    }

});

//轮播图
class Slider extends Component{
    render(){
        return (
            <Swiper height={150} showsButtons={false} autoplay={true}  showsPagination={false}>
                <Image style={[styles.slide]} source={{uri: sliderImgs[0]}}></Image>
                <Image style={[styles.slide]} source={{uri: sliderImgs[1]}}></Image>
                <Image style={[styles.slide]} source={{uri: sliderImgs[2]}}></Image>

            </Swiper>

        );
    }
}
//入口
class Index extends Component{
    goList(){
        this.props.navigator.push({name:'list'});

    }



    render(){
        return (
            <ScrollView>
                <View style={{height:60,backgroundColor:'#6495ED'}}>
                    <Text style={{textAlign:'center',marginTop:10,fontSize:30,color:'white'}}>首页</Text>
                </View>
                <Slider />
                <View style={styles.container}>
                    <View  style={[styles.firstpart,styles.firstpart_color]}>
                        <TouchableHighlight underlayColor="#FFFFFF" onPress={this.goList.bind(this)} style={{flex:1,flexDirection:'column',width:80,borderColor:'white',borderRightWidth:2}}>

                            <View>
                                <View style={styles.cont}>
                                    <Text style={[styles.myfont,styles.mytext]}>酒店</Text>
                                </View>
                                <View style={styles.cont}> 
                                    <Image style={styles.icon_img}  source={{uri:iconImgs[0]}}></Image>
                                </View>
                            </View> 
                        </TouchableHighlight>
                        <View style={{flex:1,flexDirection:'column',width:30,borderRightWidth:2,borderColor:'white'}}>
                            <View style={[styles.cont,styles.borderBottomCont]}>
                                <Text style={[styles.myfont,styles.mytext]}>海外</Text>
                            </View>
                            <View style={[styles.cont]}>
                                <Text style={[styles.myfont,styles.mytext]}>周边</Text>
                            </View>
                        </View>
                        <View style={{flex:1,flexDirection:'column',width:30,borderRightWidth:2,borderColor:'white'}}>
                            <View style={[styles.cont,styles.borderBottomCont]}>
                                <Text style={[styles.myfont,styles.mytext]}>团购.优惠</Text>
                            </View>
                            <View style={[styles.cont]}>
                                <Text style={[styles.myfont,styles.mytext]}>客栈.公寓</Text>
                            </View>
                        </View>

                    </View>





                    <View  style={[styles.secondpart,styles.secondpart_color]}>
                        <View style={{flex:1,flexDirection:'column',width:80,borderColor:'white',borderRightWidth:2}}>

                            <View style={styles.cont}>
                                <Text style={[styles.myfont,styles.mytext]}>机票</Text>
                            </View>
                            <View style={styles.cont}> 
                                <Image style={styles.icon_img}  source={{uri:iconImgs[1]}}></Image>
                            </View>
                        </View> 

                        <View style={{flex:1,flexDirection:'column',width:30,borderRightWidth:2,borderColor:'white'}}>
                            <View style={[styles.cont,styles.borderBottomCont]}>
                                <Text style={[styles.myfont,styles.mytext]}>火车票</Text>
                            </View>
                            <View style={[styles.cont]}>
                                <Text style={[styles.myfont,styles.mytext]}>汽车票</Text>
                            </View>
                        </View>
                        <View style={{flex:1,flexDirection:'column',width:30,borderRightWidth:2,borderColor:'white'}}>
                            <View style={[styles.cont,styles.borderBottomCont]}>
                                <Text style={[styles.myfont,styles.mytext]}>自驾</Text>
                            </View>
                            <View style={[styles.cont]}>
                                <Text style={[styles.myfont,styles.mytext]}>专车</Text>
                            </View>
                        </View>

                    </View>




                    <View  style={[styles.thirdpart,styles.thirdpart_color]}>
                        <View style={{flex:1,flexDirection:'column',width:80,borderColor:'white',borderRightWidth:2}}>

                            <View style={styles.cont}>
                                <Text style={[styles.myfont,styles.mytext]}>旅游</Text>
                            </View>
                            <View style={styles.cont}> 
                                <Image style={styles.icon_img}  source={{uri:iconImgs[2]}}></Image>
                            </View>
                        </View> 

                        <View style={{flex:1,flexDirection:'column',width:30,borderRightWidth:2,borderColor:'white'}}>
                            <View style={[styles.cont,styles.borderBottomCont]}>
                                <Text style={[styles.myfont,styles.mytext]}>门票</Text>
                            </View>
                            <View style={[styles.cont]}>
                                <Text style={[styles.myfont,styles.mytext]}>出境WIFI</Text>
                            </View>
                        </View>
                        <View style={{flex:1,flexDirection:'column',width:30,borderRightWidth:2,borderColor:'white'}}>
                            <View style={[styles.cont,styles.borderBottomCont]}>
                                <Text style={[styles.myfont,styles.mytext]}>游轮</Text>
                            </View>
                            <View style={[styles.cont]}>
                                <Text style={[styles.myfont,styles.mytext]}>签证</Text>
                            </View>
                        </View>

                    </View>





                    <View  style={[styles.fourthpart,styles.fourthpart_color]}>
                        <View style={{flex:1,flexDirection:'column',width:80,borderColor:'white',borderRightWidth:2}}>

                            <View style={styles.cont}>
                                <Text style={[styles.myfont,styles.mytext]}>攻略</Text>
                            </View>
                            <View style={styles.cont}> 
                                <Image style={styles.icon_img}  source={{uri:iconImgs[3]}}></Image>
                            </View>
                        </View> 

                        <View style={{flex:1,flexDirection:'column',width:30,borderRightWidth:2,borderColor:'white'}}>
                            <View style={[styles.cont,styles.borderBottomCont]}>
                                <Text style={[styles.myfont,styles.mytext]}>逛商场</Text>
                            </View>
                            <View style={[styles.cont]}>
                                <Text style={[styles.myfont,styles.mytext]}>买衣服</Text>
                            </View>
                        </View>
                        <View style={{flex:1,flexDirection:'column',width:30,borderRightWidth:2,borderColor:'white'}}>
                            <View style={[styles.cont,styles.borderBottomCont]}>
                                <Text style={[styles.myfont,styles.mytext]}>美食购物</Text>
                            </View>
                            <View style={[styles.cont]}>
                                <Text style={[styles.myfont,styles.mytext]}>更多</Text>
                            </View>
                        </View>

                    </View>




                    <View style={styles.fivepart}>
                        <View style={{flex:1,flexDirection:'row',backgroundColor:'white',borderColor:'#eee',borderRightWidth:2}}>
                            <View style={{flex:1,flexDirection:'column'}}>
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:40}}>特卖会</Text>
                                </View>
                                <View style={{alignItems:'center',justifyContent:'center'}}>    
                                    <Text style={{fontSize:20}}>随时抢购，超值预售</Text>
                                </View>

                            </View>
                            <View style={{alignItems:'center',justifyContent:'center',marginRight:20}}>
                                <Image style={{height:50,width:50,resizeMode:'contain'}}  source={{uri:iconImgs[0]}} />
                            </View>
                        </View>


                        <View style={{flex:1,flexDirection:'row',backgroundColor:'white'}}>    
                            <View style={{flex:1,flexDirection:'column'}}>
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:40}}>热门活动</Text>
                                </View>
                                <View style={{alignItems:'center',justifyContent:'center'}}>    
                                    <Text style={{fontSize:20}}>天天有利，参加有奖</Text>
                                </View>

                            </View>
                            <View style={{alignItems:'center',justifyContent:'center',marginRight:20}}>
                                <Image style={{height:50,width:50,resizeMode:'contain'}}  source={{uri:iconImgs[0]}} />
                            </View>
                        </View>



                    </View>



                </View>

            </ScrollView>

        );
    }
}

module.exports = Index;
