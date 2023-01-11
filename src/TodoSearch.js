import React from "react";
import './TodoSearch.css'

function TodoSearch() {

    const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChange = (event) => {
        const val = event.target.value;
        console.log(val);
        setSearchValue(val);
    };

    return [
        <input
            className="TodoSearch"
            placeholder="Onion"
            value={searchValue}
            onChange={onSearchValueChange}
        />,
        <p>{searchValue}</p>
    ];
}
export { TodoSearch };