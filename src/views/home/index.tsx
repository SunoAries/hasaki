import React from 'react'
import { testGet } from '@/api/global'

interface IState {
  title: string
}
class Home extends React.Component<{}, IState> {
  readonly state = {
    title: '纪念刘和珍君',
    testFreshness: true,
  }
  componentDidMount() {
    testGet().then(data => {
      // TODO 等我来写真的逻辑
    })
    this.setState({
      title: 'sssss',
    })
  }
  render(): React.ReactNode {
    return (
      <div>
        1. 大事列表 2. 网站介绍 3. 创建新的列表
        {this.state.title}
      </div>
    )
  }
}

export default Home
