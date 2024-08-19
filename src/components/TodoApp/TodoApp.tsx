import React, { useState } from "react";
import "./TodoApp.css";
export default function TodoApp() {
  const handleSubmit = (event: React.FormEvent) => {
    console.log(inputValue)
    event.preventDefault();
    setItems((item) => [
      ...item,
      { title: inputValue, id: Date.now().toString() },
    ]);
    setInputValue("");
  };

  const deleteHandler = (id: string) => {
    setItems((items) => items.filter(item => item.id !== id));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>)  =>  {
    console.log(event.target.value);
    setInputValue(event.target.value);
  }

  type Items = {
    title: string;
    id: string;
  };

  const [inputValue, setInputValue] = useState<string>("");
  const [items, setItems] = useState<Items[]>([]);

  return (
    <div className="todo-container">
      <form onSubmit={ handleSubmit} className="input-section">
        <h1> Todo App</h1>
        <input
          type="text"
          value={inputValue}
          onChange={ handleChange}
          placeholder="Enter Items.."
        />
      </form>

      <ul>
        {
            items.map(item => (
                <li key={item.id}>
                {item.title} <i onClick={() => deleteHandler(item.id) } className="fas fa-trash-alt"></i>
              </li>

            ))
        }
       
       
      </ul>
    </div>
  );
}
