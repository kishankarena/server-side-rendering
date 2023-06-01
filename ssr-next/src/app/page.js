// "use client";
// import { useEffect, useState } from "react";

const Home = async () => {
  const { todos } = await fetchTodos();
  // Traditional way to fetch data
  // const [todos, setTodos] = useState([]);
  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     setTimeout(async () => {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/todos"
  //       );
  //       const data = await response.json();
  //       setTodos(data);
  //     }, 3000);
  //   };
  //   fetchTodos();
  // });
  return (
    <div>
      <h1>Server side rendering in next js</h1>
      {todos?.length === 0 ? (
        <h2>Loading............</h2>
      ) : (
        todos?.map((todo) => (
          <div key={todo.id}>
            <p>
              {todo.id} :{todo.title}
            </p>
          </div>
        ))
      )}
    </div>
  );
};
export default Home;
export const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch todos");
  }
  const data = await response.json();
  return { todos: data };
};
