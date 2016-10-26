import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Rate} from 'antd';
class Star extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:3
        };
    }
//选择星级
    handleChange(num) {
        console.log(num);
        this.setState({
           value:num
        });
    }

    render(){
        return (
            <div>
                <Rate allowHalf onChange={this.handleChange.bind(this)} value={this.state.value} />
            </div>
        );
    }
}

ReactDOM.render(<Star />,document.getElementById('app'));