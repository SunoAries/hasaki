import React from 'react'
import { render } from 'react-dom'
import '@/style/index.css' // global css setting
import App from './App'
require('@babel/polyfill')

render(<App />, document.getElementById('root'))
