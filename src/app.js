import Header from './components/header';

import initialEmails from './data/emails';

import './styles/app.css';

import { useState } from 'react';

function App() {
	const [inbox, setInbox] = useState(initialEmails);
	const [hideReadBtn, setHideReadBtn] = useState(false);

	const toggleRead = (targetEmail) => {
		setInbox(
			inbox.map((email) => {
				return email === targetEmail ? { ...email, read: !email.read } : email;
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

	const unreadEmails = inbox.filter((email) => email.read === false);

	const starredEmails = inbox.filter((email) => email.starred === true);

	let filteredEmails
	if (hideReadBtn) {
		filteredEmails = inbox.filter((email) => !email.read);
	} else filteredEmails = inbox;

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
						<span className="count">{unreadEmails.length}</span>
					</li>
					<li
						className="item"
						// onClick={() => {}}
					>
						<span className="label">Starred</span>
						<span className="count">{starredEmails.length}</span>
					</li>

					<li className="item toggle">
						<label for="hide-read">Hide read</label>
						<input
							id="hide-read"
							type="checkbox"
							onChange={(event) => setHideReadBtn(event.target.checked)}
							checked={hideReadBtn}
						/>
					</li>
				</ul>
			</nav>
			<main className="emails">
				{filteredEmails.map((email) => {
					return (
						<li className={`email ${email.read ? 'read' : 'unread'}`}>
							<div className="select">
								<input
									className="select-checkbox"
									type="checkbox"
									onChange={() => toggleRead(email)}
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
			</main>
		</div>
	);
}

export default App;
