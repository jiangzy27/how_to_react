import React,{ Component } from 'react';
//展示型组件
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