'use strict';

import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
//小部件，渲染为ul列表
class Items extends Component {
    render(){
        var arrLi = [];
        for(let i=0;i<this.props.info.length;i++){
            //注意，这里可不是拼接字符串！
            arrLi.push(<li key={i}>{this.props.info[i]}</li>);
        }
        return (
            <ul>
                {arrLi}
            </ul>
        );
    }
}
//大部件
class Box extends Component {
    constructor(props){
        super(props);

        this.state = {
            //初始化为全列表
            list:this.props.sourceData
        }
    }

    checkSth(){
        var arr = [];
        //获取文本框信息
        var inputValue = this.refs.myInput.value;
        //获取props信息
        var sourceData = this.props.sourceData;
        //筛选数据
        for(let i=0;i<sourceData.length;i++){
            if(sourceData[i].indexOf(inputValue)!=-1){
                arr.push(sourceData[i]);
            }
        }
        //更新状态机
        this.setState({list:arr});
    }

    render(){

        return (
            <div>
                <input type="text" ref="myInput" onKeyUp={this.checkSth.bind(this)}/>
                <Items info={this.state.list} />
            </div>


        );
    }
}


var data = ['jackson','milly','john smith','mike','jenny'];
ReactDOM.render(
    <Box sourceData={data} />,document.getElementById('test')
);