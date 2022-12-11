import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button/Button";
import "./AddForm.css";

export default function AddForm({ setTodos }) {
  const [todoValue, setTodoValue] = useState("");

  // inpit 값이 바뀔 때 todoCalue 값을 업데이트
  const handleChange = (event) => {
    setTodoValue(event.target.value);
  };
  console.log(todoValue);

  // form이 submit 되면 실행되는 함수. todo를 추가함
  const addTodo = (event) => {
    event.preventDefault();
    const todo = todoValue.trim(); // todo 앞뒤 공백을 제거
    // todo 입력값이 없으면 초기화 후 리턴
    if (todo.length === 0) {
      setTodoValue("");
      return;
    }
    // todo 추가
    setTodos((prev) => [...prev, { todo, isDone: false, id: uuidv4() }]);
    setTodoValue("");
  };

  return (
    <div className="addform__container">
      <form className="addform" onSubmit={addTodo}>
        <label className="addform__label" htmlFor="new-todo">
          To Do
        </label>
        <input
          className="addform__input"
          type="text"
          id="new-todo"
          value={todoValue}
          onChange={handleChange}
        />
        <Button value="추가" />
      </form>
    </div>
  );
}
