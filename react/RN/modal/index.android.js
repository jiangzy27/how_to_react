/*

*/
import React,{ Component } from 'react';
import {
    AppRegistry,
    Modal,
    Text,
    TouchableHighlight,
    View,
    StyleSheet
    } from 'react-native';
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor:'lightblue',
    height:200,
    padding:20,
    marginTop:50
  }

});
class app extends Component{
    
    constructor(props){


        super(props);
        this.state = {modalVisible:false};
    }
    setModalVisible(visible){
        this.setState({modalVisible:visible});
    }


    render(){
        return (
            <View style={{marginTop:22,backgroundColor:'green'}}>
                <Modal 
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={()=>{this.setModalVisible(false)}}
                >
                    <View style={styles.container}>
                        <View style={[styles.innerContainer]}>

                            <Text>对话框的内容信息</Text>
                            <TouchableHighlight 
                                onPress={()=>{
                                    this.setModalVisible(!this.state.modalVisible);

                                }}
                                style={{marginTop:100}}
                                

                            >
                                <Text style={{fontSize:18}}>关闭</Text>
                            </TouchableHighlight>
                        </View>
                    </View>

                </Modal>

                <TouchableHighlight  onPress={()=>{
                    this.setModalVisible(true);

                }}>
                    <Text>显示</Text>
                </TouchableHighlight>
            </View>

            );
    }


}


AppRegistry.registerComponent('app', () => app);