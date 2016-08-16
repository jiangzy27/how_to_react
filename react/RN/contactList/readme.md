###联系人列表
要获取联系人信息，就得与系统打交道了，所以在配置上面，我们要做一点小动作。

>安装

```
npm install react-native-contacts

```
####配置工作

>android/settings.gradle

```
...
include ':react-native-contacts'
project(':react-native-contacts').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-contacts/android')
```
这里就仿照文件原有的内容写就行了。

>android/app/build.gradle

```
...
dependencies {
    ...
    compile project(':react-native-contacts')
}
```

>android/app/src/main/java/[your-app-namespace]/MainApplication.java

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

这里注意的也是仿照文件的原有内容写，这个写法要慢慢熟悉，从字面意思看就是导入包的意思。

>android/app/src/main/AndroidManifest.xml
这个是权限文件

```
...
  <uses-permission android:name="android.permission.READ_CONTACTS" />
  <uses-permission android:name="android.permission.WRITE_CONTACTS" />
  <uses-permission android:name="android.permission.READ_PROFILE" />
...
```

这里大家一定要注意了，uses一定不要大写！否则一直会报没有权限。

