##组件和相关使用说明

###样式
react native没有所谓css的概念，可以理解为类css，声明如下：

```
var styles = StyleSheet.create({
    base:{
        width:200,
        height:200

    },
    background:{
        backgroundColor:'#ccc'
    }

});

```
###AppRegistry注册
应用注册，用于初始化启动应用.<br />
AppRegistry.registerComponent(项目名,()=>入口class名)

```
AppRegistry.registerComponent('AwesomeProject',()=>IndexComponent);
```
###View视图
视图，里面可以嵌套子视图。

```
<View style={{marginLeft:10,marginTop:10}}>
    <View></View>
    <View></View>
</View>
```
###Text文字
用于显示文字。

```
<Text style={{marginLeft:10,marginTop:10}}>大家好</Text>
```

###Image图片
显示图片。
```
<Image source="{require('./img/icon.png')}" />
```

###ListView列表视图
用于渲染自定义列表。

###TextInput文本输入框

```
<TextInput placeholder="searching..." />
```
###ToastAndroid 安卓提示信息

ToastAndroid.show('this is a toast',ToastAndroid.LONG);
