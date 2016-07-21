import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
console.log($);
var UserList = React.createClass({
    //初始化state
    getInitialState:function(){
        return {
            userName:'',
            passWord:''
        };
    },
    //组件加载完毕
    componentDidMount:function(){
        $.getJSON(this.props.url,function(res){
            if(this.isMounted()){
                this.setState({
                    userName:res['name'],
                    passWord:res['pass']
                });
            }
        }.bind(this));
    },
    render:function(){
        return (
            <div>
                {this.state.userName} === {this.state.passWord}

            </div>
        );
    }
});

ReactDOM.render(
    <UserList url="http://localhost/test.php" />,document.getElementById('test')

);