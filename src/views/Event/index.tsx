import React from 'react'
import { match, RouteComponentProps } from 'react-router-dom'

interface IState {
  title: string
}
interface IProps extends RouteComponentProps<{ id: string }> {}

class Home extends React.Component<IProps, IState> {
  readonly state = {
    title: '纪念刘和珍君',
    testFreshness: true,
  }
  componentDidMount() {
    const id = this.props.match.params.id
    this.setState({
      title: 'sssss',
    })
  }
  render(): React.ReactNode {
    return <div>{this.state.title}</div>
  }
}

export default Home
