import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component{
	static propTypes = {
		name: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
	};
	
	render(){
		return <li><strong>{this.props.name} :</strong> {this.props.content}</li>
	}
}
