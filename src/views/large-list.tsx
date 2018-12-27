import React from 'react'

type ListItemProps = {
  name: string
  key: number
}

const ListItem = ({ name }: ListItemProps) => (
  <span>
    {name} <span>s</span> <img src="s" alt="" />{' '}
  </span>
)

class LargeList extends React.Component {
  state = {
    data: Array(10000).fill('less>'),
  }
  render() {
    return (
      <>
        <button
          onClick={() => {
            const data = this.state.data
            data[Math.floor(Math.random() * 10000)] = 'SSSSSSSSSSSSSS'
            data[Math.floor(Math.random() * 10000)] = 'SSSSSSSSSSSSSS'
            data[Math.floor(Math.random() * 10000)] = 'SSSSSSSSSSSSSS'
            this.setState({
              data,
            })
          }}
        >
          click me
        </button>
        <ul>
          {this.state.data.map((item, index) => (
            <ListItem key={index} name={item} />
          ))}
        </ul>
      </>
    )
  }
}

export default LargeList
