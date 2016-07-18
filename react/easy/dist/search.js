'use strict';

//small component
var Search = React.createClass({displayName: "Search",
    checkSth:function(){
        var inputValue = this.refs.myInput.value;
        alert(inputValue);
    },
    render:function(){
        return (
            React.createElement("div", null, 
                this.props.searchType, ":", 
                React.createElement("input", {type: "text", ref: "myInput"}), 
                React.createElement("button", {onClick: this.checkSth}, "Search")
            )


        );
    }
});

var Page = React.createClass({displayName: "Page",
    render:function(){
        return(
            React.createElement("div", null, 
                React.createElement(Search, {searchType: "Title"})

            )

        );
    }
});

ReactDOM.render(
    React.createElement(Page, null),document.getElementById('test')
);