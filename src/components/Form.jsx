import { useState } from "react";


export const FormTodo = ({ addTodo }) => {
  
  const [value, setValue] = useState('')

  const submitValue = (e) => {
    e.preventDefault()
    addTodo(value)

    setValue("");
  }

  const changeValue = (e) =>{
    setValue(e.target.value)
  }

  
  return (
    <form onSubmit={submitValue} className="form-todo">
      <input
        value={value}
        onChange={changeValue}
        className="input-todo"
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button className="todo-btn" type="submit">
        Adicionar
      </button>
    </form>
  );
};
