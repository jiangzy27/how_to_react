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

import RNFS from 'react-native-fs';
const path = RNFS.DocumentDirectoryPath+"text.txt";
class app extends Component{
    constructor(props){
        super(props);
        this.state = {
            fileStatus:'',
            fileContent:''
        }
    }
    createFile(){
        
        RNFS.writeFile(path,'this is a test,haha','utf8')
            .then((success)=>{
                this.setState({fileStatus:'create ok'});
            })
            .catch((err)=>{
                this.setState({fileStatus:'create error'});
            });

    }
    readFile(){
        RNFS.readFile(path,'utf8').then((data)=>{
            this.setState({fileContent:data});
        }).catch((err)=>{
            this.setState({fileContent:'nothing'});
        });
        
    }
    delFile(){
        RNFS.unlink(path).then(
            ()=>{
                this.setState({fileStatus:'delete ok'});
            }).catch((err)=>{
                this.setState({fileStatus:'delete error'});
            });
    }
    render(){
        
        return (
            <View>
                <Text style={{fontSize:20,color:'red'}}>{this.state.fileStatus}</Text>
                <Text style={{fontSize:30,color:'blue'}}>{this.state.fileContent}</Text>
                <TouchableHighlight onPress={this.createFile.bind(this)} >
                    <Text>创建文件</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.readFile.bind(this)} >
                    
                    <Text>读取文件</Text>

                </TouchableHighlight>  
                <TouchableHighlight onPress={this.delFile.bind(this)} >
                    
                    <Text>删除文件</Text>

                </TouchableHighlight>    

            </View>
        );

    }


}


AppRegistry.registerComponent('app', () => app);