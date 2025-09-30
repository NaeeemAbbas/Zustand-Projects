import React, { useState } from "react";
import usetodoStore from "../store/project2";

const Project2 = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = usetodoStore();
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    addTodo(input);
    setInput("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Zustand Todo Apps</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo..."
      />
      <button onClick={handleAdd}>Add</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              margin: "10px 0",
            }}
          >
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button
              onClick={() => removeTodo(todo.id)}
              style={{ marginLeft: "10px" }}
            >
              ❌ g
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project2;
