import React from "../../node_modules/react";
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome'
import { faUser, faQuestionCircle, faExclamationTriangle, faInfoCircle, faPowerOff } from '../../node_modules/@fortawesome/free-solid-svg-icons'
// import { ReactComponent as Logo } from '../icons/Logo.svg'

export function ApplicationBar() {
    return <div className="ApplicationBar">
        {/* <Logo width="60px" height="60px"></Logo> */}
        smart FLOW
        <FontAwesomeIcon id="userIcon" icon={faUser} size="lg" title="Speichern" />
        <p id="userName">Ritter, Claudia</p>
        <FontAwesomeIcon id="applicationBarDefaultIcon" icon={faQuestionCircle} size="lg" title="Hilfe" />
        <FontAwesomeIcon id="applicationBarDefaultIcon" icon={faExclamationTriangle} size="lg" title="Warnungen" />
        <FontAwesomeIcon id="applicationBarDefaultIcon" icon={faInfoCircle} size="lg" title="Informationen" />
        <FontAwesomeIcon id="applicationBarDefaultIcon" icon={faPowerOff} size="lg" title="Ausloggen" />
    </div>;
}
