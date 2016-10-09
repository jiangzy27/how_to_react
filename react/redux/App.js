import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
//创建action的函数
function completeTodo(){
    return {
        type:"ok"//表示已完成
    };
}
//容器型组件App
class App extends Component {
    render(){
//connect后，会得到这些东西
        const { dispatch, completed } = this.props;
        return (<Todo onTodoClick={()=>dispatch(completeTodo())} completed={ completed }/>);
    }

}

//配置state到props的映射
function mapStateToProps(state) {
    return {completed:state.completed};

}

export default connect(mapStateToProps)(App);
