/** @jsx React.DOM */

var React = require('react')
  , pellet = require('pellet');

var inlinePlayerComponent = React.createClass({
  render: function() {

    return (
      <div>Hellow World</div>
    );
  }
});

/* Example to split file into parts
require.ensure([], function() {
  require('./other.js');
});

if(process.env.NODE_ENV) {}
if(SERVER_ENV) {}
if(BROWSER_ENV) {}
*/
