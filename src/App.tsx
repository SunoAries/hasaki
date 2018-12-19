import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const App = () => (
  <div className="App">
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={() => <div>index</div>} />
        <Route path="/about/" component={() => <div>about</div>} />
        <Route path="/users/" component={() => <div>users</div>} />
      </div>
    </Router>
  </div>
)

export default App
