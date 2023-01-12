import React from "react";
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}) {

    const onSearchValueChange = (event) => {
        const val = event.target.value;
        console.log(val);
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