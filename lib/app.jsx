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
   getInitialState: function() {
	return {value: this.props.initialValue}
   },
    
	componentWillMount: function (){
	setInterval(this.updatetime,300);
	},
	updatetime: function()
	{
	if(this.state.value=='X') this.setState({value:'O'});
	else this.setState({value:'X'});
	},
	
	
   /**
   handleClick: function() {
   var etat = this.state.value;
   var newetat;
   if (etat == 'X') newetat='O';
   else newetat='X';
   this.setState({value:newetat});
   }, */
   

  'render': function onRender () {
    return (
      <button style={ButtonStyle} onClick={this.handleClick}>{this.state.value}</button>
    );
  }
});

React.render(<Box initialValue='O'/>, document.body);
