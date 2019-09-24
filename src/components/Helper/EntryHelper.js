import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileWord, faQuestion, faClock } from '@fortawesome/free-solid-svg-icons'
import BoolSelector from './BoolSelector';
import configTypes from '../../DataTypes/ConfigTypes';

function getDate() {
    return moment().format('YYYY-MM-DDTHH:mm:ss');
}

export default function getContentDependingOnType(type) {
    let tag;
    let icon;
    if (type === configTypes.STRING) {
        tag = <input placeholder="Please fill value"></input>
        icon = <FontAwesomeIcon icon={faFileWord} />
    }
    if (type === configTypes.BOOL) {
        tag = <BoolSelector></BoolSelector>
        icon = <FontAwesomeIcon icon={faQuestion} />
    }
    if (type === configTypes.DATETIME) {
        tag = <input type="datetime-local" defaultValue={getDate()}></input>
        icon = <FontAwesomeIcon icon={faClock} />
    }
    return { tag, icon };
}