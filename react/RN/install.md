###react native的环境搭建
参考官方网站：http://reactnative.cn/docs/0.28/getting-started.html
<br />
我们以安装安卓环境为例，ios能稍微容易一点，只不过xcode7评价有点差，暂时不考虑。
安装过程非常枯燥，一个错误就导致满盘皆输，很容易造成人的心理挫败感，
但是环境ok之后下面的就会非常顺利了，就是些组件的调用，环境非常重要，
要耐着性子装好，否则后面都无法进行。
为了能减少中间出错的几率，建议先花20块钱买个vpn，这样墙的问题就解决了。
<br />
####Git
略。
####python
安装2.7版本，暂不支持3。
####Node
略。
####react native命令行。

```
npm install -g react-native-cli
```
####jdk
jdk这个就不用说了，这个是java环境必须有的，这个要装1.8版本以上的，安装后配置一下环境变量，mac下好像不用，
然后运行一下：javac -version，正常输出版本号即可。
####Android Studio
React Native目前需要Android Studio2.0或更高版本。安装地址：http://developer.android.com/sdk/index.html。
<br />
Android Studio包含了运行和测试React Native应用所需的Android SDK和模拟器。其实模拟器不是很重要，推荐下面的genymotion模拟器，但最好都装上，防止报错。
需要装的工具，教程里面说的比较明白，如果教程截图里面的项你没有的话，说明这些项没刷出来，参考一下视频教程，看人家是怎么做的。
这个安装有点慢，很多是下载的google的资源，得有点耐心。
装完后，还是配置一下环境变量，然后mac下需要编辑~/.bash_profile文件，然后运行source ~/.bash_profile生效即可。
####Gradle Daemon
这玩意应该是个编译工具。
不装的话，后面运行react-native run-android会出现一直打点的情况，也就是在线下载。
不过耐心等着也没事，只要能下载下来就行。
####Genymotion模拟器
这里出问题较多，我总结的有这么几点：<br />

1.  在avd里面配置环境变量里的android的sdk，而不是它默认的,否则会报连接不上device设备的问题。
2.  根据vbox虚拟机里面的报错信息，调整一些参数，比如声卡，要设置为**虚空音频驱动**等等，好多问题都是虚拟机参数问题导致的。
3.  把报错信息贴到google上，大部分问题都可以解决，百度也有部分答案。

####运行

```
react-native init AwesomeProject
cd AwesomeProject
react-native run-android
```

init的过程还是十分漫长的，其实就是个80m左右的文件，如果你不开vpn，这个过程就非常不好说了，我的人品算不错，用mac电脑下载了
半个小时居然下载成功了，感动的我都内牛满面了。
<br />
好了，大概流程就是这样的，window环境问题最多，大家要耐着性子慢慢调，祝你成功！！





