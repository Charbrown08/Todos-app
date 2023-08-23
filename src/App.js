import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar agua", completed: true },
  { text: "Hacer ejercicio", completed: true },
  { text: "Leer", completed: false },
  { text: "Escribir", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={2} total={5} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
