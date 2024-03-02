import React from 'react';
import { useState } from 'react';
import AssignmentIcon from '@mui/icons-material/Assignment';
import classNames from 'classnames';
import AddCircle from '@mui/icons-material/AddCircle';

const TodoAdd = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState(null);
  const [active, setActive] = useState(false);

  const clickHandler = () => { 
    if (title.trim().length === 0) { 
      setTitleError('Field is required');
      return;
    }
    addTask(title);
    setTitle('');
    setTitleError(null);
    setActive(false);
  }

  return (
    <div className='todo-add-container'>
      <AssignmentIcon className={classNames({'add-icon-active': active, 'add-icon-inactive': !active})}/>
      <input
        type="text"
        value={title}
        placeholder='Enter your next task'
        onInput={() => setActive(true)}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => { if( e.code === 'Enter') clickHandler(); }}
      />
      <AddCircle className={classNames({'add-circle-active': active, 'add-circle-inactive': !active})} onClick={clickHandler}/>

      {titleError && <div><span className='error-title'>{titleError}</span></div>}
    </div>
  );
};

export default TodoAdd;
