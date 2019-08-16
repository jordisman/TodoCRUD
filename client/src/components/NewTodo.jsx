import React from 'react';

const NewTodo = (props) => (
  <div>
    <h4>Add New Todo:</h4>
    <form>
      <input type="text" onChange={props.handleChange} />
      <input type="submit" onClick={props.handleSubmit} />
    </form>
  </div>
)

export default NewTodo;