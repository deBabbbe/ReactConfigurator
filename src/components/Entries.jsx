import React from 'react';
import Entry from '../Components/Entry';

function Entries(props) {
    let result = [];
    props.data.forEach(function (entry) {
        result.push(<Entry id={entry.key} config={entry.config} type={entry.type} removeEntry={props.removeEntry}></Entry>)
    })
    return result
}

export default Entries