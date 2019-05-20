import React, { useState, useEffect } from 'react'
import { Route, RouteComponentProps, Switch } from 'react-router'

const Topic = ({ match }: RouteComponentProps<{ id: string }>) => {
  return <h3>Requested Param: {match.params.id}</h3>
}

const TestHooks = () => {
  const [count, setCount] = useState(0)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Switch>
        <Route path="/hooks/33" exact component={() => <div>123</div>} />
        <Route path="/hooks/44" component={() => <div>222</div>} />
        <Route path="/hooks/55/:id" component={Topic} />
      </Switch>
    </div>
  )
}

export default TestHooks
