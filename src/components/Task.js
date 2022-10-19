import React from 'react';
import '../style/Task.css';
import { AiOutlineCloseCircle as TaskIcon } from 'react-icons/ai';

function Task({ id, text, completed, completeTask, removeTask }) {
  return (
    <div className={completed ? 'task-container completed' : 'task-container'}>
      <div
        className='task-text'
        onClick={() => completeTask(id)}
      >
        {text}
      </div>
      <div className='task-icon-container'>
        <TaskIcon
          className='task-icon'
          onClick={() => removeTask(id)}
        />
      </div>
    </div>

  );

}

export default Task;