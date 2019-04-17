import React from 'react'
import '@/style/App.css'
import Header from './layout/header'
import route from '@/routes'

const App = () => (
  <div className="App">
    <Header />
    <div>{route()}</div>
  </div>
)

export default App
