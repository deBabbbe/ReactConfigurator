import React from 'react';
import Entry from '../Components/Entry';

function Entries(props) {
    let result = [];
    props.data.forEach(function (entry) {
        result.push(<Entry config={entry.config} type={entry.type}></Entry>)
    })
    return result
}

export default Entries