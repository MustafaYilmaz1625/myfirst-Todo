import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/Todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo Listem</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
