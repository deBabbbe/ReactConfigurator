import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import getContentDependingOnType from './Helper/EntryHelper'

type EntryProps = {
    type: string;
    removeEntry: (key: string) => void;
    id: string;
    config: string;
}

export default function Entry(props: EntryProps) {
    const { tag, icon } = getContentDependingOnType(props.type)

    const removeEntry = () => {
        props.removeEntry(props.id)
    }

    return (
        <tbody>
            <tr>
                <td><input defaultValue={props.config} /></td>
                <td title={props.type}>{icon}</td>
                <td className="entryTag">{tag}</td>
                <td><span id="removeButton" onClick={removeEntry}><FontAwesomeIcon icon={faBan} title="Löschen" /></span></td>
            </tr>
        </tbody >
    );
}