import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
