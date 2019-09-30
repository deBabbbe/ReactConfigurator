import React from 'react';

type SearchBarProps = {
    filterConfigs: any
}

export class SearchBar extends React.Component<SearchBarProps> {
    guggemol = (event: any) => {
        event.persist()
        console.warn(event.target.value)
        this.props.filterConfigs(event.target.value)
    }

    render() {
        return <div id="searchBar">
            <input onChange={this.guggemol}></input>
        </div>;
    }
}
