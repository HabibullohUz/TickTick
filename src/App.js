import "./App.css";
import Sidebar from "./components/Sidebar";
import NavList from "./components/NavList";
import TodoTask from "./components/TodoTask";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(todo) {
    setTodos((todos) => [...todos, todo]);
  }

  function handleToggleTodo(id) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  return (
    <div className="App">
      <div className="container-layout">
        <Sidebar />
        <NavList />
        <TodoTask
          onToggle={handleToggleTodo}
          onAddTodo={handleAddTodo}
          todos={todos}
        />
      </div>
    </div>
  );
}

export default App;

