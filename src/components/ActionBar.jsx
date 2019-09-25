import React from "../../node_modules/react";
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome'
import { faSave, faPlusSquare, faRedoAlt } from '../../node_modules/@fortawesome/free-solid-svg-icons'

export function ActionBar(props) {
    return <div className="ActionBar">
        Configurator
        <FontAwesomeIcon id="refreshButton" icon={faRedoAlt} size="lg" title="Neu laden"/>
        <FontAwesomeIcon id="saveButton" icon={faSave} size="lg" title="Speichern" onClick={props.save} />
        <FontAwesomeIcon id="addButton" icon={faPlusSquare} size="lg" title="Hinzufügen" onClick={props.addEntry} />
    </div>;
}
