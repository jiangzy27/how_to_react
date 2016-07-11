'use strict';
/*
* 说明：
*   1.this.props 对象的属性与组件的属性一一对应，但是有一个例外，
    2.就是 this.props.children 属性。它表示组件的所有子节点。
    3.我们使用React.Children.map方法，迭代子节点的信息，这个类似jquery的each方法。
    4.注意大小写。
* */
import React from 'react';
import ReactDOM from 'react-dom';

//遍历子节点
var NodeList = React.createClass({
    render:function(){
        return(
            <ul>
                {
                    React.Children.map(this.props.children,function(child){
                      return <li>{child}</li>;
                    })

                }

            </ul>

        );
    }
});


ReactDOM.render(
    <NodeList>
        <span>hello</span>
        <span>world</span>
    </NodeList>,
    document.getElementById('test')


);