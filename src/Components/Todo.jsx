import { useState, useEffect } from "react";
const Todo = ({ todo, setTodoCompleted, setTodo, todoDelete }) => {
  const { text, completed } = todo;
  const getCompleted = (e) => {
    setTodoCompleted({
      id: todo.id,
      text: todo.text,
      completed: !completed,
    });
  };
  const setTodoClick = () =>{
    setTodo(todo)
  }
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <div className="flex justify-between">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Tarea:{" "}
          <span
            className={`"font-normal normal-case ${
              completed ? "line-through" : ""
            }`}
          >
            {text}
          </span>
        </p>
        <input
          type="checkbox"
          name="completed"
          id="completed"
          value={completed}
          onChange={getCompleted}
        />
      </div>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          onClick={setTodoClick}
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg"
        >
          Editar
        </button>
        <button
          type="button"
          onClick={() => todoDelete(todo.id)}
          className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Todo;
