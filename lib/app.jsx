'use strict';

var React = require('react');

var ButtonStyle = {
width: '100px',
height: '100px'
};

var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
  'render': function onRender () {
    return (
      <button style={ButtonStyle}>{this.props.value}</button>
    );
  }
});

React.render(<Box value='X'/>, document.body);
