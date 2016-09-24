//分开打包，将react等文件，都打入common.js里面，单独引入，这样就避免了每个组件过大的问题。
var webpack = require('webpack');
module.exports = {
    entry:{
        'bundle':'./entry.js',//键是最终打包后的名字
        vendors: ['react','react-dom','reflux']
    },//指定打包入口文件，每有一个键值对，就是一个入口文件。
    output:{
        path:__dirname,//定义输出文件夹
        filename:"./dest/[name].js"
    },
    module:{
        loaders:[//定义一系列加载器。

            {test:/\.js?$/,loader:'babel-loader',exclude:/node_modules/,query:{compact:false,presets:['es2015','react','stage-0']}}
        ]

    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'common.js')
    ]

};
