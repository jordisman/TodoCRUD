import React from 'react';
import axios from 'axios';
import NewTodo from './NewTodo.jsx';
import TodoList from './TodoList.jsx';
import data from '../data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: data,
      newTodo: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    axios.get('/todos')
      .then(res => {
        console.log('res.data =', res.data)
        this.setState({
          todos: res.data
        });
      });
  }

  handleChange(e) {
    e.preventDefault();
    // const target = e.target;
    // const value = target.value;
    this.setState({
      newTodo: e.target.value
    })
  }

  handleClick(e) {
    e.preventDefault();
    let allTodos = this.state.todos
    if (this.state.newTodo.length > 0) {
      allTodos.push(this.state.newTodo)
    }
    this.setState({
      todos: allTodos
    })
  }


  render() {
    return (
      <div>
        Can you see me?
        <NewTodo todos={this.state.todos}
          handleChange={this.handleChange}
          handleClick={this.handleClick} />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default App;
