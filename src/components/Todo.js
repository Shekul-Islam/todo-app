import React from 'react';

function Todo({ todo, index, deleteTodo, toggleComplete }) {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "" }}>
      {todo.text}
      <button onClick={() => toggleComplete(index)}>
        {todo.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
}

export default Todo;
