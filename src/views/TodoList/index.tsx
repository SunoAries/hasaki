import React, { useState, useEffect, FormEvent } from 'react'
import { Route, RouteComponentProps, Switch } from 'react-router'
import { TODO } from './types'

const Topic = ({ match }: RouteComponentProps<{ id: string }>) => {
  return <h3>Requested Param: {match.params.id}</h3>
}

function AddForm({ addTodo }: { addTodo: (todo: TODO) => void }) {
  const [value, setValue] = useState('')
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!value) return
    addTodo({
      name: value,
      complete: false,
    })
    setValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
    </form>
  )
}

/***
 *  Test Hooks for todo List
 *
 * ***/

const TestHooks = () => {
  const [TodoList, setTodos] = useState<TODO[]>([
    {
      name: 'fuck a hold',
      complete: false,
    },
    {
      name: 'eat meal',
      complete: false,
    },
    {
      name: 'exercise',
      complete: false,
    },
  ])

  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${count} times`
  // })

  const addTodo = (todo: TODO) => {
    setTodos([todo, ...TodoList])
  }

  const deleteTodo = (index: number) => {
    const newTodo = [...TodoList]
    newTodo.splice(index, 1)
    setTodos(newTodo)
  }

  const completeTodo = (index: number) => {
    const newTodo = [...TodoList]
    newTodo[index].complete = !newTodo[index].complete
    setTodos(newTodo)
  }

  const TodoItem = (props: { todo: TODO; index: number }) => (
    <p>
      {props.todo.name}
      {props.todo.complete ? ' deleted' : ' undeleted'}
      <button onClick={() => deleteTodo(props.index)}>delete</button>
      <button onClick={() => completeTodo(props.index)}>complete</button>
    </p>
  )

  return (
    <div>
      {TodoList.map((todo, index) => (
        <TodoItem todo={todo} index={index} />
      ))}
      <AddForm addTodo={addTodo} />
    </div>
  )
}

export default TestHooks
