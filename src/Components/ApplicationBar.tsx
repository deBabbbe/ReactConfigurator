import React from 'react';
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome'
import {
    faUser,
    faQuestionCircle,
    faExclamationTriangle,
    faInfoCircle,
    faPowerOff
} from '../../node_modules/@fortawesome/free-solid-svg-icons'
import { ReactComponent as Logo } from '../icons/Logo.svg'

type ApplicationBarProps = {
    logout: () => void;
    loggedOut: boolean;
}

export function ApplicationBar(props: ApplicationBarProps) {
    const userName = props.loggedOut ? "-" : "Ritter, Claudia"
    return <div className="ApplicationBar">
        <Logo width="60px" height="20px"></Logo>
        <span id="userIcon">
            <FontAwesomeIcon icon={faUser} size="lg" />
        </span>
        <p id="userName">{userName}</p>
        <span id="applicationBarDefaultIcon">
            <FontAwesomeIcon icon={faQuestionCircle} size="lg" title="Hilfe" />
        </span>
        <span id="applicationBarDefaultIcon">
            <FontAwesomeIcon icon={faExclamationTriangle} size="lg" title="Warnungen" />
        </span>
        <span id="applicationBarDefaultIcon">
            <FontAwesomeIcon icon={faInfoCircle} size="lg" title="Informationen" />
        </span>
        <span id="applicationBarDefaultIcon" onClick={props.logout} >
            <FontAwesomeIcon icon={faPowerOff} size="lg" title="Ausloggen" />
        </span>
    </div>;
}
