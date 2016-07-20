import React from 'react'
import {Link} from 'react-router'
export default React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },

    handleRedirect(event){
        event.preventDefault();
        const userName = "jack";
        const email = "jack@126.com";
        //解析变量用$
        const path = `/repos/${userName}/${email}`;
        //跳转
        this.context.router.push(path)
    },
    render(){
        return (
            <div>
                <h2>App</h2>
                <ul>

                    <li><Link to="/repos/jack/qqcom">Repo params</Link></li>

                </ul>
                <button onClick={this.handleRedirect}>跳转</button>
            </div>
        );
    }
});