import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Pagination } from 'antd';
//造数据
Mock.mock('http://ajax.data.com',{
    'total':100,
    'items|10':[
        {'id|+1': 1,
         'name':'@name'
        }
    ]
});

class Container extends Component{

    constructor(props){
        super(props);
        this.state = {
            current:1,
            total:0,
            items:''
        };

    }
    componentWillMount(){
        this.getData(1);//初始化第一页
    }
    getData(page){
        let url = this.props.url;
        console.log(url);
        //注意ajax回调方法的this指向问题
        $.ajax({
            url:url,
            dataType:'json',
            success:function(data){

                this.setState({
                    current:page,
                    total:data['total'],
                    items:data['items']
                });
            }.bind(this)
        });
    }
    onChange(page) {
        console.log(page);
        this.getData(page);
    }
    render() {
        return (
        <div>
            <ListItem data={this.state.items} />
            <Pagination pageSize={10}  current={this.state.current} onChange={this.onChange.bind(this)} total={this.state.total} />
        </div>);
    }
}

class ListItem extends Component {

    render(){
        var stylelist = {
            borderBottom:'1px solid #ccc',
            height:'50px',
            textAlign:'center',
            lineHeight:'50px'
        };
        var arr = [];
        for(let i=0;i<this.props.data.length;i++){
            arr.push(<li style={stylelist} key={this.props.data[i]['id']}>{this.props.data[i]['name']}</li>);
        }
        return (
            <ul>
                {arr}
            </ul>);
    }
}

ReactDOM.render(
    <Container url="http://ajax.data.com" />,
    document.getElementById('app'));

