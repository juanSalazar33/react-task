import React from 'react';
import { TaskContext } from '../taskContext';
import './TodoCounter.css';


function TodoCounter() {
  const {countAllTask, countCompletedTask} = React.useContext(TaskContext);
  return (
    <h2 className="TodoCounter">you have {countCompletedTask} task completed of {countAllTask}</h2>
  );
}

export { TodoCounter };
