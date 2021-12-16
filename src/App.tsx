import { ConfigBar } from './Components/ConfigBar';
import { ActionBar } from './Components/ActionBar';
import { ApplicationBar } from './Components/ApplicationBar';
import React, { useState } from 'react';
import './App.scss';
import ConfigFileSelector from './Components/ConfigFileSelector'
import configEntries from "./DataTypes/ConfigEntries";
import { Constants } from './DataTypes/Constants';
import { LogoutPage } from './Components/LogoutPage';
import { v4 as uuid } from 'uuid';
import Entries from './Components/Entries';
import SearchBar from './Components/SearchBar';

export default function App() {
  const configs = configEntries.find(c => c.fileName === "web.config")!.configs;
  const [data, setData] = useState(
    configs.map(entry => Object.assign(entry, { key: uuid() }))
  );
  const [loggedOut, setLoggedOut] = useState(false);
  const [filteredData, setFilteredData] = useState(configs.map(entry => Object.assign(entry, { key: uuid() })))
  const [filterText, setFilterText] = useState("");

  const filterConfigs = (filterValue: string) => {
    setFilteredData(data.filter(d =>
      d.config.contains(filterValue)
    ));
    setFilterText(filterValue);
  }

  const addEntry = () => {
    const entryToInsert = { config: "Please fill value", type: Constants.CONFIG_TYPES.STRING, key: uuid() }
    setData([...data, entryToInsert])
    setFilterText("")
    setFilteredData(data)
  }

  const removeEntry = (key: string) => {
    const newState = filteredData.filter((d) => { return d.key !== key });
    setFilteredData(newState)
  }

  const save = () => {
    alert("gespeichert")
  }

  const wizard = () => {
    return { isOpen: true } as any
  }

  const logout = () => {
    setLoggedOut(!loggedOut);
  }

  const configFileChanged = (event: { target: { value: string } }): void => {
    const configs = configEntries.find(c => c.fileName === event.target.value)!.configs
    configs.forEach(entry => Object.assign(entry, { key: uuid() }))

    setData(configs);
    setFilteredData(configs);
    setFilterText("")
  }

  return (
    <div className="App">
      <ApplicationBar loggedOut={loggedOut} logout={logout} />
      <ActionBar loggedOut={loggedOut} addEntry={addEntry} save={save} wizard={wizard} />
      <ConfigBar configFileChanged={configFileChanged} />
      {loggedOut && <LogoutPage></LogoutPage>}
      <header className="App-header" hidden={loggedOut}>
        <ConfigFileSelector configFileChanged={configFileChanged}></ConfigFileSelector>
        <SearchBar filterConfigs={filterConfigs} filterText={filterText} />
        <table>
          <Entries data={filteredData} removeEntry={removeEntry}></Entries>
        </table>
      </header>
    </div>
  );
}