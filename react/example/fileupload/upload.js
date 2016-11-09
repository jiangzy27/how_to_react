import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Upload, message, Button, Icon } from 'antd';

const data_props = {
    name: 'my_upload',//这个很重要，是传到后端nodejs的文件标识！
    action: '/postformdata',//node的http路径
    onChange(info) {

        if (info.file.status == 'uploading') {
        //传输过程中
            console.log(info.file);//单个文件
            console.log(info.fileList);//文件列表,
            console.log(info.event);//捕获事件，有进度percent等属性
        }
        if (info.file.status == 'done') {
        //传输完成
           var imgUrl = info.file.response.path;//获取服务器信息
            $('#pic').append("<img src='"+imgUrl+"' style='width:100px;height:100px' />");

        }else if(info.file.status == 'error') {
           console.log('上传错误');
        }
    }
};

ReactDOM.render(
    <div>
        <Upload {...data_props}>
            <Button type="ghost">
                <Icon type="upload" />点击上传
            </Button>
        </Upload>
    </div>
    , document.getElementById('app'));