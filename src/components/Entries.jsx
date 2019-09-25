import React from '../../node_modules/react';
import Entry from './Entry';

function Entries(props) {
    let result = [];
    props.data.forEach(function (entry) {
        result.push(<Entry key={entry.key} id={entry.key} config={entry.config} type={entry.type} removeEntry={props.removeEntry}></Entry>)
    })
    return result
}

export default Entries