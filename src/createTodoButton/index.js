import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevSate => !prevSate);
  };
  
  return (
    <button 
      className={`CreateTodoButton openButton ${!!props.openModal && 'closeButton'}`}
      onClick={onClickButton}
    >
      +
    </button>
  );
}


export { CreateTodoButton };
