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
    Image,

    } from 'react-native';

import DeviceInfo from 'react-native-device-info';

class app extends Component{


    render(){
        var uuid = DeviceInfo.getUniqueID();
        
        var sysname = DeviceInfo.getSystemName();
        var version = DeviceInfo.getSystemVersion();
        return (
            <View>
                <Text style={{fontSize:20,color:'red'}}>

                    设备唯一ID:{uuid}

                </Text>

                 <Text style={{fontSize:20,color:'blue'}}>

                    system:{sysname}

                </Text>
                  <Text style={{fontSize:20,color:'green'}}>

                    version:{version}

                </Text>
                       
            </View>



            );
    }
}


AppRegistry.registerComponent('app', () => app);