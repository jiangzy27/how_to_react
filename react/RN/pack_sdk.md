###打包sdk
我们暂时以模拟器打包为例，真机也类似。

>生成签名

这是一个秘钥文件，我们用以下规则生成：

```
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```
**说明**：<br />
*   keytool是一个生成秘钥的命令
*   my-release-key.keystore是秘钥名称，这个可以随便起。
*   my-key-alias是别名，也可以随便起。
*   其他的参数不用动。

文件生成后，需要把这个文件拷贝到项目文件的android/app目录下。<br />

>配置文件

我们编辑android/app/build.gradle文件。

```
def MYAPP_RELEASE_STORE_FILE="my-release-key.keystore"
def MYAPP_RELEASE_KEY_ALIAS="my-key-alias"
def MYAPP_RELEASE_STORE_PASSWORD="haha123456"
def MYAPP_RELEASE_KEY_PASSWORD="haha123456"
.....
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            storeFile file(MYAPP_RELEASE_STORE_FILE)
            storePassword MYAPP_RELEASE_STORE_PASSWORD
            keyAlias MYAPP_RELEASE_KEY_ALIAS
            keyPassword MYAPP_RELEASE_KEY_PASSWORD
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
....
```
编辑完成后保存。

>开始打包


```
cd android && ./gradlew installRelease
```

>获取apk包

我们打包完成后，在：
android/app/build/outputs/apk
这个目录下面，会找到我们打包完成的apk包，将这个包复制到真机，即可安装运行。


好啦，打包过程至此完成！<br />


PS:<br />

整个打包过程，可以在不启动模拟器的基础上，将apk打包到模拟器！
再就是官方教程是把MYAPP_RELEASE_STORE_FILE这样一些全局信息，
配置到~/.gradle/gradle.properties文件中，这个相当于全局配置文件，
可我做实验发现这个文件开始并不存在，而我添加了之后保存也并没有起作用，
所以直接写到了build.gradle文件中，一样可以生效。
