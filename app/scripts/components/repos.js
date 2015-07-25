var React = require('react');

var Repos = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },
  render: function(){
    var repos = this.props.data.map(function(repo, index){
      return (
        <li className="list-group-item" key={index}>
          {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
          {repo.description && <p> {repo.description}</p>}
        </li>
      );
    });
    return (
      <div>
        <ul className="list-group dark">
          {repos}
        </ul>
      </div>
    )
  }
});

module.exports = Repos;