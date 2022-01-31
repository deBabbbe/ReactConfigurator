import { v4 as uuid } from "uuid";
import { useState } from "react";
import { FileConfigEntry } from "../DataTypes/ConfigEntries";
import { Constants } from "../DataTypes/Constants";
import React from "react";
import { ApplicationBar } from "./ApplicationBar";
import { ActionBar } from "./ActionBar";
import { ConfigBar } from "./ConfigBar";
import { LogoutPage } from "./LogoutPage";
import ConfigFileSelector from "./ConfigFileSelector";
import SearchBar from "./SearchBar";
import Entries from "./Entries";
type ConfiguratorProps = {
  loadedConfigs: FileConfigEntry[];
};

export default function Configurator(props: ConfiguratorProps) {
  const initialConfigs = props.loadedConfigs[0];
  const [typeHidden, setTypeHidden] = useState(false);
  const [configFileName, setConfigFileName] = useState(initialConfigs.fileName);
  const [dataOfCurrentConfig, setDataOfCurrentConfig] = useState(
    initialConfigs.configs.map((entry) => Object.assign(entry, { key: uuid() }))
  );
  const [loggedOut, setLoggedOut] = useState(false);
  const [filteredData, setFilteredData] = useState(dataOfCurrentConfig);
  const [filterText, setFilterText] = useState("");

  const filterConfigs = (filterValue: string) => {
    setFilteredData(
      dataOfCurrentConfig.filter((d) => d.config.contains(filterValue))
    );
    setFilterText(filterValue);
  };

  const addEntry = () => {
    const entryToInsert = {
      config: filterText,
      type: Constants.CONFIG_TYPES.STRING,
      key: uuid(),
      value: "",
    };
    setDataOfCurrentConfig([...dataOfCurrentConfig, entryToInsert]);
    setFilterText("");
    setFilteredData(dataOfCurrentConfig);
  };

  const removeEntry = (key: string) => {
    const data = dataOfCurrentConfig.filter((d) => {
      return d.key !== key;
    });
    console.warn("gugg", data);

    setDataOfCurrentConfig(data);
    setFilteredData(data);
  };

  const save = () => {
    alert("gespeichert");
  };

  const logout = () => {
    setLoggedOut(!loggedOut);
  };

  const configFileChanged = (value: string): void => {
    setConfigFileName(value);
    const configs = props.loadedConfigs.find(
      (c) => c.fileName === value
    )!.configs;
    configs.forEach((entry) => Object.assign(entry, { key: uuid() }));

    setDataOfCurrentConfig(configs);
    setFilterText("");
    setFilteredData(configs);
  };

  const filesWithPleaseFillValue = props.loadedConfigs
    .filter((c) => !c.configs.every((ce) => ce.value !== "[PLEASE FILL VALUE]"))
    .map((e) => e.fileName);

  return (
    <div className="App">
      <ApplicationBar loggedOut={loggedOut} logout={logout} />
      <ActionBar
        loggedOut={loggedOut}
        addEntry={addEntry}
        save={save}
        typeHidden={typeHidden}
        setTypeHidden={setTypeHidden}
      />
      <ConfigBar
        configFiles={props.loadedConfigs.map((c) => c.fileName)}
        configFileChanged={configFileChanged}
      />
      {loggedOut && <LogoutPage></LogoutPage>}
      <header className="App-header" hidden={loggedOut}>
        <ConfigFileSelector
          configFiles={props.loadedConfigs.map((c) => c.fileName)}
          configFileName={configFileName}
          configFileChanged={configFileChanged}
          filesWithPleaseFillValue={filesWithPleaseFillValue}
        ></ConfigFileSelector>
        <SearchBar
          filterConfigs={filterConfigs}
          filterText={filterText}
          addEntry={addEntry}
        />
        <table>
          <Entries
            filteredData={filteredData}
            setDataOfCurrentConfig={setDataOfCurrentConfig}
            removeEntry={removeEntry}
            typeHidden={typeHidden}
          ></Entries>
        </table>
      </header>
    </div>
  );
}
