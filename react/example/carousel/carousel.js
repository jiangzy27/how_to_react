import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'antd';

function onChange(a, b, c) {
    console.log(a, b, c);
}

ReactDOM.render(
    <Carousel afterChange={onChange} autoplay>
        <div><h3>图1</h3></div>
        <div><h3>图2</h3></div>
        <div><h3>图3</h3></div>
        <div><h3>图4</h3></div>
    </Carousel>
    , document.getElementById('app'));