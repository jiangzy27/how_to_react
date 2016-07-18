'use strict';

//small component
var Search = React.createClass({
    checkSth:function(){
        var inputValue = this.refs.myInput.value;
        alert(inputValue);
    },
    render:function(){
        return (
            <div>
                {this.props.searchType}:
                <input type="text" ref="myInput"/>
                <button onClick={this.checkSth}>Search</button>
            </div>


        );
    }
});

var Page = React.createClass({
    render:function(){
        return(
            <div>
                <Search searchType="Title"></Search>

            </div>

        );
    }
});

ReactDOM.render(
    <Page />,document.getElementById('test')
);