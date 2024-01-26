import { useState } from "react";

const CreateTodo = ({ setRenderMe }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        type="text"
        style={{
          padding: "10px",
          margin: "10px",
        }}
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />{" "}
      <br />
      <input
        style={{
          padding: "10px",
          margin: "10px",
        }}
        type="text"
        placeholder="Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <button
        style={{
          padding: "10px",
          margin: "10px",
        }}
        onClick={async () => {
          const data = await fetch("http://localhost:5001/todo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              description: description,
            }),
          });
          const res = await data.json();
          setRenderMe((prev) => !prev);
          return res;
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default CreateTodo;
