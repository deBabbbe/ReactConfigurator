import { SearchBar } from './Components/SearchBar';
import { ConfigBar } from './Components/ConfigBar';
import { ActionBar } from './Components/ActionBar';
import { ApplicationBar } from './Components/ApplicationBar';
import React from 'react';
import './App.scss';
import Entries from './Components/Entries';
import ConfigFileSelector from './Components/ConfigFileSelector'
import configEntries, { configEntry } from "./DataTypes/ConfigEntries";
import uuidv4 from 'uuid/v4';
import { Constants } from './DataTypes/Constants';
import { LogoutPage } from './Components/LogoutPage';

type AppProps = {
  data: configEntry[],
  loggedOut: boolean
}

class App extends React.Component<{}, AppProps> {
  private loggedOut: boolean = false;

  constructor(props: AppProps) {
    super(props);
    const configs = configEntries.find(c => c.fileName === "web.config")!.configs
    this.state = {
      data: configs.map(entry => Object.assign(entry, { key: uuidv4() })),
      loggedOut: false
    }
  }

  addEntry = () => {
    const entryToInsert = { config: "", type: Constants.CONFIG_TYPES.STRING, key: uuidv4() }
    this.setState({ data: [...this.state.data, entryToInsert] })
  }

  save = () => {
    alert("gespeichert")
  }

  logout = () => {
    this.setState((prevState) => { return { loggedOut: !prevState.loggedOut } });
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
        <ApplicationBar logout={this.logout} />
        <ActionBar loggedOut={this.state.loggedOut} addEntry={this.addEntry} save={this.save} />
        <ConfigBar configFileChanged={this.configFileChanged} />
        {this.state.loggedOut && <LogoutPage></LogoutPage>}
        <header className="App-header" hidden={this.state.loggedOut}>
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