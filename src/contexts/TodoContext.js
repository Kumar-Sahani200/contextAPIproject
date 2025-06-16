/* eslint-disable no-unused-vars */

import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo message",
      completed: false,
    },
  ],

  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const ToDoProvider = TodoContext.Provider;

// Three steps to create a context in React:
// 1. Create a context using createContext - works like a global state
//    - This context will hold the state and functions related to todos.
// 2. Create a provider component that uses the context
// 3. Use the context in your components with useContext
//    - This can be done with a custom hook like useTodo
