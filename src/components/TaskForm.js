import React, { useState } from 'react';
import '../style/TaskForm.css';
import { v4 as uuidv4} from 'uuid';

function TaskForm(props) {

  const [input, setInput] = useState('');

  const changeHandler = e => {
    setInput(e.target.value);
  };

  const sendingHandler = e => {
    e.preventDefault();
    console.log("Enviando form...");
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }
    
    //Cuando se intente enviar el formulario
    props.onSubmit(newTask);

  };

  return (
    <form
      className='task-form'
      onSubmit={sendingHandler}
    >
      <input
        className='task-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='text'
        onChange={changeHandler}
      />
      <button className='task-button'>Agregar Tarea</button>
    </form>
  );
}

export default TaskForm;