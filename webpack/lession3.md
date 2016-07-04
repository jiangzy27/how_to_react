###图片打包
我们前面学习了一些打包技巧，今天我们试着打包一下图片。这个听起来挺酷的，图片都能打包呢？
确实是可以的，一般针对的是css引用的图片，原则是：
    1.如果是64k以上的图片，会将图片重命名后，仍旧沿用图片路径，图片不压缩
    2.如果是64以下的，直接将图片以base64的方式编码返回，也可以设置大小限制。

我们先定义几个文件：
#####style.css

```
body{
    color: darkred;
    background: url('./1.jpg');
}
```

#####entry.js

```
require("!style!css!./style.css");

```
#####webpack.config.js

```
module.exports = {
    entry:'./entry.js',//指定打包入口文件，每有一个键值对，就是一个入口文件。
    output:{
        path:__dirname,//定义输出文件夹
        filename:"bundle.js"
    },
    module:{
        loaders:[//定义一系列加载器。
            {test:/\.css$/,loader:"style!css"},//匹配css文件时，就用css和style两个加载器处理。
            {test:/\.(jpg|gif|png)$/,loader:"url?limit=4000"},//图片小于4k就转为base64，否则还是外链。
        ]
    }
};

```
这里我们用到了url-loader这个插件，所以得先预装一下：

```
npm install url-loader
```
这个配置文件，前面的就不说了，就说一下最后一行，test是正则匹配图片格式的文件，loader调用的是插件，url问号后面加参数信息，
limit表示图片的限制大小，如果是小于4k，就转为base64编码。<br />
运行一下看看，发现图片被重命名了，但大小还是没有变化的，如果要压缩图片，可以借助gulp。