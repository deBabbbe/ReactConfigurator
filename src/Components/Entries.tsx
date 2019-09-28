import React from 'react';
import Entry from './Entry';

type EntriesProps = {
    data: any[];
    removeEntry: any;
}

function Entries(props: EntriesProps) {
    let result: any[] = [];
    props.data.forEach(function (entry) {
        result.push(<Entry key={entry.key} id={entry.key} config={entry.config} type={entry.type} removeEntry={props.removeEntry}></Entry>)
    })
    return result
}

export default Entries