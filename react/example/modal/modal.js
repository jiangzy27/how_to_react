import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Modal} from 'antd';
class MyDialog extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible:false
        };
    }
//显示对话框
    showModal() {

        this.setState({
            visible: true
        });
    }
//点击ok按钮
    handleOk(){
        this.setState({
            visible:false
        });
    }
//点击取消按钮
    handleCancel(){
        this.setState({
            visible:false
        });
    }
    render(){
        return (
            <div>
                <button onClick={this.showModal.bind(this)}>click</button>
                <Modal title="温馨提示"
                        visible={this.state.visible}
                        onOk={this.handleOk.bind(this)}
                        onCancel={this.handleCancel.bind(this)}>

                    <p>hello，you</p>
                    <p>hello，me</p>
                    <p>hello，everyone</p>
                </Modal>
            </div>
        );
    }
}

ReactDOM.render(<MyDialog />,document.getElementById('app'));