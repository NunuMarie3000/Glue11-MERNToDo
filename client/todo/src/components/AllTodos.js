import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'

export default class AllTodos extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      todos: '',
    }
  }

  getTodos = async() => {
    const url = `http://localhost:5003/todos`
    const todos = await axios.get(url)
    this.setState({todos: todos.data}, ()=>console.log(this.state.todos))
  }
  componentDidMount = () =>{
    this.getTodos()
  }

  render() {
    return (
      <>
        {this.state.todos !== '' && this.state.todos.map(todo=><Card key={todo._id} style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{todo.todoDescription}</Card.Title>
        <Card.Text>{todo.dueDate}</Card.Text>
      </Card.Body>
    </Card>)}
      </>
    )
  }
}
