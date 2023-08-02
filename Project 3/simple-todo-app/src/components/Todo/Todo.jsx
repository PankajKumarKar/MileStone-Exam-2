import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";
import "./Todo.css";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    } else {
      alert("Enter a task");
    }
  };

  const handleRemoveTask = (taskId) => {
    if (!taskId.completed) return alert("Task is pending !!!");
    setTasks(tasks.filter((task) => task.id !== taskId.id));
  };

  const handleEditTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="Todo">
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <div className="list">
        {tasks.map((task, index) => (
          <TodoList
            key={task.id}
            taskIndex={index}
            task={task}
            onStatusChange={handleToggleComplete}
            onEdit={handleEditTask}
            onDelete={handleRemoveTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
