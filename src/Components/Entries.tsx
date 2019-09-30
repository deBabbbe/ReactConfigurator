import React from 'react';
import Entry from './Entry';
import { configEntry } from '../DataTypes/ConfigEntries';

type EntriesProps = {
    data: configEntry[];
    removeEntry: (key: string) => void;
}

class Entries extends React.Component<EntriesProps> {
    render() {
        return this.props.data.map(entry => {
            return <Entry key={entry.key} id={entry.key} config={entry.config} type={entry.type} removeEntry={this.props.removeEntry}></Entry>
        });
    }
}

export default Entries