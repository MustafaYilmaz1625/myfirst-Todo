import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos }) {
  return (
    <div className="todo-container ">
      <ul className="todo-list">
        {todos?.map((todo,index) => (
          <Todo
            text={todo.text}
            key={todo.id}
            todos={todos}
            index={index}
            todo={todo}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
