import React,{Component} from 'react'
import {Link} from 'react-router'
class App extends Component{
    //ES7阶段草案，静态属性
    static contextTypes = { router: React.PropTypes.object};

    handleRedirect(event){
        event.preventDefault();
        const userName = "jack";
        const email = "jack@126.com";
        //解析变量用$
        const path = `/repos/${userName}/${email}`;
        //跳转
        this.context.router.push(path)
    }

    render(){
        return (
            <div>
                <h2>App</h2>
                <ul>

                    <li><Link to="/repos/jack/qqcom">Repo params</Link></li>

                </ul>
                <button onClick={this.handleRedirect.bind(this)}>跳转</button>
            </div>
        );
    }
}
export default App;