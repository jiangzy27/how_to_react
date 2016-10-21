'use strict';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {AutoComplete} from 'antd';
//数据源
const dataSource = ['john','jack','jimmy','lily','lucky','ada'];

class Complete extends Component{
    constructor(props){
        super(props);
        //设置数据源
        this.state = {
            dateSource:this.props.dataSource
        };
    }
    //选择下拉框值后触发
    handleSelect(value) {
        console.log('onSelect', value);
    }
    //输入值变化时触发
    handleChange(value){
        var arr = [];
        var data = this.props.dataSource;
        console.log(data);
        for(let i=0;i<data.length;i++){
            if(data[i].indexOf(value)!=-1){
               arr.push(data[i]);
            }
        }
    //重新赋值state
        this.setState({
            dataSource:arr
        });
    }
    render(){
        return (
            <AutoComplete dataSource={this.state.dataSource}
                          onSelect={this.handleSelect.bind(this)}
                          onChange={this.handleChange.bind(this)}
                          style={{width:200}}
            />
        );
    }
}
ReactDOM.render(
    <Complete  dataSource={dataSource} />,
    document.getElementById('app')
);
