import { useState } from "react";
import "./App.css";
function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  function onChangeHandlerTitle(e) {
    setTitle(e.target.value);
  }
  function onChangeHandlerDescription(e) {
    setDescription(e.target.value);
  }
  function deleteHandler(index){

  }
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => onChangeHandlerTitle(e)}
          value={title}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e) => onChangeHandlerDescription(e)}
          value={description}
        />
        <button
          onClick={() =>
            setTodos([
              ...todos,
              {
                title: title,
                description: description,
              },
            ])
          }
        >
          Add
        </button>
      </div>
      <div className="todo-container">
        {todos.map((todo, index) => {
          return (
            <div className="todo-box" key={index} id>
              <h1>{todo.title}</h1>
              <h3>{todo.description}</h3>
              <button onClick={()=>(deleteHandler(index))}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
