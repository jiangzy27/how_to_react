import React from 'react'
import {Link} from 'react-router'
export default React.createClass({
    render(){
        return (
            <div>
                <h2>App</h2>
                <ul>

                    <li><Link to="/repos/jack/qqcom">Repo params</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>

            </div>
        );
    }
});