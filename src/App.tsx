import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 配置的react-router-config还是这样就挺好了
import TestHooks from './views/hooks'
import LargeList from './views/large-list'
import Header from './layout/header'

const App = () => (
  <div className="App">
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={() => <div>index</div>} />
        <Route path="/hooks/" component={TestHooks} />
        <Route path="/users/" component={LargeList} />
      </div>
    </Router>
  </div>
)

export default App
