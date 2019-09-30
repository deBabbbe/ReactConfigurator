import React from 'react';

type SearchBarProps = {
    filterConfigs: (filter: string) => void;
}

export class SearchBar extends React.Component<SearchBarProps> {
    changeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist()
        console.warn(event.target.value)
        this.props.filterConfigs(event.target.value)
    }

    render() {
        return <div id="searchBar">
            <input onChange={this.changeFilter}></input>
        </div>;
    }
}
