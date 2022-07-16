import { useState, useEffect } from "react";
import Formulario from "./Components/Formulario";
import Header from "./Components/Header";
import ListadoToDo from "./Components/ListadoToDo";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});
  const [todoCompleted, setTodoCompleted] = useState({});

  const todoDelete = (id) => {
    const todosUpdated = todos.filter(tdState => tdState.id != id);
    setTodos(todosUpdated)
  };

  useEffect(() => {
    const todosUpdated = todos.map((tdState) =>
      tdState.id === todoCompleted.id ? todoCompleted : tdState
    );
    setTodos(todosUpdated);
  }, [todoCompleted]);

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          todos={todos}
          setTodos={setTodos}
          todo={todo}
          setTodo={setTodo}
        />
        <ListadoToDo
          todos={todos}
          setTodoCompleted={setTodoCompleted}
          setTodo={setTodo}
          todoDelete={todoDelete}
        />
      </div>
    </div>
  );
}

export default App;
