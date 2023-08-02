import React from "react";
import "./TodoList.css";

const TodoList = ({ taskIndex, task, onStatusChange, onEdit, onDelete }) => {
  function statusChange() {
    onStatusChange(task.id);
  }

  function editTask() {
    onEdit(task.id, prompt("Edit Task", task.text));
  }
  function deleteTask() {
    onDelete(task);
  }
  return (
    <div className="TodoList">
      {task.completed ? (
        <h1 className="red">
          <del>
            {taskIndex + 1}. {task.text}
          </del>
        </h1>
      ) : (
        <h1 className="green">
          {taskIndex + 1}. {task.text}
        </h1>
      )}

      {task.completed ? (
        <h3 className="red">
          Status: {task.completed ? "Completed" : "Pending"}
        </h3>
      ) : (
        <h3 className="green">
          Status: {task.completed ? "Completed" : "Pending"}
        </h3>
      )}
      <button onClick={statusChange}>Update Status</button>
      <button onClick={editTask}>Edit Task</button>
      <button onClick={deleteTask}>Remove Task</button>
    </div>
  );
};

export default TodoList;
