import {
    AppRegistry,
    Component,
    StyleSheet,
    PixelRatio,
    Text,
    View,
    }  from 'react-native';
import {styles} from './styles';

class News extends Component{
    show(title){
        alert(title);
    }
    render(){
        var news = [];
        //遍历属性prop
        for(var key in this.props.news){
            var text = (
            <Text style={styles.list_item} onPress={this.show.bind(this,this.props.news[key])}>{this.props.news[key]}</Text>
            );
            news.push(text);
        }
        return (
            <View style={styles.flex}>
                <Text style={styles.news_title}>今日要闻</Text>
                {news}
            </View>
        );
    }
}

module.exports = News;