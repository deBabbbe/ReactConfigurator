import React from 'react';
import './App.scss';
import Entries from './Components/Entries';
import configEntries from "./DataTypes/ConfigEntries";
import configTypes from './DataTypes/ConfigTypes';

class App extends React.Component {
  state = {
    data: configEntries
  }

  addEntry = () => {
    const entryToInsert = { config: "", type: configTypes.STRING }
    this.setState({ data: [...this.state.data, entryToInsert] })
  }

  removeEntry = (config) => {
    const newState = this.state.data.filter(function (d) { return d.config !== config });
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