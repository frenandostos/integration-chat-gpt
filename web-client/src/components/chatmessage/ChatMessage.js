import React from 'react';
import {Avatar} from '../../assets/avatar/Avatar';
import './ChatMessage.css';

const ChatMessage = (props) => {
	console.log('chat executed');
	console.log('message', props.message)
	return (
		<div className={`chat-message ${props.message.user === 'gpt'} && "chatgpt"`}>
			<div className="chat-message-center">
				<div className={`avatar ${props.message.user === 'gpt' && "chatgpt"}`}>
					{props.message.user === 'gpt' && (
						<Avatar/>
					)}
				</div>
				<div className="message">
					{props.message.message}
				</div>
			</div>
		</div>
	);
}

export default ChatMessage;