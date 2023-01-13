import React from "react";
import './TodoIcon.css'
import { ReactComponent as DoneIcon } from './done-icon.svg'
import { ReactComponent as DeleteIcon } from './delete-icon.svg'

const iconTypes = {
    "check": color => (
        <DoneIcon className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete": color => (
        <DeleteIcon className="Icon-svg Icon-svg--delete" fill={color} />
    ),
};

function TodoIcon({ type, color = 'gray', onClick }) {
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };


