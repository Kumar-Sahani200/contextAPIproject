/* eslint-disable no-unused-vars */

import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoItem from "./components/ToDoItem";
import { ToDoProvider } from "./contexts";
import { useEffect, useState } from "react";
import Footer from "./components/partials/footer";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <ToDoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <h1 className="text-3xl font-bold underline">Hello ji!</h1>
      <ToDoForm />
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <ToDoItem todo={todo} />
          </div>
        );
      })}
      <Footer />
    </ToDoProvider>
  );
}

export default App;
