/*

*/
import React,{ Component } from 'react';
import {
    AppRegistry,
    Navigator,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Image
    } from 'react-native';


import TabNavigator from 'react-native-tab-navigator';
const TabNavigatorItem = TabNavigator.Item;
const TAB_NORMAL_1 = require("./tabbar/img/cart_normal.png");
const TAB_NORMAL_2 = require("./tabbar/img/category_normal.png");
const TAB_NORMAL_3 = require("./tabbar/img/faxian_normal.png");
const TAB_NORMAL_4 = require("./tabbar/img/home_normal.png");
const TAB_NORMAL_5 = require("./tabbar/img/personal_normal.png");

const TAB_PRESS_1 = require("./tabbar/img/cart_focus.png");
const TAB_PRESS_2 = require("./tabbar/img/category_focus.png");
const TAB_PRESS_3 = require("./tabbar/img/faxian_focus.png");
const TAB_PRESS_4 = require("./tabbar/img/home_focus.png");
const TAB_PRESS_5 = require("./tabbar/img/personal_focus.png");

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5FCFF'
    },
    tab:{
        height:52,
        alignItems:'center',
        backgroundColor:'#f4f5f6'
    }

}); 
class app extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedTab:'Cart'
        };
    }
    renderTabView(title,tabName,tabContent,childView){

        var tabNormal;
        var tabPress;
        switch(tabName){
            case 'Cart':
                tabNormal = TAB_NORMAL_1;
                tabPress = TAB_PRESS_1;
                break;

            case 'Category':
                tabNormal = TAB_NORMAL_2;
                tabPress = TAB_PRESS_2;
                break;

            case 'Faxian':
                tabNormal = TAB_NORMAL_3;
                tabPress = TAB_PRESS_3;
                break;

            case 'Home':
                tabNormal = TAB_NORMAL_4;
                tabPress = TAB_PRESS_4;
                break;

            case 'Personal':
                tabNormal = TAB_NORMAL_5;
                tabPress = TAB_PRESS_5;
                break;




        }
        return (
                <TabNavigatorItem
                                    title={title}
                                    renderIcon={()=><Image style={styles.tabIcon} source={tabNormal} />}
                                    renderSelectedIcon={()=><Image style={styles.tabIcon} source={tabPress} />}
                                    selected={this.state.selectedTab==tabName}
                                    selectedTitleStyle={{color:'#f85959'}}
                                    onPress={()=>this.onPress(tabName)}
                 > 
                    {childView}                     
                </TabNavigatorItem>    

            );
    }

    onPress(tabName){
        if(tabName){
            this.setState({
                selectedTab:tabName
            });
        }
    }
    createChildView(tabContent){
        return (
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text>content:{tabContent}</Text>

                    </View> 


            );
    }
    render(){
        return (
                <View style={styles.container}>
                                       <TabNavigator
                                    hideTabTouch={true} 
                                    tabBarStyle={styles.tab}
                    >
                        {this.renderTabView('购物车','Cart','购物车版块',this.createChildView("购物车版块"))}
                        {this.renderTabView('分类','Category','分类版块',this.createChildView("分类板块"))}
                        {this.renderTabView('发现','Faxian','发现版块',this.createChildView("发现版块"))}
                        {this.renderTabView('首页','Home','首页版块',this.createChildView("首页"))}
                        {this.renderTabView('我的','Personal','我的版块',this.createChildView("我的"))}

                    </TabNavigator>
                </View>

            );


    }


}



AppRegistry.registerComponent('app', () => app);