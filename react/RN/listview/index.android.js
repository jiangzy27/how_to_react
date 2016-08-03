import React,{ Component } from 'react';
import {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    View,
    ListView
    } from 'react-native';

const REQUEST_URL =  'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
//样式表创建
var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    rightContainer: {
        flex: 1
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

class app extends Component {
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
//ajax请求
    fetchData(){
        fetch(REQUEST_URL)
            .then((response)=>response.json())
            .then((resData)=>{
                this.setState({
                        //类实例下面的方法调用，将ajax返回的数据填充到列表
                        dataSource:this.state.dataSource.cloneWithRows(resData.movies),

                        loaded:true
                    });
                })
            .done();
    }

    componentDidMount(){
        this.fetchData();
    }
    renderMovie(movie) {
        return (
            <View style={styles.container}>
                <Image style={styles.thumbnail} source={{uri:movie.posters.thumbnail}} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
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
                dataSource = {this.state.dataSource.bind(this)}
                renderRow = {this.renderMovie.bind(this)}
                style={styles.listView}
            />
        );

    }

}

AppRegistry.registerComponent('app', () => app);