require('./polyfills')

const { configure } = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

configure({ adapter: new Adapter() })

process.chiffon = {
  time: Date().now,
}
