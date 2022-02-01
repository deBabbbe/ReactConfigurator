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
import FileSaver from "file-saver";
import { useEffect } from "react";
type ConfiguratorProps = {
  loadedConfigs: FileConfigEntry[];
  setLoadedConfigs: (entries: FileConfigEntry[]) => void;
};

export default function Configurator(props: ConfiguratorProps) {
  const initialConfigs = props.loadedConfigs[0];
  const dataOfCurrentConfgMapped = initialConfigs.configs.map((entry) =>
    Object.assign(entry, { key: uuid() })
  );
  const [typeHidden, setTypeHidden] = useState(false);
  const [configFileName, setConfigFileName] = useState(initialConfigs.fileName);
  const [dataOfCurrentConfig, setDataOfCurrentConfig] = useState(
    dataOfCurrentConfgMapped
  );
  const [loggedOut, setLoggedOut] = useState(false);
  const [filteredData, setFilteredData] = useState(dataOfCurrentConfig);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    setTypeHidden(false);
    setConfigFileName(initialConfigs.fileName);
    setDataOfCurrentConfig(dataOfCurrentConfgMapped);
    setFilteredData(dataOfCurrentConfgMapped);
    setFilterText("");
  }, [initialConfigs]);

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
    const newData = [...dataOfCurrentConfig, entryToInsert];
    setDataOfCurrentConfig(newData);
    setFilterText("");
    setFilteredData(newData);
    const index = getIndexOfCurrentConfigFile(props, configFileName);
    props.loadedConfigs[index].configs = newData;
  };

  const removeEntry = (key: string) => {
    const data = dataOfCurrentConfig.filter((d) => {
      return d.key !== key;
    });

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
    const configs = props.loadedConfigs.find(
      (c) => c.fileName === value
    )!.configs;
    configs.forEach((entry) => Object.assign(entry, { key: uuid() }));

    setDataOfCurrentConfig(configs);
    setFilterText("");
    setFilteredData(configs);
  };

  const filesWithPleaseFillValue = props.loadedConfigs
    .filter(
      (c) => !c.configs.every((ce) => ce.value !== Constants.PLEASE_FILL_VALUE)
    )
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
        setLoadedConfigs={props.setLoadedConfigs}
      />
      <ConfigBar
        configFiles={props.loadedConfigs.map((c) => c.fileName)}
        configFileChanged={setConfigFileChanged}
      />
      {loggedOut && <LogoutPage></LogoutPage>}
      <header className="App-header" hidden={loggedOut}>
        <ConfigFileSelector
          configFiles={props.loadedConfigs.map((c) => c.fileName)}
          configFileName={configFileName}
          configFileChanged={setConfigFileChanged}
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
function getIndexOfCurrentConfigFile(
  props: ConfiguratorProps,
  configFileName: string
) {
  const configToChange =
    props.loadedConfigs.filter((c) => c.fileName === configFileName)[0] || null;
  const index = props.loadedConfigs.indexOf(configToChange);
  return index;
}
