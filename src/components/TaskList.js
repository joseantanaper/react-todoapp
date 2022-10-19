import React, { useEffect, useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import '../style/TaskList.css';

const KEY = 'react-todoapp.tasks';

function TaskList() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("useEffect load");
    const storedTasks = JSON.parse(localStorage.getItem(KEY));
    if(storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const addTaskFunction = (task) => {
    if(task.text.trim()) {
      task.text = task.text.trim();
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
      //Store changes
      localStorage.setItem(KEY, JSON.stringify(updatedTasks));
    }
  };

  const removeTaskFunction = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    //Store changes
    localStorage.setItem(KEY, JSON.stringify(updatedTasks));
  };

  const completeTaskFunction = id => {
    const updatedTasks = tasks.map(task => {
      if(task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <>
      <TaskForm onSubmit={addTaskFunction} />
      <div className='task-list-container'>
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              removeTask={removeTaskFunction}
              completeTask={completeTaskFunction}
            />
          )
        }
      </div>
    </>
  );
}

export default TaskList;