import { SearchBar } from './Components/SearchBar';
import { ConfigBar } from './Components/ConfigBar';
import { ActionBar } from './Components/ActionBar';
import { ApplicationBar } from './Components/ApplicationBar';
import React from 'react';
import './App.scss';
import Entries from './Components/Entries';
import ConfigFileSelector from './Components/ConfigFileSelector'
import configEntries, { configEntry } from "./DataTypes/ConfigEntries";
import configTypes from './DataTypes/Constants/ConfigTypes';
// import store from './Store/index';
// import { addConfigEntry } from './Actions';
import uuidv4 from 'uuid/v4';

type AppProps = {
  data: configEntry[]
}

class App extends React.Component<{}, AppProps> {
  constructor(props: AppProps) {
    super(props);
    // console.warn("do is de state", store.getState());
    // store.subscribe(() => console.warn("neuer store", store.getState()))
    // store.dispatch(addConfigEntry({ key: "blubb" }))
    const configs = configEntries.find(c => c.fileName === "web.config")!.configs
    this.state = {
      data: configs.map(entry => Object.assign(entry, { key: uuidv4() }))
    }
  }

  addEntry = () => {
    const entryToInsert = { config: "", type: configTypes.STRING, key: uuidv4() }
    this.setState({ data: [...this.state.data, entryToInsert] })
  }

  save = () => {
    alert("gespeichert")
  }

  removeEntry = (key: string) => {
    const newState = this.state.data.filter((d) => { return d.key !== key });
    this.setState({ data: newState })
  }

  configFileChanged = (event: { target: { value: string } }): void => {
    const configs = configEntries.find(c => c.fileName === event.target.value)!.configs
    configs.forEach(entry => Object.assign(entry, { key: uuidv4() }))

    this.setState({
      data: configs
    });
  }

  filterConfigs = (filterValue: string) => {
    const data = this.state.data.filter(data => data.config.includes(filterValue));
    this.setState({
      data: data
    });
  }

  render = () => {
    return (
      <div className="App">
        <ApplicationBar />
        <ActionBar addEntry={this.addEntry} save={this.save} />
        <ConfigBar configFileChanged={this.configFileChanged} />
        <header className="App-header">
          <SearchBar filterConfigs={this.filterConfigs} />
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