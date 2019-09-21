import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faFileWord, faQuestion, faClock } from '@fortawesome/free-solid-svg-icons'
import configTypes from '../DataTypes/ConfigTypes';
import moment from 'moment';

function getDate() {
    return moment().format('YYYY-MM-DDTHH:mm:ss');
}

function getContentDependingOnType(props) {
    let type
    let icon
    if (props.type === configTypes.STRING) {
        type = <input placeholder="Please fill value"></input>
        icon = <FontAwesomeIcon icon={faFileWord} />
    }
    if (props.type === configTypes.BOOL) {
        type = (
            <select>
                <option disabled selected value> -- select an option -- </option>
                <option>true</option>
                <option>false</option>
            </select>)
        icon = <FontAwesomeIcon icon={faQuestion} />
    }
    if (props.type === configTypes.DATETIME) {
        type = <input type="datetime-local" defaultValue={getDate()}></input>
        icon = <FontAwesomeIcon icon={faClock} />
    }

    return { type, icon }
}

function Entry(props) {
    const { type, icon } = getContentDependingOnType(props)

    return (
        <tr>
            <td><input value={props.config} /></td>
            <td title={props.type}>{icon}</td>
            <td>{type}</td>
            <td><FontAwesomeIcon icon={faBan} title="Löschen" /></td>
        </tr>
    );
}
export default Entry