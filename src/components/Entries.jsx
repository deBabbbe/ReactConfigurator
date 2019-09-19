import configEntries from "../DataTypes/ConfigEntries";
import React from 'react';
import Entry from '../Components/Entry';

function Entries() {
    let result = [];
    configEntries.forEach(function (entry) {
        result.push(<Entry config={entry.config} type={entry.type}></Entry>)
    })
    return result
}

export default Entries