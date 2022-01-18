import React from 'react';

type BoolSelectorProps = {
    value: string
}

export default function BoolSelector(props: BoolSelectorProps) {
    return <select defaultValue=" -- select an option -- " value={props.value}>
        <option> -- select an option -- </option>
        <option>true</option>
        <option>false</option>
    </select>;
}