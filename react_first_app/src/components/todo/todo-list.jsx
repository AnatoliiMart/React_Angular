import React, { useState } from "react";
import "./todo-list.css";
import TodoAdd from "./todo-add";
import TodoFilter from "./todo-filter";
import TodoItem from "./todo-item";
import list from "./data";
import { nanoid } from "nanoid";

const TodoList = () => {
  const [tasks, setTasks] = useState(list);

  const addTask = (title) => {
    setTasks([
      ...tasks,
      {
        id: nanoid(),
        title,
        done: false,
      },
    ]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container">
      <h1 style={{ color: "dodgerblue" }}>ToDo List</h1>

      <div className="todo-list">
        <TodoAdd addTask={addTask} />
        <TodoFilter />

        <div>
          {tasks.map((task) => (
            <TodoItem {...task} removeTask={removeTask} key={task.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
