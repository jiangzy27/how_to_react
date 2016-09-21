import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
console.log($);
class UserList extends Component{

    constructor(props){
        super(props);
        this.state = {
            username:'',
            age:''
        };

    }
    //组件加载完毕
    componentDidMount(){
        $.getJSON(this.props.url,function(res){
                this.setState({
                    username:res['name'],
                    age:res['age']
                });

        }.bind(this));
    }
    render(){
        return (
            <div>
                {this.state.username} === {this.state.age}

            </div>
        );
    }
}
//造数据
// @name：会自动拼接字符串造人名,非常便利！
// |1-100：表示这个范围的随机整数
Mock.mock('http://ajax.data.com',{
    'name':'@name',
    'age|1-100':100
});
ReactDOM.render(
    <UserList url="http://ajax.data.com" />,document.getElementById('app')

);