import Todo from "./Todo";
const ListadoToDo = ({ todos, setTodoCompleted, setTodo, todoDelete }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll mx-3">
      {todos && todos.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de tareas</h2>
          <p className="text-xl mt-5 mb-5 text-center">
            Administras tus{" "}
            <span className="text-red-600 font-bold">Tareas</span>
          </p>
          <div className="lg:flex lg:justify-evenly">
            <p className="text-center  mt-5 mb-5">
              Total:{" "}
              <span className="text-red-600 font-bold"> {todos.length}</span>
            </p>
            <p className="text-center  mt-5 mb-5">
              Completados:{" "}
              <span className="text-red-600 font-bold">
                {" "}
                {todos.filter((td) => td.completed).length}
              </span>
            </p>
            <p className="text-center  mt-5 mb-5">
              Restantes:{" "}
              <span className="text-red-600 font-bold">
                {" "}
                {todos.filter((td) => !td.completed).length}
              </span>
            </p>
          </div>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              setTodoCompleted={setTodoCompleted}
              setTodo={setTodo}
              todoDelete={todoDelete}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Tareas</h2>
          <p className="text-xl mt-5 mb-5 text-center">
            Comienza Agregando tareas{" "}
            <span className="text-red-600 font-bold">
              Apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoToDo;
