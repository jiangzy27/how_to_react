import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Menu} from 'antd';
import $ from 'jquery';
const SubMenu = Menu.SubMenu;

class Sider extends Component{

    constructor(props){
        super(props);
        this.state = {current:''};
    }
    handleClick(e) {
        this.setState({
            current: e.key
        });
        switch(e.key){
            case "1":
                $('#content').attr('src','http://www.baidu.com');
                break;
            case "2":
                $('#content').attr('src','http://www.JD.com');
                break;
            case "3":
                $('#content').attr('src','http://www.sina.com');
                break;
            default:
                $('#content').attr('src','./mypage.html');
                break;
        }
    }
    render() {
        return (
            <div>

                <Menu
                    onClick={this.handleClick.bind(this)}
                    defaultOpenKeys={['sub1']}
                    style={{height:'800px'}}
                    selectedKeys={[this.state.current]}
                    mode="inline"
                >
                    <SubMenu key="sub1" title={<span>网址管理</span>}>
                        <Menu.Item key="1">百度</Menu.Item>
                        <Menu.Item key="2">京东</Menu.Item>
                        <Menu.Item key="3">新浪</Menu.Item>

                    </SubMenu>
                    <SubMenu key="sub2" title={<span>用户管理</span>}>
                        <Menu.Item key="5">头像管理</Menu.Item>
                        <Menu.Item key="6">地址管理</Menu.Item>
                        <SubMenu key="sub3" title="贴吧用户">
                            <Menu.Item key="7">贴吧头像</Menu.Item>
                            <Menu.Item key="8">贴吧地址</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span>系统管理</span>}>
                        <Menu.Item key="9">开启缓存</Menu.Item>
                        <Menu.Item key="10">初始化</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}


ReactDOM.render(<Sider />,document.getElementById('app'));