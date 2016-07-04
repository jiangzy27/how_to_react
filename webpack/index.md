###webpack是个模块打包器。
这个单词我们分开看：web+pack，web是网络，pack是打包。
    1.任何资源都可以视为模块，不光js，还有css甚至image。
    2.模块之间可以互相依赖。<br />
    3.通过webpack对模块进行处理后，可以打包成我们想要的静态资源。

####webpack的特点

    1.支持commonjs和amd模块，意思也就是我们基本可以无痛迁移旧项目。
    2.支持模块加载器和插件机制，可对模块灵活定制。比如babel-loader，有效支持es6.
    3.可以通过配置，打包成多个文件。公用的文件独立出来，比如jquery，bootstrap等，有效利用浏览器的缓存功能提升性能。
    4.将样式文件和图片等静态资源也可视为模块进行打包。配合loader加载器，可以支持less等css预处理器。
    5.内置source map，即使打包在一起依旧方便调试

####安装方法
    1.先预装npm。
    2.npm install webpack -g（全局安装）
    3.npm install webpack --save-dev(本地安装)
这里强调一下，跟gulp类似，全局安装会装在c盘下指定的某个路径，会全局找到webpack这个命令。
而本地安装则会装在当前路径下的node_module目录下，方便我们进行各种包的管理。

####常用命令
     1.  webpack -w：提供watch方法，实时进行打包更新。
     2.  webpack -p：对打包后的文件进行压缩。
     3.  webpack -d：提供sourcemap，方便调试。
     4.  webpack --config：以某个config作为打包。
     5.  webpack --help:帮助
     6.  webpack --display-error-details 显示出错信息。
     7.  webpack --progress 显示进度。

####打包方法
我们先起个入口文件名，叫entry.js，里面的内容随便写，比如：

```
document.write('hello');
```
然后我们就可以运行命令：<br />
webpack entry.js bundle.js <br />
也就是将entry.js打包为bundle.js，打包完成后，看一下bundle.js跟原来的文件有啥不同了？





