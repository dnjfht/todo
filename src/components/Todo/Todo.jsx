import React from "react";
import Button from "../Button/Button";
import "./Todo.css";

export default function Todo({ todo, isDone, id, setTodos, title }) {
  //todo 제거하는 함수
  const deleteTodo = () => {
    // 해당 todo를 제외한 todos 배열을 업데이트
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // 완료된 todo 취소하는 함수
  const cancelTodo = () => {
    setTodos((prev) =>
      prev.map((todo) => {
        // 해당 todo의 isDone을 false로 변경
        if (todo.id === id) {
          return { ...todo, isDone: false };
        }
        // 다른 todo는 그대로 반환
        return todo;
      })
    );
  };

  // todo를 완료하는 함수
  const doneTodo = () => {
    setTodos((prev) =>
      prev.map((todo) => {
        // 해당 todo의 isDone을 true로 변경
        if (todo.id === id) {
          return { ...todo, isDone: true };
        }
        // 다른 todo는 그대로 반환
        return todo;
      })
    );
  };

  return (
    <li className="todo__container" id={id} key={id}>
      <p className="todo">{todo}</p>

      <div className="buttons">
        <Button handleClick={deleteTodo} value="삭제" />
        {isDone ? (
          // 완료된 todo는 취소버튼 표시
          <Button handleClick={cancelTodo} value="취소" />
        ) : (
          // 완료되지 않은 todo는 완료버튼 표시
          <Button handleClick={doneTodo} value="완료" />
        )}
      </div>
    </li>
  );
}
