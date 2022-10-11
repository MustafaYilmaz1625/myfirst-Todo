import React from 'react'

function Todo({ text, todos, setTodos, todo, index }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id))
  }

  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    }))
  }

  return (

    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check-circle"></i>
      </button>

      <li className="todo-item">{index+1}. {text}</li>

      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fa fa-minus-circle"></i>
      </button>
    </div>

  )
}

export default Todo