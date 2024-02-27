import React, { useState } from "react";
import classNames from "classnames";

const TodoItem = ({ title, done, id, removeTask, toggleDone, updateTask}) => {
  const [isEdit, setisEdit] = useState(false);
  const [newTitle, setnewTitle] = useState(title);
  const saveTask = (e) => {
    if (newTitle.trim().length === 0) {
      setisEdit(false);
      setnewTitle(title);
      return;
    }
    if (e.code === "Enter") {
      updateTask(id, newTitle);
      setisEdit(false);
    }
  }

  const normalTemplate = <span className={classNames({"task-done": done})} onClick={() => setisEdit(true)}>{title}</span>;
  const editTemplate = <input onKeyDown={saveTask} value={newTitle} onChange={(e) => setnewTitle(e.target.value)} type="text" />;
  
  return (
    <div className="task-item">
      <input type="checkbox" defaultChecked={done} onClick={() => toggleDone(id)} />
      {isEdit ? editTemplate : normalTemplate}
      <button onClick={() => removeTask(id)}>delete</button>
    </div>
  );
};

export default TodoItem;