import React from "react";

function Form({ inputText, setInputText, todos, setTodos }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() },
    ]);

    setInputText("");
  };

  return (
    <form>
      <div className="search">
        <input
          type="text"
          value={inputText}
          className="todo-input"
          placeholder="Add..."
          onChange={inputTextHandler}
        />
        <button
          className="todo-button"
          type="submit"
          onClick={submitTodoHandler}
        >
          <i className="fas fa-plus-circle"></i>
        </button>
      </div>
    </form>
  );
}

export default Form;
