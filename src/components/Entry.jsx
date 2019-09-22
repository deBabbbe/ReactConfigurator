import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faFileWord, faQuestion, faClock } from '@fortawesome/free-solid-svg-icons'
import configTypes from '../DataTypes/ConfigTypes';
import moment from 'moment';

class Entry extends React.Component {
    constructor(props) {
        super(props)
        this.getContentDependingOnType()
    }

    getDate() {
        return moment().format('YYYY-MM-DDTHH:mm:ss');
    }

    getContentDependingOnType() {
        if (this.props.type === configTypes.STRING) {
            this.type = <input placeholder="Please fill value"></input>
            this.icon = <FontAwesomeIcon icon={faFileWord} />
        }
        if (this.props.type === configTypes.BOOL) {
            this.type = (
                <select>
                    <option disabled selected="true"> -- select an option -- </option>
                    <option>true</option>
                    <option>false</option>
                </select>)
            this.icon = <FontAwesomeIcon icon={faQuestion} />
        }
        if (this.props.type === configTypes.DATETIME) {
            this.type = <input type="datetime-local" defaultValue={this.getDate()}></input>
            this.icon = <FontAwesomeIcon icon={faClock} />
        }
    }

    removeEntry = () => {
        this.props.removeEntry(this.props.config)
    }

    render() {
        return (
            <tbody>
                <tr>
                    <td><input defaultValue={this.props.config} /></td>
                    <td title={this.props.type}>{this.icon}</td>
                    <td>{this.type}</td>
                    <td><FontAwesomeIcon icon={faBan} title="Löschen" onClick={this.removeEntry} /></td>
                </tr>
            </tbody>
        );
    }
}
export default Entry