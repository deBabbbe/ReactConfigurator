import React from 'react';
import moment from '../../../node_modules/moment';
import BoolSelector from './BoolSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileWord, faQuestion, faClock } from '@fortawesome/free-solid-svg-icons';
import { Constants } from '../../DataTypes/Constants';

function getDate() {
    return moment().format('YYYY-MM-DDTHH:mm:ss');
}

type EntryContentResult = {
    tag: JSX.Element;
    icon: JSX.Element;
}

export default function getContentDependingOnType(type: string, value: string): EntryContentResult {
    let tag;
    let icon;
    if (type === Constants.CONFIG_TYPES.BOOL) {
        tag = <BoolSelector value={value}></BoolSelector>
        icon = <FontAwesomeIcon icon={faQuestion} />
    }
    else if (type === Constants.CONFIG_TYPES.DATETIME) {
        tag = <input type="datetime-local" defaultValue={getDate()} value={value}></input>
        icon = <FontAwesomeIcon icon={faClock} />
    }
    else {
        tag = <input placeholder="Please fill value" value={value}></input>
        icon = <FontAwesomeIcon icon={faFileWord} />
    }
    return { tag, icon };
}