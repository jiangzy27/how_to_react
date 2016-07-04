###打包css代码
经过了简单的了解后，我们对webpack有了一个总体的认识，今天我们试着玩点稍难点的，如何打包css？
我们知道，requirejs或seajs这样的工具，可以将js代码模块化管理起来，那css可以模块化管理么？
答案是肯定的，我们可以用webpack干这件事。而在这之前，我们先讲个概念：
####什么是loader加载器？
其实，我们webpack本身并不怎么先进，如果没有其他工具的辅助，自己也就能处理js模块，比如我们前面打包了一个js代码，
如果我们要处理其他类型的文件比如css等，就要使用loader加载器了。
loader加载器顾名思义，就是一个处理工具，是webpack的机械手臂，有了它可以做更多事了，所以我们第一件事就是安装这个机械臂。
#####安装处理css的loader
    1.npm install css-loader
    2.npm install style-loader

css-loader是读取css文件的模块，而style-loader就是转换模块的作用。<br />
我们先起个文件，比如叫style.css,也是随便写点什么东西，比如背景色设置为绿色，
好的，我们一会要打包的就是这个文件。<br />
我们继续在entry.js这个文件里面捯饬。

```
    require('!style!css!./style.css');
    document.write('hello');
```
不用晕，我来解释一下，我们从后往前看，这个./style.css，就是你刚才写的背景为绿色的css文件，这个没啥问题吧。
而前面的感叹号！，就是一个分隔符，也是一个管道符，意思为：style-loader和css-loader分别处理之，处理顺序是从后到前，
我们前面说过，css-loader是读取文件，style-loader是打包文件，那么经过了这两道工序后，我们的工作也就ok了。
最后，我们别忘了执行：<br />

```
webpack ./entry.js bundle.js。
```
ok，讲到这，我们貌似知道了怎么运行webpack打包了，但这个打包出来的东西有啥用呢？咋用呢？非常简单。
我们再起一个文件，index.html

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>webpack css loader</title>
</head>
<body>

</body>
</html>
<script src="bundle.js"></script>
```
文件的最后，引入这个bundle.js就可以啦，因为css已经作为模块被打包进了bundle.js,
所以你不用再单独引入css了，运行一下看看，是否背景变为绿色了？


