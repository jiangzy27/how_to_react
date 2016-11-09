//get和post获取参数
var express = require('express');
//处理post需要引入这个中间件,处理的是form-data
var formidable = require('formidable');
var fs = require('fs');
var app = express();
//处理静态资源
app.use(express.static('./'));
//处理post：form-data类型
app.post('/postformdata',function(req,res){
    //创建一个流处理req
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = './upload/'; //设置上传目录
    form.parse(req,function(err,fields,files){
        console.log(files);
        if (err) {
            res.send(err);
            return;
        }

        var avatarName = '/' + Date.now() + '.jpg';
        var newPath = form.uploadDir + avatarName;
        files.path = files.path+"";
        fs.renameSync(files.my_upload.path, newPath); //重命名
        //阻塞2s
        setTimeout(function(){
            res.send({
                code: 200,
                path: newPath
            });
        },2000);


    });
});
app.listen(9998);//监听端口

