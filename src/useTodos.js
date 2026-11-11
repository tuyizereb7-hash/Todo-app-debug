// import { useEffect, useState } from "react";
// import { STARTER_TODOS } from "./data";
// import { loadTodos, saveTodos } from "./storage";

// export function useTodos() {
//   const [todos, setTodos] = useState(() => loadTodos(STARTER_TODOS));

//   useEffect(() => {
//     saveTodos(todos);
//   }, [todos]);

//   function addTodo(text) {
//     if (!text) return;

//     setTodos([
//       ...todos,
//       {
//         id: todos.length + 1,
//         text,
//         completed: false,
//       },
//     ]);
//   }

//   function toggleTodo(id) {
//     const todo = todos.find((item) => item.id === id);
//     todo.completed = !todo.completed;
//     setTodos(todos);
//   }

//   function deleteTodo(id) {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   }

//   function updateTodo(id, text) {
//     if (!text.trim()) return;

//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, title: text.trim() } : todo
//       )
//     );
//   }

//   function clearCompleted() {
//     const next = [...todos];

//     for (let i = 0; i < next.length; i++) {
//       if (next[i].completed) {
//         next.splice(i, 1);
//       }
//     }

//     setTodos(next);
//   }

//   return {
//     todos,
//     addTodo,
//     toggleTodo,
//     deleteTodo,
//     updateTodo,
//     clearCompleted,
//   };
// }









import { useEffect, useState } from "react";
import { STARTER_TODOS } from "./data";
import { loadTodos, saveTodos } from "./storage";

export function useTodos() {
  const [todos, setTodos] = useState(() => loadTodos(STARTER_TODOS));

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  function addTodo(text) {
    if (!text) return;

    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text,
        completed: false,
      },
    ]);
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function updateTodo(id, text) {
    if (!text.trim()) return;

    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, text: text.trim() }
          : todo
      )
    );
  }

  function clearCompleted() {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    clearCompleted,
  };
}