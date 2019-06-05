import React from 'react'
import { requestAny } from '@/api'

class TestApi extends React.Component {
  state = {
    resp: null,
  }
  handleRequest = () => {
    requestAny().then(data => {
      this.setState({
        resp: data,
      })
    })
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="之后可以加这些" />
        <button onClick={this.handleRequest}>点击测试</button>
        <div>
          <p>展示响应：</p>
          <code>{JSON.stringify(this.state.resp)}</code>
        </div>
      </div>
    )
  }
}

export default TestApi
