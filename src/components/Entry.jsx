import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import getContentDependingOnType from './Helper/EntryHelper'

class Entry extends React.Component {
    constructor(props) {
        super(props)
        const { tag, icon } = getContentDependingOnType(props.type)
        this.tag = tag;
        this.icon = icon;
    }

    removeEntry = () => {
        this.props.removeEntry(this.props.id)
    }

    render() {
        return (
            <tbody>
                <tr>
                    <td><input defaultValue={this.props.config} /></td>
                    <td title={this.props.type}>{this.icon}</td>
                    <td>{this.tag}</td>
                    <td><FontAwesomeIcon icon={faBan} title="Löschen" onClick={this.removeEntry} /></td>
                </tr>
            </tbody >
        );
    }
}
export default Entry