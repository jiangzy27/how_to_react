###获取设备信息
这里主要以安卓为例：

>安装

```
npm install react-native-device-info --save
```

>配置

根目录下运行：

```
react-native link react-native-device-info
```

>启动文件修改

可以通过全局查找，找到**MainApplication.java**和**MainActivity.java**两个文件。<br />

MainApplication.java:

```
import com.learnium.RNDeviceInfo.RNDeviceInfo;  // <--- import

public class MainApplication extends Application implements ReactApplication {
  ......

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new RNDeviceInfo(), // <---- add here
          new MainReactPackage()
      );
    }

  ......
}
```
根据文档，另一个文件也需要修改，但我本地MainActivity.java文件压根没有那个getPackages函数，所以这个就不用加了，实际测试不加也没有问题。<br />
参考：https://js.coach/react-native/react-native-device-info
