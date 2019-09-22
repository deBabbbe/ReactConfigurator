import React from 'react';
import './App.scss';
import Entries from './Components/Entries';
import configEntries from "./DataTypes/ConfigEntries";
import configTypes from './DataTypes/ConfigTypes';

const uuidv4 = require('uuid/v4');

class App extends React.Component {
  constructor() {
    super();
    const configs = configEntries.find(c => c.fileName === "web.config").configs
    configs.forEach(entry => Object.assign(entry, { key: uuidv4() }))
    this.state = {
      data: configs
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

  configFileChanged = (event) => {
    const configs = configEntries.find(c => c.fileName === event.target.value).configs
    configs.forEach(entry => Object.assign(entry, { key: uuidv4() }))

    this.setState({
      data: configs
    });
  }

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <select onChange={this.configFileChanged}>
            <option>web.config</option>
            <option>EmailImporter.exe.config</option>
            <option>SmoopeImporter.exe.config</option>
            <option>SkypeImporter.exe.config</option>
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