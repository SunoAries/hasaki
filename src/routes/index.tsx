import { BrowserRouter as Router, Route } from 'react-router-dom'
// 配置的react-router-config还是这样就挺好了
import Home from '@/views/home'
import TestHooks from '@/views/hooks'
import Event from '@/views/Event'
import LargeList from '@/views/large-list'
import TEST from '@/views/Test'
import React from 'react'

const routes = () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/Event/:id" component={Event} />
      <Route path="/hooks/" component={TestHooks} />
      <Route path="/users/" component={LargeList} />
      <Route path="/testApi/" component={TEST} />
    </div>
  </Router>
)

export default routes
