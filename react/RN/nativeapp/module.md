##如何封装一个原生模块？
不可否认，我们在使用react native的时候，肯定要跟原生代码打交道的，
即使自己不会写，起码需要知道跟原生组件打交道的原理。
以安卓为例，封装一个原生组件的步骤如下：

>第一步：功能类

java是有包名的，比如com.abc.myapp这样的，其实这个也非常简单，打出包来就是com/abc/myapp/test.java(java类)，
这样可以避免重名问题。我们图省事的话，可以把这个自定义的功能类，跟MainActivity.java放在一个目录下即可。
功能类自定义名称，我们暂时叫HelloKitty.java吧。
```
package com.abc.myapp;//包名
import com.facebook.react.bridge.xxxx;//这个是引入桥接类，有很多，看官方文档。
import android.xxxx;//引入原生android类
import java.xxxxx;//引入java类

public class HelloKitty extends ReactContextBaseJavaModule {//基础类继承
  //必须重写的方法：组件名称，将来在js中引入的时候也用这个名字。
  public String getName() {
    return "hellokitty";
  }
  //暴露给js的方法，该方法返回值必须是void。
    @ReactMethod
    public void d(String tag,String msg){
        Log.d(tag,msg);
    }


}
```
封装原生模块的话，继承ReactContextBaseJavaModule类，比如Toast，log这样的；
如果封装UI组件，就要继承SimpleViewManager这个泛型类，如ScrollView，TextInput等。

>第二步：注册package类

这个类要实例化第一个功能类，也就是注册。我们命名时，一定要带上这个package的关键字。
如命名为HelloKittyPackage.java:

```
package com.abc.myapp;//包名
import com.facebook.react.bridge.xxxx;//这个是引入桥接类，有很多，看官方文档。
import android.xxxx;//引入原生android类
import java.xxxxx;//引入java类
public class HelloKittyPackage implements ReactPackage {//继承ReactPackage类

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new HelloKitty(reactContext));//主要是这里，添加功能类实例。
        return modules;
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

}
```

>第三步：在MainActivity中使用

android启动文件叫MainActivity.java，可以理解为入口文件。

```
public class MainActivity extends ReactActivity {
    ...... ......
    //引入第二步的注册类实例，就ok啦。
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new HelloKittyPackage()
        );
    }
```

>JS使用

这一步就是我们比较熟悉的了。

```
var hello = require('react-native-hellokitty');

hello.d("Log1","我是一只猫");//使用java功能类的方法


```
