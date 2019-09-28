import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import getContentDependingOnType from './Helper/EntryHelper'

type EntryProps = {
    type: string;
    removeEntry: any;
    id: string;
    config: string;
}

class Entry extends React.Component<EntryProps> {
    tag: any;
    icon: any;

    constructor(props: EntryProps) {
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
                    <td><span id="removeButton" onClick={this.removeEntry}><FontAwesomeIcon icon={faBan} title="Löschen" /></span></td>
                </tr>
            </tbody >
        );
    }
}
export default Entry