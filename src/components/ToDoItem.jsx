import { useState } from "react";
import { useTodo } from "../contexts";

const ToDoItem = ({ todo }) => {
  const [isToDoEditable, setisToDoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setisToDoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center gap-3 bg-white/10 rounded-lg shadow-md px-4 py-3 mb-3 transition-all ${
        todo.completed ? "line-through text-gray-400 opacity-60" : "text-white"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer accent-blue-500 w-5 h-5"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`flex-1 bg-transparent rounded-lg px-2 py-1 text-lg font-medium outline-none border transition-colors ${
          isToDoEditable
            ? "border-blue-400 bg-white text-gray-900"
            : "border-transparent"
        } ${todo.completed ? "bg-gray-100" : ""}`}
        value={todoMsg}
        readOnly={!isToDoEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
      />

      <button
        className={`inline-flex items-center justify-center rounded-lg px-3 py-1 text-sm font-semibold transition-colors ${
          isToDoEditable
            ? "bg-green-500 hover:bg-green-600"
            : "bg-blue-500 hover:bg-blue-600"
        } text-white disabled:opacity-50`}
        onClick={() => {
          if (todo.completed) return;
          if (isToDoEditable) {
            editTodo();
          } else {
            setisToDoEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {isToDoEditable ? "Save" : "Edit"}
      </button>

      <button
        className="inline-flex items-center justify-center rounded-lg px-3 py-1 text-sm font-semibold bg-red-500 hover:bg-red-600 text-white transition-colors"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ToDoItem;
