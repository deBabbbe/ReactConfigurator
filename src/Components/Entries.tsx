import React from 'react';
import Entry from './Entry';
import { configEntry } from '../DataTypes/ConfigEntries';

type EntriesProps = {
    data: configEntry[];
    setData: (data: configEntry[]) => void;
    removeEntry: (key: string) => void;
    typeHidden: boolean;
}

export default function Entries(props: EntriesProps) {
    const setType = (entry: configEntry): ((type: string) => void) => {
        return (type) => {
            entry.type = type;
            const data = props.data.map(d => {
                if (d === entry) {
                    d.type = type
                }
                return d;
            })
            props.setData(data);
        }
    };

    return <> {
        props.data.map(entry => {
            return <Entry typeHidden={props.typeHidden} key={entry.key} id={entry.key} value={entry.value} config={entry.config} type={entry.type} setType={setType(entry)} removeEntry={props.removeEntry}></Entry>
        })
    }</>;
}