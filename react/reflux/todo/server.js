/*
 * send:会自动加入一些设置，比如head头信息，http缓存支持等等。
 * 可以理解为一个优化过的函数。
 *
 * */
//get和post获取参数
var express = require('express');
//处理post需要引入这个中间件,处理的是form-data
var formidable = require('formidable');
//
//处理post需要引入这个中间件,处理的是application/x-www-form-urlencoded
//var bodyParser = require('body-parser');

var app = express();
//使用中间件
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:true}));

//监控一下content-Type:
app.use(function(req,res,next){
    console.log(req.headers['content-type']);
    next();

});
//监控静态资源
app.use(express.static('./'));
//监控post请求
app.post('/server/add',function(req,res){
    //创建一个流处理req
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields,files){
        console.log(fields);

        res.send(fields['name']);
    });
});

app.listen(9998);