import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { TodoCounter } from '../todoCounter';
import { TodoSearch } from '../todoSearch';
import { TodoList } from '../todoList';
import { TodoItem } from '../todoItem';
import { CreateTodoButton } from '../createTodoButton';
import { TaskContext } from '../taskContext';
import { Modal } from '../modal';
import { TaskForm } from '../taskForm';
import { MyLoader } from '../loadingT';


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
      {!loading &&  <div className="App">

          <Container>
            <Row>
              <Col sm={6} xl={1} >
                One of three columns
              </Col>
              <Col sm={6} xl={1} >
                One of three columns
              </Col>
              <Col sm={6} xl={1} >
                One of three columns
              </Col>
              <Col sm={6} xl={1} >
                One of three columns
              </Col>
              <Col sm={6} xl={1} >
                One of three columns
              </Col>
            </Row>
          </Container>
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
                onComplete={() => completeTask(todo.text)}
                onDelate={() => delateTask(todo.text)}
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
      {loading &&<MyLoader/>}

    </React.Fragment>
    );
}

export {AppUI}