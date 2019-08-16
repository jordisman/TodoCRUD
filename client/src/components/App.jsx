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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getTodos = this.getTodos.bind(this);
    this.addTodo = this.addTodo.bind(this);
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

  addTodo() {
    const todo = this.state.todo;
    axios.post('/todos', todo)
      .then(()=> {
        console.log('post data:', res.data)
        this.getTodos();
      });
  }

  handleChange(e) {
    e.preventDefault();
    console.log('handle change works')
    this.setState({
      newTodo: e.target.value
    })
  }

  handleClick(e) {
    e.preventDefault();
    console.log('Input clicked!')
    const allTodos = this.state.todos;
    const newTodo = this.state.newTodo;
    const headers = {'Content-Type': 'application/json'}

    if (newTodo.length > 0) {

      axios.post('/todos', newTodo, {headers: headers})
        .then(res => {
          console.log('post data:', res.data)
          this.getTodos();
        })
        .catch(err => {
          console.log('fail to post:', err);
        })
      allTodos.push(this.state.newTodo);
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
          handleClick={this.handleClick}
          addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default App;
