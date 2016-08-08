import React,{ Component } from 'react';
import {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    View,
    ListView
    } from 'react-native';


import Layout from './layout';

class app extends Component {
	render(){
		return (
				<Layout />
			);

	}

}

AppRegistry.registerComponent('app', () => app);