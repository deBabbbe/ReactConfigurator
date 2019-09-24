import { ConfigBar } from './Components/ConfigBar';
import { ActionBar } from './Components/ActionBar';
import { ApplicationBar } from './Components/ApplicationBar';
import React from 'react';
import './App.scss';
import Entries from './Components/Entries';
import ConfigFileSelector from './Components/ConfigFileSelector'
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

  save = () => {
    alert("gespeichert")
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
        <ApplicationBar />
        <ActionBar addEntry={this.addEntry} save={this.save} />
        <ConfigBar configFileChanged={this.configFileChanged} />
        <header className="App-header">
          <ConfigFileSelector configFileChanged={this.configFileChanged}></ConfigFileSelector>
          <table>
            <Entries data={this.state.data} removeEntry={this.removeEntry}></Entries>
          </table>
        </header>
      </div>
    );
  }
}

export default App