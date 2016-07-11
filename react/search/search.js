'use strict';
/*概述：
1.功能：
一个search搜索框，然后组合到page里面去。
2.知识点：
1）创建类，使用React.createClass()方法，也可以使用es6语法。
2）每个类里面，都必须有render方法。
3）使用ReactDOM.render()方法渲染组合后的部件，放到正式html的dom中去使用。
4）在search组件中，要获取input的值，需要在input的节点上追加ref标记，而在方法中获取这个节点值，需要使用refs属性。
5）button点击事件使用onClick，避免跟dom中的onclick重名。
6）使用props属性可以获取从父类传下来的信息，这里我们只是传了一个“Title”的字符串。
7）类内部，使用this关键字调用方法和属性，表示此类中的。
8）使用webpack打包search.js,最后在index.html引用打包后的文件，注意要把dom的id写上。
*
* */
import React from 'react';
import ReactDOM from 'react-dom';
//small component
var Search = React.createClass({
    checkSth:function(){
        var inputValue = this.refs.myInput.value;
        alert(inputValue);
    },
    render:function(){
        return (
            <div>
                {this.props.searchType}:
                <input type="text" ref="myInput"/>
                <button onClick={this.checkSth}>Search</button>
            </div>


        );
    }
});

var Page = React.createClass({
    render:function(){
        return(
            <div>
                <Search searchType="Title"></Search>

            </div>

        );
    }
});

ReactDOM.render(
    <Page />,document.getElementById('test')
);