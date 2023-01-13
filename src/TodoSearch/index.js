import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch() {

    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        const val = event.target.value;
        setSearchValue(val);
    };
    
    return [
        <input
            className="TodoSearch"
            placeholder="Filter"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    ];
}
export { TodoSearch };