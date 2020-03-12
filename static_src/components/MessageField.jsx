import React from 'react';
import Message from './Message';

export default class MessageField extends React.Component{
	state = {
		messages: [
		{ name: "Sergey", content: "Привет" },
		{ name: "Sergey", content: "Как дела?" },
		]
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

	
	render(){
		const messageList = this.state.messages.map((item, key) => (
			<Message name={item.name} content={item.content} key={key}/>));
		return (
			<div>
			<ul>
				{ messageList }
			</ul>
			<button onClick={this.handleClick}>Отправить сообщение</button>
			</div>
		)
	}
}
