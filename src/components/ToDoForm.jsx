import { useState } from "react";
import { useTodo } from "../contexts/index";

const ToDoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex py-8">
      <input
        type="text"
        placeholder="add to do"
        className="w-full boarder-white border-2 rounded-lg p-2"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-lg px-4 py-2 ml-2"
      >
        Add
      </button>
    </form>
  );
};

export default ToDoForm;
