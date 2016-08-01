var styles = StyleSheet.create({
    flex:{
        flex:1
    },
    flex_header: {
        marginTop:25,
        height:50,
        borderBottomWidth:3/PixelRatio.get(),
        borderBottomColor:'red',
        alignItem:'center'//上下居中

    },
    font: {
        fontSize: 25,
        fontWeight:'bold',
        textAlign:'center'//文本左右居中
    },
    font_1: {
        color:'blue'
    },
    font_2: {
        color:'green',
        backgroundColor:'#ccc'
    },
    list_item:{
        height:40,
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        justifyContent:'center'
    },
    list_item_font:{
        fontSize:16
    },
    news_title:{
        fontSize:20,
        fontWeight:'bold',
        color:'red',
        marginLeft:10,
        marginTop:15
    }
});
module.exports = styles;
