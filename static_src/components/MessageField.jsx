import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import Message from './Message';
import '../styles/style.css';

export default class MessageField extends React.Component{
	//constructor(props) {
	//	super(props);
	//	this.textInput = React.createRef();
	//}
	
	state = {
		messages: [
		{ name: "BOT", content: "Привет" },
		{ name: "BOT", content: "Как дела?" },
		],
		input: '',
	};
	
	handleClick = () => {
		this.setState({ messages: [...this.state.messages, {name: "Sergey", content: "Давно не виделись . . ."}] });
	};
	
	componentDidUpdate(){
		const lastMessage = this.state.messages[this.state.messages.length-1];
		
		if(lastMessage.name != "BOT"){
			setTimeout(() =>
			this.setState(
				{messages: [...this.state.messages, {name: "BOT", content: "бип-боп"}]}), 1000);
		}
	}
	
	//componentDidMount() {
	//	this.textInput.current.focus();
	//}

	handleClick = (message) => {
		this.sendMessage(message)
	};

	handleChange = (event) => {
		this.setState({ input: event.target.value });
	};

	handleKeyUp = (event, message) => {
		if (event.keyCode === 13) { // Enter
			this.sendMessage(message)
		}
	};
  
	sendMessage = (message) => {
		this.setState({ messages: [ ...this.state.messages, {name: 'me', content: message} ] });
	};


	
	render(){
		const messageList = this.state.messages.map((item, key) => (
			<Message name={item.name} content={item.content} key={key}/>));
		return (
			<div className="layout">
			<div className="message-field">
				{ messageList }
			</div>

			<TextField
				autoFocus
				variant = "outlined"
				style = { { fontSize: '22px' } }
				placeHolder = "Введите сообщение . . ."
				onChange = { this.handleChange }
				onKeyUp = { (event) => this.handleKeyUp(event, this.state.input) }
           />
			 <Button
			variant="contained"  
			color="primary"
			style={ { fontSize: '22px' } } 
			onClick={ () => this.handleClick(this.state.input) }>Send</Button>
			</div>
		)
	}
}
