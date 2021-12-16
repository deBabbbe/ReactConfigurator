import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt, faSave, faPlusSquare, faMagic } from '@fortawesome/free-solid-svg-icons';

type ActionBarProps = {
    save: () => void;
    addEntry: () => void;
    loggedOut: boolean;
}

export function ActionBar(props: ActionBarProps) {
    return <div className="ActionBar">
        Configurator
        <span id="refreshButton" hidden={props.loggedOut}>
            <FontAwesomeIcon icon={faRedoAlt} size="lg" title="Neu laden" />
        </span>
        <span id="saveButton" onClick={props.save} hidden={props.loggedOut}>
            <FontAwesomeIcon icon={faSave} size="lg" title="Speichern" />
        </span>
        <span id="addButton" onClick={props.addEntry} hidden={props.loggedOut}>
            <FontAwesomeIcon icon={faPlusSquare} size="lg" title="Hinzufügen" />
        </span>
    </div>;
}
