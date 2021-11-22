import React from 'react';
import './TodoItem.css';

import { Row, Col } from 'react-grid-system';

function TodoItem(props) {
  return (
        <Col sm ={12} md = {5} lg = {4}>
         <div 
          className={`${props.completed  ? 'TodoItem task-completed' : 'TodoItem'}`}
        >
          <Row className="TodoItem-p">
            <Col sm ={12} md={12} lg ={12}>
              <p 
                className= {props.completed && 'TodoItem-p--complete'}
              >
                {props.text}
              </p>
            </Col>

          </Row>
          <Row className="buttons" >
          {!props.completed &&  <Col md={6} sm = {6} lg = {6}>
             <button
                className="pushy__btn pushy__btn--sm pushy__btn--green"
                type= "button"
                onClick={props.onComplete}
                >
                Complete
            </button>
            </Col> }

            <Col  md={6} sm = {6} lg = {6}>
              <button
                  className="pushy__btn pushy__btn--sm pushy__btn--red"
                  type= "button"
                  onClick={props.onDelate}
                  >
                  Delete
              </button>
            </Col>

          </Row>
         </div>
        </Col>

  );
}

export { TodoItem };
