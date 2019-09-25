import React from '../../node_modules/react';
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome'
import { faBan } from '../../node_modules/@fortawesome/free-solid-svg-icons'
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
                    <td className="entryTag">{this.tag}</td>
                    <td><FontAwesomeIcon id="removeButton" icon={faBan} title="Löschen" onClick={this.removeEntry} /></td>
                </tr>
            </tbody >
        );
    }
}
export default Entry