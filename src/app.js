import Header from './components/header';

import initialEmails from './data/emails';

import './styles/app.css';

import { useState } from 'react';

function App() {
	const [inbox, setInbox] = useState(initialEmails);
  const [hideReadBtn, setHideReadBtn] = useState(false)

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

	const unreadEmails = inbox.filter((email) => email.read === false);

	const starredEmails = inbox.filter((email) => email.starred === true);

  const readEmails = inbox.filter((email) => email.read === true)

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
							onChange={() => setHideReadBtn(true)}
							checked={hideReadBtn}
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
				</ul>
			</main>
		</div>
	);
}

export default App;
