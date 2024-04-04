import {useState} from "react";
import {makeRequest} from "./api/api";
import SideMenu from "./components/sidemenu/SideMenu";
import ChatMessage from "./components/chatmessage/ChatMessage";

import './styles/App.css';

function App () {
	const [input, setInput] = useState('');
	const [chatlog, setChatlog] = useState([{
		user: 'gtp',
		message: 'Como posso te ajudar hoje?'
	}])
	const appName = "ChatGPT API Integration";

	async function handleSubmit (e) {
		e.preventDefault();

		let response = await makeRequest({prompt: input});

		response = response.data.content.split('\n')
			.map(line => <p>{line}</p>);

		console.log('App.js - handleSubmit - response: ', response)

		setChatlog([...chatlog, {
				user: 'me',
				message: `${input}`
			},
			{
				user: 'gpt',
				message: response
			}
		]);

		setInput('');
	}

	console.log('App.js - chatlog: ', chatlog);

	return (
		<div className="App">
			<SideMenu />
			<section className="chatbox">
				<div className="chat-log">
					{chatlog.map((message, index) => <ChatMessage key={index} message={message} />)}
				</div>
				<div className="chat-input-holder">
					<form onSubmit={handleSubmit}>
						<input
							rows='1'
							className='chat-input-textarea'
							value={input}
							onChange={e => setInput(e.target.value)}
						/>
					</form>
				</div>
			</section>
		</div>
	);
}

export default App;
