import React from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";

export default function TodoList({ name, todos, setTodos }) {
  const isActiveList = name === "active" ? true : false;

  return (
    <div className="todo-list">
      <h2 className="todo-list__title">
        {isActiveList ? "Active 🔥" : "Done ✅"}
      </h2>
      <ul>
        {todos
          // active일 때는 isDone이 false인 값만 표시
          // done일 때는 isDone이 true인 값만 표시
          .filter((todo) => isActiveList === !todo.isDone)
          .map((todo) => (
            <Todo
              todo={todo.todo}
              isDone={todo.isDone}
              setTodos={setTodos}
              key={todo.id}
              id={todo.id}
            />
          ))}
      </ul>
    </div>
  );
}
