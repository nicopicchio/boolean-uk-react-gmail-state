import Header from './components/header';

import initialEmails from './data/emails';

import './styles/app.css';

import { useState } from 'react';

function App() {
	const [inbox, setInbox] = useState(initialEmails);

	const toggleRead = (targetEmail) => {
		setInbox(
			inbox.map((email) => {
				if (email === targetEmail) {
					return { ...email, read: !email.read };
				}
				return email;
			})
		);
	};

	const toggleStarred = (targetEmail) => {
		setInbox(
			inbox.map((email) => {
				if (email === targetEmail) {
					return { ...email, starred: !email.starred };
				}
				return email;
			})
		);
	};

  

	// const countEmailsToRead = (inboxArray) => {
	// 	let count;
	// 	inboxArray.filter((email) => {
	// 		if (email.read === true) {
	// 			return count + 1;
	// 		} else count = count;
	// 	});
	// };

	return (
		<div className="app">
			<Header />
			<nav className="left-menu">
				<ul className="inbox-list">
					<li
						className="item active"
						// onClick={() => {}}
					>
						<span className="label">Inbox</span>
						<span className="count">?</span>
					</li>
					<li
						className="item"
						// onClick={() => {}}
					>
						<span className="label">Starred</span>
						<span className="count">?</span>
					</li>

					<li className="item toggle">
						<label for="hide-read">Hide read</label>
						<input
							id="hide-read"
							type="checkbox"
							checked={false}
							// onChange={() => {}}
						/>
					</li>
				</ul>
			</nav>
			<main className="emails">
				<ul>
					{inbox.map((email) => {
						return (
							<li className="email">
								<div className="select">
									<input
										className="select-checkbox"
										type="checkbox"
										onChange={(e) => toggleRead(email, e)}
										checked={email.read}
									/>
								</div>
								<div className="star">
									<input
										className="star-checkbox"
										type="checkbox"
										onChange={() => toggleStarred(email)}
										checked={email.starred}
									/>
								</div>
								<div className="sender">{email.sender}</div>
								<div className="title">{email.title}</div>
							</li>
						);
					})}
				</ul>
			</main>
		</div>
	);
}

export default App;
