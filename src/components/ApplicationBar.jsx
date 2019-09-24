import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faQuestionCircle, faExclamationTriangle, faInfoCircle, faPowerOff } from '@fortawesome/free-solid-svg-icons'

export function ApplicationBar() {
    return <div className="ApplicationBar">
        smart FLOW
        <FontAwesomeIcon id="userIcon" icon={faUser} size="lg" title="Speichern" />
        <p id="userName">Ritter, Claudia</p>
        <FontAwesomeIcon id="applicationBarDefaultIcon" icon={faQuestionCircle} size="lg" title="Hilfe" />
        <FontAwesomeIcon id="applicationBarDefaultIcon" icon={faExclamationTriangle} size="lg" title="Warnungen" />
        <FontAwesomeIcon id="applicationBarDefaultIcon" icon={faInfoCircle} size="lg" title="Informationen" />
        <FontAwesomeIcon id="applicationBarDefaultIcon" icon={faPowerOff} size="lg" title="Ausloggen" />
    </div>;
}
