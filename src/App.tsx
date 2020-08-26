import { SearchBar } from './Components/SearchBar';
import { ConfigBar } from './Components/ConfigBar';
import { ActionBar } from './Components/ActionBar';
import { ApplicationBar } from './Components/ApplicationBar';
import React from 'react';
import './App.scss';
import Entries from './Components/Entries';
import ConfigFileSelector from './Components/ConfigFileSelector'
import configEntries, { configEntry } from "./DataTypes/ConfigEntries";
import { Constants } from './DataTypes/Constants';
import { LogoutPage } from './Components/LogoutPage';
import { v4 as uuid } from 'uuid';

type AppProps = {
  data: configEntry[],
  filteredData: configEntry[],
  loggedOut: boolean,
  filterText: string
}

class App extends React.Component<{}, AppProps> {
  private loggedOut: boolean = false;

  constructor(props: AppProps) {
    super(props);
    const configs = configEntries.find(c => c.fileName === "web.config")!.configs
    this.state = {
      data: configs.map(entry => Object.assign(entry, { key: uuid() })),
      filteredData: configs.map(entry => Object.assign(entry, { key: uuid() })),
      loggedOut: false,
      filterText: ""
    }
  }

  componentDidMount = () => {
    const prevFilter = localStorage.getItem("filterValue")?.toString() || "";
    this.setState(() => { return { filterText: prevFilter } });
    this.filterConfigs(prevFilter ? prevFilter : "")
  }

  addEntry = () => {
    const entryToInsert = { config: "", type: Constants.CONFIG_TYPES.STRING, key: uuid() }
    this.setState({ data: [...this.state.data, entryToInsert] })
  }

  save = () => {
    alert("gespeichert")
  }

  wizard = () => {
    return { isOpen: true } as any
  }

  logout = () => {
    this.setState((prevState) => { return { loggedOut: !prevState.loggedOut } });
  }

  removeEntry = (key: string) => {
    const newState = this.state.filteredData.filter((d) => { return d.key !== key });
    this.setState({ filteredData: newState })
  }

  configFileChanged = (event: { target: { value: string } }): void => {
    const configs = configEntries.find(c => c.fileName === event.target.value)!.configs
    configs.forEach(entry => Object.assign(entry, { key: uuid() }))

    this.setState({
      data: configs,
      filteredData: configs
    });
  }

  filterConfigs = (filterValue: string) => {
    localStorage.setItem("filterValue", filterValue ? filterValue : "")
    const filteredData = this.state.data.filter(data =>
      data.config.contains(filterValue)
    );
    this.setState({ filteredData });
  }

  render = () => {
    return (
      <div className="App">
        <ApplicationBar loggedOut={this.state.loggedOut} logout={this.logout} />
        <ActionBar loggedOut={this.state.loggedOut} addEntry={this.addEntry} save={this.save} wizard={this.wizard} />
        <ConfigBar configFileChanged={this.configFileChanged} />
        {this.state.loggedOut && <LogoutPage></LogoutPage>}
        <header className="App-header" hidden={this.state.loggedOut}>
          <SearchBar filterConfigs={this.filterConfigs} filterText={this.state.filterText} />
          <ConfigFileSelector configFileChanged={this.configFileChanged}></ConfigFileSelector>
          <table>
            <Entries data={this.state.filteredData} removeEntry={this.removeEntry}></Entries>
          </table>
        </header>
      </div>
    );
  }
}

export default App