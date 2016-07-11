'use strict';
/*说明：
有关省略号的语法和props。
1.props：
这个很简单，就是说，我们在父组件上传递一个信息，子组件要想接收下来使用，就使用props属性即可。
2.省略号：
这个省略号很牛。我们看如下的例子，我声明了一个data对象，假如这个data里面有n个键值对，那我在属性传递时，
就需要一个一个的对着写一遍，代码就会变得非常冗长难看，这时，我们就用一个省略号的方式代替，然后我们通过
实践发现，在props获取了data的所有属性！这样，我们的data可以单独维护，代码就变得十分优雅了。
*
*
* */
import React from 'react';
import ReactDOM from 'react-dom';

var MyTitle = React.createClass({
    show:function(){
        console.log(this.props.title);
        console.log(this.props.contents);
        console.log(this.props.name);
    },
    render:function(){
        return <button onClick={this.show}>click me</button>
    }
});

var data = {title:'this is a title',contents:'this is contents'};
ReactDOM.render(
    <MyTitle {...data} name={'my name'}/>,
    document.getElementById('test')

);