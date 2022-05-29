import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos }) {
  return (
    <div className="todo-container ">
      <ul className="todo-list">
        {todos?.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            todos={todos}
            todo={todo}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
