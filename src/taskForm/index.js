import React from 'react';
import { TaskContext } from '../taskContext';
import './taskForm.css';

function TaskForm(){
    const {
        addTask,
        setOpenModal,
    } = React.useContext(TaskContext);
    const [newTaskValue, setNewTask] = React.useState('');


    const onSubmit = (event) =>{
        event.preventDefault();
        console.log("task",newTaskValue.length);
        addTask(newTaskValue);
        setOpenModal(false);
    }
   
    const onChange = (event) =>{
        
        setNewTask(event.target.value);
    } 
   
    return (
        <form onSubmit={onSubmit} >
            <label>Whrite your task</label>
            <textarea
                value = {newTaskValue}
                onChange = {onChange}
                placeholder = "wrhite a new task"
            />
            {(newTaskValue.length < 3) && <p>la tarea debe tener al menos 3 caracteres</p>}
            <div className="TodoForm-buttonContainer">
                <button
                disabled={(newTaskValue.length < 3)}
                className="pushy__btn pushy__btn--lg pushy__btn--blue"
                type= "submit"
                >
                 Make task
                </button>
            </div>
        </form>
    );
}

export { TaskForm }
