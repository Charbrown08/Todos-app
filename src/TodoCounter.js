function TodoCounter({ completed, total }) {
  return (
    <h1
      style={{
        fontSize: "24px",
        textAlign: "center",
        margin: 0,
        padding: "48px",
      }}
    >
      Has Completado {completed} de {total} tareas
    </h1>
  );
}

export { TodoCounter };
