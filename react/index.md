###前言
如果你对webpack已经有了一定的了解，那我们可以开始玩一下react了。
react其实核心的东西不多，就是一个分层的小框架，组合拆分比较容易，
各模块之间有独立的生命周期和变量作用域，作用域之间也有其独特的串门方式。
如果学过angularjs的同学，对这个框架上手会十分容易。
关于这个神秘的虚拟dom，正式的叫法应该是jsx。我们可以理解为一种新型的语法，
但是即使再神秘再新奇，我们的代码终究要在浏览器上跑的，浏览器不认识的话，
一切都是白搭。所以，我们的这套jsx语法，最终也需要解析成浏览器认识的形式，
我们需要借助一个叫babel的解析工具来解析它。babel这个东西很强大，可以转换
任意不兼容的js文件，比如es6语法。我们可以使用babel转为es5使用，只需要安装：

```
 npm install babel-core --save-dev
 npm install babel-loader --save-dev
 npm install babel-preset-es2015
```
react是热切拥抱es6的，所以我们在学react之前，尽量还要储备一点es6的知识。现在市面上
流行的一本大部头es6语法书是阮一峰老师的大作，但我觉得完全掌握所有的语法没多大价值，
日常工作中，只是把常用的几个知识点掌握就ok，毕竟，我们不是搞学术研究的。
好的，废话不多说了，装好了es6插件后，我们再装一个babel解析react的插件。

```
npm install babel-preset-react

```
凡是babel打头的，都是babel名下的插件，也就是说，babel一家独揽了react的所有业务，是个很厉害的东东。
我查了一下目前网上的一些教程，现在五花八门用啥的都有，比如jsx-loader这个加载器，大家看名字应该可以猜出来，
他是webpack直属名下的工具插件，可以直接解析react的jsx语法，但这玩意已经落伍了，我们现在统一接入babel大管家管理一切，
其他的都不用去管了。<br />
以上是打包的工具已经全了,我们在书写react语法时，要在严格模式下进行，这个很重要，因为严格模式会检测出一些不规则的语法错误，
这个对我们开发还是蛮有帮助的。一般，我们开头会这样写：
```
import React from 'react';
import ReactDOM from 'react-dom';
```
import是引用包的意思，所以我们还需要安装一下react的相关包：

```
npm install react
npm install react-dom
```
