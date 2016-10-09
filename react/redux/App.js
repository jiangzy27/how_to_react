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
//开始状态应该是false，而点击后触发dispath，将状态改为true，并传递给展示组件Todo
        console.log("旧状态："+completed);
//点击后，触发dispatch，改变store管理的状态。
        return (<Todo onTodoClick={()=>dispatch(completeTodo())} completed={ completed }/>);
    }

}

//配置state到props的映射
function mapStateToProps(state) {
    return {completed:state.completed};

}
//粘合容器组件，让容器组件的props拥有dispath和completed属性。
export default connect(mapStateToProps)(App);
