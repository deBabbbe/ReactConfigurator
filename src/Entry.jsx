import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import configTypes from './ConfigTypes';
import moment from 'moment';

function getDate() {
    var dings = moment().format('YYYY-MM-DDTHH:mm:ss');
    return dings;
  }

function Entry(props) {
    let type
    if (props.type === configTypes.STRING) {
        type = <input></input>
    }
    if (props.type === configTypes.BOOL) {
        type = (
            <select>
                <option disabled selected value> -- select an option -- </option>
                <option>true</option>
                <option>false</option>
            </select>)
    }
    if (props.type === configTypes.DATETIME) {
        type = (
            <input type="datetime-local" defaultValue={getDate()}></input>
        )
    }
    console.warn("type", type)
    console.warn("config type", props.type)
    return (
        <tr>
            <td>{props.config}</td>
            <td>{props.type}</td>
            <td>{type}</td>
            <td><FontAwesomeIcon icon={faBan} /></td>
        </tr>
    );
}

export default Entry