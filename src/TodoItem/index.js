import React from "react";
import './TodoItem.css'

function TodoItem(props) {

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <input type="checkbox" id={props.text} checked = {props.completed} />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}>
        <i class="fa fa-close"></i>
      </span>
    </li>
  );
}
export { TodoItem };