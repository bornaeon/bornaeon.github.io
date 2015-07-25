var React = require('react');
var Repos = require("./repos");

var Root = React.createClass({
  render:function(){
    return (
        <div>
          <Repos data={this.props.data} />
        </div>
    )
  }
});

module.exports = Root;