import { useState } from "react";
import "./App.css";
import AddForm from "./components/AddForm/AddForm";
import Header from "./components/Header/Header";
import TodoList from "./TodoList/TodoList";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  console.log(todos);
  return (
    <div className="container">
      {/* 제목 */}
      <Header className="header">Seungmin's To Do List</Header>
      {/* Todo 입력하고 추가하는 form */}
      <AddForm setTodos={setTodos} />
      {/* active/done 투두리스트 */}
      <div className="todo-lists">
        <TodoList name="active" todos={todos} setTodos={setTodos} />
        <TodoList name="done" todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

// todo 초기값

const initialTodos = [
  {
    id: uuidv4(),
    isDone: false,
    title: "리액트 강의",
    todo: "리액트 강의 듣기",
  },
  {
    id: uuidv4(),
    isDone: true,
    title: "투두 리스트",
    todo: "투두 리스트 만들기",
  },
  {
    id: uuidv4(),
    isDone: false,
    title: "자바스크립트",
    todo: "자바스크립트 공부하기",
  },
];
