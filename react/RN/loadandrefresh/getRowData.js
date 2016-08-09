//分页数据接口
var express = require('express');
var app = express();
//监控静态资源
app.use(express.static('./'));
app.get('/query',function(req,res){
    var page = req.query.page;
    var endNum = page*15;
    var beginNum =  (page-1)*15;
    var arr = [];
    for(var i=beginNum+1;i<=endNum;i++){
        arr.push({id:i,name:'row====='+i});
    }

    res.send(JSON.stringify(arr));
});


app.listen(9998);