import React from "react";
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome'
import { faUser, faQuestionCircle, faExclamationTriangle, faInfoCircle, faPowerOff } from '../../node_modules/@fortawesome/free-solid-svg-icons'
import { ReactComponent as Logo } from '../icons/Logo.svg'

export function ApplicationBar() {
    return <div className="ApplicationBar">
        <Logo width="60px" height="20px"></Logo>
        <span id="userIcon">
            <FontAwesomeIcon icon={faUser} size="lg" title="Speichern" />
        </span>
        <p id="userName">Ritter, Claudia</p>
        <span id="applicationBarDefaultIcon">
            <FontAwesomeIcon icon={faQuestionCircle} size="lg" title="Hilfe" />
        </span>
        <span id="applicationBarDefaultIcon">
            <FontAwesomeIcon icon={faExclamationTriangle} size="lg" title="Warnungen" />
        </span>
        <span id="applicationBarDefaultIcon">
            <FontAwesomeIcon icon={faInfoCircle} size="lg" title="Informationen" />
        </span>
        <span id="applicationBarDefaultIcon">
            <FontAwesomeIcon icon={faPowerOff} size="lg" title="Ausloggen" />
        </span>
    </div>;
}
