import React,{ Component } from 'react';
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