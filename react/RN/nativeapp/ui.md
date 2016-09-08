##如何封装一个原生UI组件？
原生UI和原生模块的封装方式是不同的，这个一定先在概念上区分清楚。
要封装一个原生UI组件，就要继承SimpleViewManager这个泛型类，
跟原生模块一样，也要重写getName()方法，这个是将UI的组件名称
暴露给js层，接着就要重写createViewInstance方法，在里面我们要返回
我们需要使用的原生UI组件的实例。然后，就是暴露一些必要的属性给js层。
我们拿WebView这个为例。我们假设这个组件有两个参数属性，一个是url，加载远程网页，
一个是html，加载本地文件，在方法名上面加上@ReactProp就可以了。

>功能类

```
public class ReactWebViewManager extends SimpleViewManager<WebView> {//泛型传入webview
    public static final String REACT_CLASS = "RCTWebView";
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected WebView createViewInstance(ThemedReactContext reactContext) {
        WebView webView= new WebView(reactContext);
        webView.setWebViewClient(new WebViewClient(){
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
              view.loadUrl(url);
                return true;
            }
        });
        return webView;
    }

    //暴露给js的参数
    @ReactProp(name = "url")
    public void setUrl(WebView view,@Nullable String url) {
        Log.e("TAG", "setUrl");
        view.loadUrl(url);
    }
    @ReactProp(name = "html")
     public void setHtml(WebView view,@Nullable String html) {
        Log.e("TAG", "setHtml");
        view.loadData(html, "text/html; charset=utf-8", "UTF-8");
    }
}
```

>注册类

```
public class AppReactPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {

        return Collections.emptyList();
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(
                new ReactWebViewManager());//主要是这里，注册模块
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
            new AppReactPackage()
        );
    }
```

>JS使用

```
var WebView=require('react-native-RCTWebView');
render: function() {
    return (
    <View style={styles.container}>
        <WebView  url="https://www.baidu.com" style={{width:200,height:400}}></WebView>
   </View>
    );
  },
```



