import React,{ Component } from 'react';
import {Link} from 'react-router';

class Repos extends Component{

    render(){
        return (

                <div>
                {this.props.params.userName}==={this.props.params.email}
                </div>
        );
    }
}

export default Repos;