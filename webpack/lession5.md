###css文件隔离打包
因为webpack可以将任何文件打包，然后通过import或require方式引入，
这样在写的时候固然很爽，但是正式上线就有了麻烦，因为每个组件也许都会引入css样式，
样式文件最好可以单独打包，而不是跟js打在一起，因为css跟公用库一样，可以反复利用的，
我写了一个按钮样式，同事小王和小张都可以在组件内直接引入使用，而写完都打包到各自的bundle.js里面发布，就会导致组件臃肿问题。比如：

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
我们可以把所有的css文件都组合在一起，打成一个总文件引入：

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
            //处理css，正则匹配到css文件后，css-loader的功能就是可以模块化css，然后import引用
            //ExtractTextPlugin.extract的意思是，可以模块化处理，但不直接打包。
            {test:/\.css$/,loader:ExtractTextPlugin.extract("style-loader","css-loader")},
            {test:/\.less$/,loader:ExtractTextPlugin.extract("style-loader","css-loader!less-loader")},
            //处理jsx等。
            {test:/\.js?$/,loader:'babel-loader',exclude:/node_modules/,query:{compact:false,presets:['es2015','react']}}
        ]

    },
    plugins: [
    //总打包为一个文件，而不是打散成N个小文件。
        new ExtractTextPlugin("./dest/style.css",{
            allChunks: true
        })
    ]

};
```
entry文件是：

```
require('./button.js');
```
然后我们在html引入总文件：

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

当然也可以拆成各自的小css单独引入，这样更加灵活：

```
 plugins: [
        new ExtractTextPlugin("[name].css")
    ]
```
[name]就是entry里面指定的键，也就是打包后的css文件名。
<br />
参考：https://webpack.github.io/docs/stylesheets.html

