import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import './TodoItem.css'

function TodoItem(props) {

  return (
    <li className="TodoItem">
      {/* <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <input type="checkbox" id={props.text} checked = {props.completed} />
      </span> */}
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}

      />
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
        {props.text}
      </p>
      {/* <span
        className="Icon Icon-delete"
        onClick={props.onDelete}>
        <i class="fa fa-close"></i>
      </span> */}

      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}
export { TodoItem };