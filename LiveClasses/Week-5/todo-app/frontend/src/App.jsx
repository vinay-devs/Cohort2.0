import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [renderMe, setRenderMe] = useState(false);

  useEffect(() => {
    const getTodos = async () => {
      const data = await fetch("http://localhost:5001/todos");
      const res = await data.json();
      setTodos(res.todo);
    };
    getTodos();
  }, [renderMe]);
  return (
    <>
      <div>
        <CreateTodo setRenderMe={setRenderMe} />
        <Todo todos={todos} />
      </div>
    </>
  );
}

export default App;
