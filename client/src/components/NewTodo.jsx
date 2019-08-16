import React from 'react';

const NewTodo = ({handleChange, addTodo, handleClick}) => {
  // console.log('props in NewTodo =', props);
  return (
  <div>
    <h4>Add New Todo:</h4>
    <form>
      <input type="text" onChange={handleChange} />
      <button type="submit" onClick={handleClick}>Add Todo</button>
    </form>
  </div>
)}

export default NewTodo;

/*
button needs to be onClick, not onSubmit
*/