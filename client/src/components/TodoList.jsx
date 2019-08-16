import React from 'react';
import TodoItem from './TodoItem.jsx';

const TodoList = ({ todos }) => {
  console.log('todos in TodoList =', todos);
  return (
    <div>
      {todos.map((item, index) => (
          <TodoItem todo={item} key={index} />
        )
      )}
    </div>
)}

export default TodoList;

