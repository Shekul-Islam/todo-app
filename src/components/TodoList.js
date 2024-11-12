import React from 'react';
import Todo from './Todo';

function TodoList({ todos, deleteTodo, toggleComplete }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
