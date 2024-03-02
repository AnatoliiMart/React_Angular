import React, { useState } from "react";
import classNames from "classnames";
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';

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
    <div>
      <div className="task-item">
        {
          done ? <DoneAllIcon className="done" onClick={() => toggleDone(id)}/>
               : <DoneIcon className="not-done" onClick={() => toggleDone(id)}/>
        }
        {
          isEdit ? editTemplate
                 : normalTemplate
        }
        {
          isEdit ? <ReplayIcon className="on-edit-btn"/>
                 : <CloseIcon className="close-btn" onClick={() => removeTask(id)}/>
        }      
      </div>
      <hr />
    </div>
  );
};

export default TodoItem;