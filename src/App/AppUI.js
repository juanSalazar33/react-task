import React from 'react';
import { TodoCounter } from '../todoCounter';
import { TodoSearch } from '../todoSearch';
import { TodoList } from '../todoList';
import { TodoItem } from '../todoItem';
import { CreateTodoButton } from '../createTodoButton';
import { TaskContext } from '../taskContext';
import { Modal } from '../modal';
import { TaskForm } from '../taskForm';
import { MyLoader } from '../loadingT';
import { ErrorShow } from '../errorShow';


import '../lib/pushy-buttons/css/pushy-buttons.css';
import './App.css';


function AppUI(){
    const {
      loading,
      error,
      searchedTasks,
      openModal,
      setOpenModal,
      completeTask,
      delateTask
    } = React.useContext(TaskContext)
    return (
    <React.Fragment > 
      {(!loading && !error) &&  <div className="App">
          <TodoCounter/>
          <TodoSearch/>
            <TodoList>
              {error && <p>Desespérate, hubo un error...</p>}
              {loading && <p>Estamos cargando, no desesperes...</p>}
              {(!loading && !searchedTasks.length) && <p>¡Crea IMPOSIVBLEE primer TODO!</p>}
            {searchedTasks.map(todo => (
              <TodoItem
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTask(todo.id)}
                onDelate={() => delateTask(todo.id)}
              />
            ))}
            </TodoList>
            {!!openModal && (
            <Modal>
              <TaskForm/>
            </Modal>
          )}
          <CreateTodoButton
            setOpenModal={setOpenModal}
            openModal={openModal}
          ></CreateTodoButton>
          </div>} 

      {!!loading && <MyLoader/>}

      {!!error && <ErrorShow/>}        
    </React.Fragment>
    );
}

export {AppUI}