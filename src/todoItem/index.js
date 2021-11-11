import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li
      className="TodoItem"
    >
      <button
          className="Icon pushy__btn pushy__btn--md pushy__btn--green"
          type= "button"
          onClick={props.onComplete}
          >
           Completar
      </button>
      <p 
        className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`} 
      >
        {props.text}
      </p>
      <button
          className="Icon pushy__btn pushy__btn--md pushy__btn--red"
          type= "button"
          onClick={props.onDelate}
          >
           Eliminar
      </button>
    </li>
  );
}

export { TodoItem };
