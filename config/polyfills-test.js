require('./polyfills')

const { configure } = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

configure({ adapter: new Adapter() })

process.chiffon = {
  head: '2ac4e5d7f6d296d1c8b7fa89ebf0ff5474a1acbf',
  time: 1527067667089,
  type: process.env.TYPE || 'C',
}
