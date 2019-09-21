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
    console.warn("guggemol", this.state);
    const entryToInsert = { config: "Common.Imap.Guggemol", type: configTypes.STRING }
    this.setState({ data: [...this.state.data, entryToInsert] })
  }

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <select>
            <option>web.config</option>
          </select>
          <table>
            <Entries data={this.state.data}></Entries>
          </table>
          <button id="addButton" onClick={this.addEntry}>Hinzufügen</button>
        </header>
      </div>
    );
  }
}

export default App