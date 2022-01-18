import React from 'react';
import Entry from './Entry';
import { configEntry } from '../DataTypes/ConfigEntries';

type EntriesProps = {
    data: configEntry[];
    removeEntry: (key: string) => void;
}

export default function Entries(props: EntriesProps) {
    return <> {
        props.data.map(entry => {
            return <Entry key={entry.key} id={entry.key} value={entry.value} config={entry.config} type={entry.type} removeEntry={props.removeEntry}></Entry>
        })
    }</>;
}