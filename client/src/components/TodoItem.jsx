import React from 'react';
// Todo items allowed you to click and have a strike line across it but not delete it. It worked as inline css style.

const TodoItem = ({todo}) => {
// if you wanna use console.log, must use {}
  console.log('todo in TodoItem =', todo)
  return (
    <div>
      {todo.task}
    </div>
)}

// class TodoItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       strike: 'none'
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   // toggle line though on click
//   handleClick(e) {
//     if (this.state.strike === 'none') {
//       this.setState({
//         strike: 'line-through'
//       });
//     } else {
//       this.setState({
//         strike: 'none'
//       });
//     }
//   }

//   render() {
//     return (
//       <li
//         style={ {textDecoration: this.state.strike} }
//         onClick={this.handleClick}
//       >
//         {this.props.todo}
//       </li>
//     )
//   }
// }

export default TodoItem;