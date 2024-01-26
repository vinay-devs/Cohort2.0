const Todo = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
