import { useState, useEffect } from "react";
const Formulario = ({ todos, setTodos, todo, setTodo }) => {
  const [text, setText] = useState("");
  useEffect(() => {
    if (Object.keys(todo).length > 0) {
      setText(todo.text);
    }
  }, [todo]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      console.log("error");
      return;
    }
    const objTodo = {
      id: 0,
      text,
      completed: false,
    };
    if (todo.id) {
        objTodo.id = todo.id;
        const todosUpdated = todos.map((tdState) =>
        tdState.id === todo.id ? objTodo : tdState
      );
      setTodos(todosUpdated)
      setTodo({})
    } else {
      objTodo.id = generarId();
      setTodos([...todos, objTodo]);
    }
    //reiniciar formulario
    setText("");
  };
  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-3">
      <h2 className="font-black text-3xl text-center">Formulario</h2>
      <p className="text-lg mt-5 text-center">Añade To Do</p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl py-10 px-5 mb-10"
      >
        <div className="mb-2">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="title"
          >
            Tarea
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Ingrese la tarea a realizar"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <input
          type="submit"
          value={todo.id ? "Editar Tarea" : "Agregar Tarea"}
          className="bg-red-600 w-full p-3 text-white font-bold hover:bg-red-700 cursor-pointer transition-all"
        />
      </form>
    </div>
  );
};

export default Formulario;
