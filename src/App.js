import React from 'react';
import './App.scss';
import Entries from './Components/Entries';
import configEntries from "./DataTypes/ConfigEntries";
import configTypes from './DataTypes/ConfigTypes';

const uuidv4 = require('uuid/v4');

class App extends React.Component {
  constructor() {
    super();
    configEntries.forEach(entry => Object.assign(entry, { key: uuidv4() }))
    this.state = {
      data: configEntries
    }
  }

  addEntry = () => {
    const entryToInsert = { config: "", type: configTypes.STRING, key: uuidv4() }
    this.setState({ data: [...this.state.data, entryToInsert] })
  }

  removeEntry = (key) => {
    const newState = this.state.data.filter(function (d) { return d.key !== key });
    this.setState({ data: newState })
  }

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <select>
            <option>web.config</option>
          </select>
          <table>
            <Entries data={this.state.data} removeEntry={this.removeEntry}></Entries>
          </table>
          <button id="addButton" onClick={this.addEntry}>Hinzufügen</button>
        </header>
      </div>
    );
  }
}

export default App