import React from 'react';

type SearchBarProps = {
    filterConfigs: (filter: string) => void;
    filterText: string;
}

export default function SearchBar(props: SearchBarProps) {
    const changeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist()
        props.filterConfigs(event.target.value)
    }
    return <div id="searchBar">
        <input value={props.filterText} onChange={changeFilter}></input>
    </div>;
}