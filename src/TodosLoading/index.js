import React from "react";
import "./TodoLoading.css";
function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <span>
        <p className="LoadingTodo-completeIcon"></p>
      </span>
      <span>
        <p className="LoadingTodo-deleIcon"></p>
      </span>
    </div>
  );
}

export { TodosLoading };
