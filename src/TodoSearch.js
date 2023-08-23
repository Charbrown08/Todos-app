import "./TodoSearch.css";
function TodoSearch() {
  return (
    <input
      placeholder="Sacar la basura todos los lunes "
      className="TodoSearch"
      onChange={(event) => {
        console.log("Escribistes en el TodoSearch");
        console.log(event);
        console.log(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
