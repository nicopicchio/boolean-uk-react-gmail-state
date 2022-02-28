import Header from './components/header'

import initialEmails from './data/emails'

import './styles/app.css'

import { useState } from 'react'

function App() {
  const [inbox, setInbox] = useState(initialEmails)
  
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
          {inbox.map(function(email) {
            return (
            <li className="email">
            <div className="select">
            <input
              className="select-checkbox"
              type="checkbox"/>
            </div>
            <div className="star">
            <input
              className="star-checkbox"
              type="checkbox"
            />
            </div>
            <div className="sender">{email.sender}</div>
            <div className="title">{email.title}</div>
            </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}

export default App
