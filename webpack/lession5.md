###css文件隔离打包
因为webpack可以将任何文件打包，然后通过import或require方式引入，
这样在写的时候固然很爽，但是正式上线就有了麻烦，因为每个组件也许都会
引入一个公用的css样式文件，跟前一节课的公用js库情况类似，这种公用的css样式表
文件一般个头也不会小，同样会导致组件臃肿问题。比如这样一段代码：

```
//声明一个组件button。
import React,{Component} from 'react';
import './public/style.less';//引用样式表
class Button extends Component{
    handleClick(){
        alert('click you');
    }
    render(){
        return(
            <button className="my-button" onClick = {this.handleClick.bind(this)}>
                点击
            </button>
        );
    }
}
export default Button;//导出组件
```
这个示例是一个按钮组件，这个按钮自身肯定需要css样式表给修饰打扮一下的，我们在webpack打包时这样处理：

```
//**********************************************//
//这个组件需要单独安装一下
//npm install extract-text-webpack-plugin --save
//**********************************************//
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:'./entry.js',//指定打包入口文件，每有一个键值对，就是一个入口文件。
    output:{
        path:__dirname,//定义输出文件夹
        filename:"./dest/bundle.js"
    },
    module:{
        loaders:[
            //处理css
            {test:/\.css$/,loader:ExtractTextPlugin.extract("style-loader","css-loader")},
            {test:/\.less$/,loader:ExtractTextPlugin.extract("style-loader","css-loader!less-loader")},
            //处理jsx等。
            {test:/\.js?$/,loader:'babel-loader',exclude:/node_modules/,query:{compact:false,presets:['es2015','react']}}
        ]

    },
    plugins: [
        new ExtractTextPlugin("./dest/style.less",{
            allChunks: true
        })
    ]

};
```
entry文件是：

```
require('./button.js');
```
然后我们在html单独引用这个less文件即可。

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>css和js分开打包的案例</title>
    <link rel="stylesheet" href="./dest/style.css"/>
</head>
<body>
    <div id="app"></div>
</body>
</html>
<script src="./dest/bundle.js"></script>
```

当然也可以每个组件都拆分一个css单独使用，这种情况使用的场景是：<br />
我写了一个按钮样式文件，然后打包，
按钮的css文件是我自己写的，然后同事小王看我这个按钮做的挺漂亮的，
就想拿来用，但仅限于css样式，按钮的功能肯定是不一样的。
这种情况就需要分开打包为button.js,button.css：

```
 plugins: [
        new ExtractTextPlugin("[name].css")
    ]
```
[name]就是entry里面指定的键，也就是打包后的文件名。
<br />
参考：https://webpack.github.io/docs/stylesheets.html

