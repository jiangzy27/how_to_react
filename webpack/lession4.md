###公用文件单独打包
我们在写组件的时候，往往是这样引入一些包：
```
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
.....
```
如果每个组件都这么引入，然后打包，每个组件就会变得惊人的臃肿，而这，是我们不愿看到的。
我们的想法是，只希望业务类的代码打包即可，而公用的库文件、css文件等，都单独打一个包，
然后引用进来即可。如何达到这一点呢？其实也简单，就是做一下配置即可。

```
//分开打包，将react等文件，都打入common.js里面，单独引入，这样就避免了每个组件过大的问题。
var webpack = require('webpack');
module.exports = {
    entry:{
        bundle:'./entry.js',//键是最终打包后的名字
        vendors: ['react','react-dom','reflux']
    },//指定打包入口文件，每有一个键值对，就是一个入口文件。
    output:{
        path:__dirname,//定义输出文件夹
        filename:"./dest/[name].js"
    },
    module:{
        loaders:[//定义一系列加载器。

            {test:/\.js?$/,loader:'babel-loader',exclude:/node_modules/,query:{compact:false,presets:['es2015','react']}}
        ]

    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'common.js')
    ]

};
```
利用webpack提供给我们的插件工具，在entry入口设置项里面指定需打包成common模块的文件，
然后在plugins里面指定一下即可。这是js的公用库处理方法,那么css文件呢？且听下回分解。


