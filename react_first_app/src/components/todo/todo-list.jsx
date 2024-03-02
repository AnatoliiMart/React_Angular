import React, { useEffect, useReducer, useState } from "react";
import "./todo-list.css";
import TodoAdd from "./todo-add";
import TodoFilter from "./todo-filter";
import TodoItem from "./todo-item";
import { TodoReducer } from "./todo-reducer";

const TodoList = () => {
  const [tasks, dispatch] = useReducer(TodoReducer, []);

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    dispatch(
      {
        type: "restore",
        payload: JSON.parse(localStorage.getItem("tasks") || []),
      }
    )
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]) 

  const filterMap = {
    ToDo: (task) => !task.done,
    Done: (task) => task.done,
    All: () => true,
  }

  const addTask = (title) => {
    dispatch({
      type: "create",
      payload: title,
    });
  };

  const removeTask = (id) => {
    dispatch({
      type: "remove",
      payload: id,
    });
  };

  const toggleDone = (id) => {
    dispatch({
      type: "changeDone",
      payload: id,
    });
  }

  const updateTask = (id, title) => {
    dispatch({
      type: "update",
      payload: {id, title},
    });
  }

  return (
    <div className="container">
      <h1 className="list-header">ToDo List</h1>

      <div className="todo-list">
        <TodoAdd addTask={addTask} />
        <TodoFilter setFilter={setFilter} filterMap={filterMap} activeFilter={filter}/>

        <div className="todos-container">
          {
            tasks.filter(filterMap[filter]).map((task) => (
              <TodoItem {...task} 
                removeTask={removeTask} 
                toggleDone={toggleDone} 
                updateTask={updateTask} 
                key={task.id} 
              />)
            )
          }
        </div>
      </div>
    </div>
  );
};

export default TodoList;
