###转码器Babel
####安装
我们在使用es6时，需要借助babel这个工具进行转换为es5才能正常使用。
我们可以通过npm装一下它的命令行：

```
npm install -g babel-cli
```
####转码规则集presets
在下面的配置文件中，有presets这么一项，意为规则集，这个需要另外安装。
如果仅是es6转es5，只需安装es2015这一项即可。

```
npm install --save-dev babel-preset-es2015

```
####配置文件.babelrc
安装好了规则集，我们可以书写配置文件了，这个文件比较特殊，是.babelrc结尾的。

```
  {
    "presets": ["es2015"],
    "plugins": []
  }
```
很简单的这么一行完事。

Babel 一旦安装完成就可以开始编译你的 ES6 代码了。
我们在src目录放入了一些es6文件，然后使用如下命令进行整个目录转换：
```
babel  src/ -d dest/
```
我们以后发布的代码，都是dest下的es5代码，而不是原始的es6，
然后再注意一个问题，Babel所做的只是帮你把**ES6 模块化语法**转化为**CommonJS 模块化语法**，
比如我们的export里面的例子，实际上import这个关键字，会转换为require关键字，而实际上es5原生语法并没有require，
其中的require exports 等是 CommonJS 在具体实现中所提供的变量，
如果我们要在html里面直接使用是不行的,可以借助打包工具打包后使用，比如webpack或Browserify，
其中，Browserify是专门解决这种CommonJS问题的，而webpack除此之外还有更强大的作用。好啦，废话不多说，我们去玩es6喽~~~