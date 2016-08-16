/*

*/
import React,{ Component } from 'react';
import {
    AppRegistry,
    Navigator,
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,

    } from 'react-native';

import Contacts from 'react-native-contacts';
var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    rightContainer: {
        flex: 1,
        borderBottomWidth:1,
        borderColor:'#ccc',
        height:100
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center'
    },
    year: {
        textAlign: 'center'
    },
    thumbnail: {
        width: 53,
        height: 81
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF'
    }
});
class app extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            //声明一个类实例。
            dataSource:new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1 != row2
            }),
            loaded:false
        }
    }
    getContacts(){
        Contacts.checkPermission((err,permission)=>{
            //alert(permission);
             if(permission =="authorized"){

                    Contacts.getAll((err,contacts)=>{
                        //alert(contacts);
                       // alert(JSON.stringify(contacts));
                        this.setState({
                        //类实例下面的方法调用，将ajax返回的数据填充到列表
                            dataSource:this.state.dataSource.cloneWithRows(contacts),

                            loaded:true
                    });

                    })

            }
            if(permission == "denied")
                alert('读不到通讯录');


        })
    }
    componentDidMount(){
        this.getContacts();
    }
    renderItem(item){
        return (
            <View style={styles.container}>
                
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>姓名：{item.givenName}</Text>
                    <Text style={styles.year}>电话：{item.phoneNumbers[0].number}</Text>
                </View>

            </View>

        );        
    }

    renderLoadingView(){
        return (
                <View style={styles.container}>
                    <Text>Loading......</Text>
                </View>
        );
    }


    render(){
        if(!this.state.loaded){
            return this.renderLoadingView();
        }
        return (
            <ListView
                dataSource = {this.state.dataSource}
                renderRow = {this.renderItem.bind(this)}
                style={styles.listView}  />

        );

    }


}


AppRegistry.registerComponent('app', () => app);