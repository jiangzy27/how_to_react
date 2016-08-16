###联系人列表
要获取联系人信息，就得与系统打交道了，所以在配置上面，我们要做一点小动作。

>安装

```
npm install react-native-contacts

```
####配置工作

>android/settings.gradle
配置文件1：

```
...
include ':react-native-contacts'
project(':react-native-contacts').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-contacts/android')
```
这里就仿照文件原有的内容写就行了。

>android/app/build.gradle
配置文件2：

```
...
dependencies {
    ...
    compile project(':react-native-contacts')
}
```

>android/app/src/main/java/[your-app-namespace]/MainApplication.java
配置文件3：

```
import com.rt2zz.reactnativecontacts.ReactNativeContacts;
...
        @Override
        protected List<ReactPackage> getPackages() {
          return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new ReactNativeContacts()   // <--- and add package
          );
        }

```

这里注意的也是仿照文件的原有内容写，
这个文档标注的是改写MainActivity.java文件，
但是我本地的这个文件只是渲染主组件而已，
主要的配置都在上面这个文件中，这个可能跟版本有关，
这个请大家自己自行调整一下，别死抠。
这个写法要慢慢熟悉，从字面意思看就是导入包并实例化的意思。

>android/app/src/main/AndroidManifest.xml
这个是权限文件

```
...
  <uses-permission android:name="android.permission.READ_CONTACTS" />
  <uses-permission android:name="android.permission.READ_PROFILE" />
...
```

这里大家一定要注意了，uses一定不要大写！否则一直会报没有权限。
再就是第二个读取头像的也要配置进去，否则会报错。
对于写入联系人信息这个就不需要了，大部分情况是不会用到的。

