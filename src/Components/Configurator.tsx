import { v4 as uuid } from "uuid";
import { useState } from "react";
import { ConfigEntry, FileConfigEntry } from "../DataTypes/ConfigEntries";
import { Constants } from "../DataTypes/Constants";
import React from "react";
import { ApplicationBar } from "./ApplicationBar";
import { ActionBar } from "./ActionBar";
import { ConfigBar } from "./ConfigBar";
import { LogoutPage } from "./LogoutPage";
import ConfigFileSelector from "./ConfigFileSelector";
import SearchBar from "./SearchBar";
import Entries from "./Entries";
import FileSaver from "file-saver";
import { useEffect } from "react";

interface ConfiguratorProps {
  loadedConfigs: FileConfigEntry[];
  setLoadedConfigs: (entries: FileConfigEntry[]) => void;
  setReloadSettings: (value: string) => void;
}

const getDataOfCurrentConfigMapped = (configs: ConfigEntry[]): typeof configs => configs.map((entry) => Object.assign(entry, { key: uuid() }));

export default function Configurator(props: ConfiguratorProps) {
  const [typeHidden, setTypeHidden] = useState(false);
  const [configFileName, setConfigFileName] = useState("");
  const [dataOfCurrentConfig, setDataOfCurrentConfig] = useState([] as ConfigEntry[]);
  const [loggedOut, setLoggedOut] = useState(false);
  const [filteredData, setFilteredData] = useState([] as ConfigEntry[]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    const initialConfigs = props.loadedConfigs[0];
    const dataOfCurrentConfgMapped = getDataOfCurrentConfigMapped(initialConfigs.configs);
    setTypeHidden(false);
    setConfigFileName(initialConfigs.fileName);
    setDataOfCurrentConfig(dataOfCurrentConfgMapped);
    setFilteredData(dataOfCurrentConfgMapped);
    setFilterText("");
  }, [props.loadedConfigs]);

  const filterConfigs = (filterValue: string) => {
    setFilteredData(dataOfCurrentConfig.filter((d) => d.config.contains(filterValue)));
    setFilterText(filterValue);
  };

  const addEntry = () => {
    const entryToInsert = {
      config: filterText,
      type: Constants.CONFIG_TYPES.STRING,
      key: uuid(),
      value: "",
    };
    const newData = [...dataOfCurrentConfig, entryToInsert];
    setDataOfCurrentConfig(newData);
    setFilterText("");
    setFilteredData(newData);
    const index = getIndexOfCurrentConfigFile(props, configFileName);
    props.loadedConfigs[index].configs = newData;
  };

  const isNotEqualString = (keyName: string): ((compKey: ConfigEntry) => boolean) => {
    return (compKey) => keyName === compKey.key;
  };

  const removeEntry = (key: string) => {
    const isNotKey = isNotEqualString(key);
    const data = dataOfCurrentConfig.filter(isNotKey);

    setDataOfCurrentConfig(data);
    setFilteredData(data);
    const index = getIndexOfCurrentConfigFile(props, configFileName);
    props.loadedConfigs[index].configs = data;
  };

  const save = () => {
    const blob = new Blob([JSON.stringify(props.loadedConfigs)], {
      type: "application/json",
    });
    FileSaver.saveAs(blob, "config.json");
  };

  const logout = () => {
    setLoggedOut(!loggedOut);
  };

  const setConfigFileChanged = (value: string): void => {
    setConfigFileName(value);
    const configs = props.loadedConfigs.find((c) => c.fileName === value)!.configs;
    configs.forEach((entry) => Object.assign(entry, { key: uuid() }));

    setDataOfCurrentConfig(configs);
    setFilterText("");
    setFilteredData(configs);
  };

  const isNotPleaseFillValue = isNotEqualString(Constants.PLEASE_FILL_VALUE);

  const filesWithPleaseFillValue = props.loadedConfigs.filter((c) => !c.configs.every(isNotPleaseFillValue)).map((e) => e.fileName);

  return (
    <div className="App">
      <ApplicationBar loggedOut={loggedOut} logout={logout} />
      <ActionBar
        loggedOut={loggedOut}
        addEntry={addEntry}
        save={save}
        typeHidden={typeHidden}
        setTypeHidden={setTypeHidden}
        setLoadedConfigs={props.setLoadedConfigs}
        setReloadSettings={props.setReloadSettings}
      />
      <ConfigBar configFiles={props.loadedConfigs.map((c) => c.fileName)} configFileChanged={setConfigFileChanged} />
      {loggedOut && <LogoutPage></LogoutPage>}
      <header className="App-header" hidden={loggedOut}>
        <ConfigFileSelector
          configFiles={props.loadedConfigs.map((c) => c.fileName)}
          configFileName={configFileName}
          configFileChanged={setConfigFileChanged}
          filesWithPleaseFillValue={filesWithPleaseFillValue}
        ></ConfigFileSelector>
        <SearchBar filterConfigs={filterConfigs} filterText={filterText} addEntry={addEntry} />
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
function getIndexOfCurrentConfigFile(props: ConfiguratorProps, configFileName: string) {
  const configToChange = props.loadedConfigs.filter((c) => c.fileName === configFileName)[0] || null;
  const index = props.loadedConfigs.indexOf(configToChange);
  return index;
}
