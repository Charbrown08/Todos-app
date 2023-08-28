import "./TodoCounter.css";
function TodoCounter({ completed, total }) {
  return (
    <h1 className="TodoCounter">
      Has Completado <span>{completed}</span> de <span>{total}</span> tareas
    </h1>
  );
}

export { TodoCounter };
