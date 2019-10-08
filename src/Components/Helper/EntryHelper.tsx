import React from 'react';
import moment from '../../../node_modules/moment';
import BoolSelector from './BoolSelector';
import configTypes from '../../DataTypes/Constants/ConfigTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileWord, faQuestion, faClock } from '@fortawesome/free-solid-svg-icons';

function getDate() {
    return moment().format('YYYY-MM-DDTHH:mm:ss');
}

type EntryContentResult = {
    tag: JSX.Element;
    icon: JSX.Element;
}

export default function getContentDependingOnType(type: string): EntryContentResult {
    let tag;
    let icon;
    if (type === configTypes.BOOL) {
        tag = <BoolSelector></BoolSelector>
        icon = <FontAwesomeIcon icon={faQuestion} />
    }
    else if (type === configTypes.DATETIME) {
        tag = <input type="datetime-local" defaultValue={getDate()}></input>
        icon = <FontAwesomeIcon icon={faClock} />
    }
    else {
        tag = <input placeholder="Please fill value"></input>
        icon = <FontAwesomeIcon icon={faFileWord} />
    }
    return { tag, icon };
}