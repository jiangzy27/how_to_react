###文件读写


>安装

```
npm install react-native-fs --save
```

####文件配置

>android/settings.gradle

```
...
include ':react-native-fs'
project(':react-native-fs').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-fs/android')
```

>android/app/build.gradle

```
...
dependencies {
    ...
    compile project(':react-native-fs')
}

```

>MainApplication.java

```
import com.rnfs.RNFSPackage; // <------- add package

public class MainActivity extends ReactActivity {
   // ...
    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage(), // <---- add comma
        new RNFSPackage() // <---------- add package
      );
    }
```