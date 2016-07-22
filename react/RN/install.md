###react native的环境搭建
我们以在window下面搭建android环境为例，mac下基本类似：<br />
1. 安装jdk <br />
2. 安装android sdk <br />
3. 安装c++，这个是编译node.js的c++模块使用到的。<br />
4. 安装node和git.<br />
切换镜像源：
npm config set registry https://registry.npm.taobao.org

5. 安装react native命令行工具 <br />
这个可以先去github网站搜索下载facebook/reactnative,
先下载下来，解包后进入react-native-cli目录下，
运行:
```
npm install -g react-native-cli
```
这样速度会快很多。