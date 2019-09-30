import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt, faSave, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

export function ActionBar(props: any) {
    return <div className="ActionBar">
        Configurator
        <span id="refreshButton">
            <FontAwesomeIcon icon={faRedoAlt} size="lg" title="Neu laden" />
        </span>
        <span id="saveButton" onClick={props.save}>
            <FontAwesomeIcon icon={faSave} size="lg" title="Speichern" />
        </span>
        <span id="addButton" onClick={props.addEntry}>
            <FontAwesomeIcon icon={faPlusSquare} size="lg" title="Hinzufügen" />
        </span>
    </div >;
}
