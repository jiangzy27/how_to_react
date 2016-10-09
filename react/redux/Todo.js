import React,{ Component } from 'react';
//展示型组件
// 只有读取，包括点击后的动作，都是父级传递下来的。
export default class Todo extends Component{
    render(){
        console.log(this.props);
        return (
            <li onClick={this.props.onTodoClick}
                style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}>
                测试数据
            </li>
        );
    }
}