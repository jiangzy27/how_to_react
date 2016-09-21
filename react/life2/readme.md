###生命周期
这个是react最精华的部分了，所以单独列一个文档出来。
#### componentWillMount
处理在render()之前的逻辑,只调用一次。

#### componentDidMount

在初始化渲染render()执行之后立刻调用。

#### componentWillUnmount
在组件从dom中移除时立即被调用。
在该方法中，需要执行一些必要的清理工作，
比如定时器，或者清除在componentDidMount中创建的dom元素。
<br />
在完成了render后，也就是组件实例化完成了，这时就进入了存在期。存在期我们一般会响应用户操作和父组件的更新来更新视图。

#### shouldComponentUpdate
是否要更新，慎用。

#### componentWillUpdate

调用render方法之前。

####componentDidUpdate

真实dom已经完成更新。

####componentWillRecieveProps

 父组件或者通过组件的实例调用 setProps 改变当前组件的 props 时调用。

