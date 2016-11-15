import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {BarChart} from 'react-d3-components';
//造数据
Mock.mock('http://ajax.bardata.com',{
    'items|5':[
        {
            'name':'@name',
            'score|1-10':111
        }
    ]
});
class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataChart:[{label:'图表',values:[{x:'',y:''}]}],

        };
    }
    componentDidMount(){
        $.ajax({
            url:'http://ajax.bardata.com',
            dataType:'json',
            success:function(data){
                var items = data['items'];

                var arr = [];
                for(var i=0;i<items.length;i++){
                    var obj = {};
                    obj['x'] = items[i]['name'];
                    obj['y'] = items[i]['score'];
                    arr.push(obj);

                    }
                this.setState({
                    dataChart:[{label:'',values:arr}]
                });

            }.bind(this)
        });
    }
    render(){
    var sort = null;
    return (
        <div>
            <BarChart
                data={this.state.dataChart}
                width={400}
                height={400}
                margin={{top: 10, bottom: 50, left: 50, right: 10}}/>

        </div>
    );
}
}
ReactDOM.render(<Chart />, document.getElementById('app'));


