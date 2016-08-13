var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    );
  }
});
