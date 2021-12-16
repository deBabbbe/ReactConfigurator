import React from 'react';

type SearchBarProps = {
    filterConfigs: (filter: string) => void;
    filterText: string;
}

export class SearchBar extends React.Component<SearchBarProps> {
    changeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist()
        this.props.filterConfigs(event.target.value)
    }

    render() {
        return <div id="searchBar">
            <input value={this.props.filterText} onChange={this.changeFilter}></input>
        </div>;
    }
}