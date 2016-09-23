import React,{Component} from 'react';
import {Link} from 'react-router';
class App extends Component{

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
}

export default App;