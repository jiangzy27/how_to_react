'use strict';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ChangeName from './props.js';//这个写法要注意，光import进来是不行的,默认导入类，名字可以改
var data = {title:'this is changename title',contents:'this is  changename contents'};

//调用
ReactDOM.render(
    <ChangeName {...data} name={'my name'}/>,
    document.getElementById('test')

);