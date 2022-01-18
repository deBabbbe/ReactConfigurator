import { ConfigBar } from './Components/ConfigBar';
import { ActionBar } from './Components/ActionBar';
import { ApplicationBar } from './Components/ApplicationBar';
import React, { useState } from 'react';
import './App.scss';
import ConfigFileSelector from './Components/ConfigFileSelector'
import { Constants } from './DataTypes/Constants';
import { LogoutPage } from './Components/LogoutPage';
import { v4 as uuid } from 'uuid';
import Entries from './Components/Entries';
import SearchBar from './Components/SearchBar';
import { fileConfigEntry } from './DataTypes/ConfigEntries';
const loadedConfigs: fileConfigEntry[] = require("./loadedConfigs.json");

export default function App() {
  const configs = loadedConfigs.find(c => c.fileName === "web.config")!.configs;
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
    const entryToInsert = { config: filterText, type: Constants.CONFIG_TYPES.STRING, key: uuid() }
    setData([...data, entryToInsert])
    setFilterText("")
    setFilteredData([...data, entryToInsert])
  }

  const removeEntry = (key: string) => {
    const newState = filteredData.filter((d) => { return d.key !== key });
    setFilteredData(newState)
  }

  const save = () => {
    alert("gespeichert")
  }

  const logout = () => {
    setLoggedOut(!loggedOut);
  }

  const configFileChanged = (event: { target: { value: string } }): void => {
    const configs = loadedConfigs.find(c => c.fileName === event.target.value)!.configs
    configs.forEach(entry => Object.assign(entry, { key: uuid() }))

    setData(configs);
    setFilteredData(configs);
    setFilterText("")
  }


  return (
    <div className="App">
      <ApplicationBar loggedOut={loggedOut} logout={logout} />
      <ActionBar loggedOut={loggedOut} addEntry={addEntry} save={save} />
      <ConfigBar configFiles={loadedConfigs.map(c => c.fileName)} configFileChanged={configFileChanged} />
      {loggedOut && <LogoutPage></LogoutPage>}
      <header className="App-header" hidden={loggedOut}>
        <ConfigFileSelector configFiles={loadedConfigs.map(c => c.fileName)} configFileChanged={configFileChanged}></ConfigFileSelector>
        <SearchBar filterConfigs={filterConfigs} filterText={filterText} addEntry={addEntry} />
        <table>
          <Entries data={filteredData} removeEntry={removeEntry}></Entries>
        </table>
      </header>
    </div>
  );
}