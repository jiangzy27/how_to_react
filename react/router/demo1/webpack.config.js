module.exports = {
    entry:'./entry.js',//指定打包入口文件，每有一个键值对，就是一个入口文件。
    output:{
        path:__dirname,//定义输出文件夹
        filename:"bundle.js"
    },
    module:{
        loaders:[//定义一系列加载器。
            //两种传参方式：1.?后面加参数 2.exclude不解析node_modules下的js文件 3.query:{}方式。compact表示不合并，插件是es2015和react.
            {test:/\.js?$/,loader:'babel-loader',exclude:/node_modules/,query:{compact:false,presets:['es2015','react']}}
        ]
    }
};
