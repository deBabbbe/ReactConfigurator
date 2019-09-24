import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

export function ActionBar(props) {
    return <div className="ActionBar">
        Configurator
        <FontAwesomeIcon id="saveButton" icon={faSave} size="lg" title="Speichern" onClick={props.save} />
        <FontAwesomeIcon id="addButton" icon={faPlusSquare} size="lg" title="Hinzufügen" onClick={props.addEntry} />
    </div>;
}
