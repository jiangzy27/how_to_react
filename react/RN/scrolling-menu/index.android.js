/*

*/
import React,{ Component } from 'react';
import { AppRegistry,View } from 'react-native';

import ScrollingMenu from 'react-native-scrolling-menu';

let items = ["item1",'item2','item3','item4','item5'];

class app extends Component{
    
    constructor(props){

        super(props);
    }

    onClick(itemIndex){
        alert("selected:"+items[itemIndex]);
    }    

    render(){
        return (
            <View style={{marginTop:50}}>
                <ScrollingMenu 
                            items={items}
                            callback={this.onClick.bind(this)}
                            backgroundColor="#fff"
                            textColor="#ccc"
                            selectedTextColor="darkred"
                            itemSpacing={50} />
            </View>

            );


    }


}


AppRegistry.registerComponent('app', () => app);