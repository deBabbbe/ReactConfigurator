import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import { ConfigTypeSelector, getContentDependingOnType } from './Helper/EntryHelper'

type EntryProps = {
    type: string;
    setType: (type: string) => void;
    removeEntry: (key: string) => void;
    id: string;
    config: string;
    value: string;
    typeHidden: boolean;
}

export default function Entry(props: EntryProps) {
    const [selectTypeOpen, setSelectTypeOpen] = useState(false);
    const { tag, icon } = getContentDependingOnType(props.type, props.value, props.typeHidden);
    const toggleSelectTypeOpen = () => setSelectTypeOpen(!selectTypeOpen);
    const configTypeChanged = (value: string) => {
        toggleSelectTypeOpen();
        props.setType(value);

    };
    const removeEntry = () => {
        props.removeEntry(props.id)
    }

    return (
        <tbody>
            <tr>
                <td><input defaultValue={props.config} /></td>
                {!props.typeHidden ? <>
                    {selectTypeOpen ?
                        <ConfigTypeSelector type={props.type} onSelect={configTypeChanged} /> :
                        <td title={props.type} onClick={toggleSelectTypeOpen} >{icon}</td>
                    }
                </> : <></>}
                <td className="entryTag">{tag}</td>
                <td>
                    <span id="removeButton" onClick={removeEntry}>
                        <FontAwesomeIcon icon={faBan} title="Löschen" />
                    </span>
                </td>
            </tr>
        </tbody >
    );
}