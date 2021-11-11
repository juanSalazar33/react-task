import React from 'react';
import { TaskContext } from '../taskContext';
import './TodoSearch.css';

function TodoSearch() {

  const {searchKey, setSearchKey} = React.useContext(TaskContext);
  
  const searchTask = (event) => {
    setSearchKey(event.target.value);
  }
  return [     
      <input 
      className="TodoSearch" 
      placeholder="Cebolla"
      value = {searchKey}
      onChange={searchTask} 
    />,
    <p>{searchKey}</p>
  ];
}

export { TodoSearch };
