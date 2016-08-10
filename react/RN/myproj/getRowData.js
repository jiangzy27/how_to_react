//分页数据接口
var express = require('express');
var app = express();
//监控静态资源
app.use(express.static('./'));
app.get('/query',function(req,res){
    var page = req.query.page;
    var endNum = page*10;
    var beginNum =  (page-1)*10;
    var arr = [];
    if(page>3){
        res.send(JSON.stringify([]));
    }else{
        for(var i=beginNum+1;i<=endNum;i++){
            arr.push({id:i,img:'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png',title:'第'+i+'条测试数据',desc:'测试列表页，列表页具有下拉刷新、上拉加载的功能'});
        }

        res.send(JSON.stringify(arr));
    }

});


app.listen(9998);
