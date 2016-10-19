'use strict';
//引入相关的包
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {DatePicker} from 'antd';
let handleDate = (date,dateString)=>{
    //分别打印时间对象和时间字符串
        console.log(date,dateString);
};

//最普通的
ReactDOM.render(
<DatePicker size="large" onChange={handleDate} />,
    document.getElementById('app1')


);

//自定义的时间格式
const format = 'YYYY/MM/DD';
ReactDOM.render(
    <DatePicker size="small" onChange={handleDate} format={format}/>,
    document.getElementById('app2')


);
