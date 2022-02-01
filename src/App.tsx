import { FileConfigEntry } from "./DataTypes/ConfigEntries";
import Configurator from "./Components/Configurator";
import React, { useEffect, useState } from "react";
import "./App.scss";

export default function App() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [loadedConfigs, setLoadedConfigs] = useState([] as FileConfigEntry[]);
  useEffect(() => {
    const configs = require("./loadedConfigs.json") as FileConfigEntry[];
    setLoadedConfigs(configs);
    if (configs) setIsInitialized(true);
  }, []);

  if (isInitialized) {
    return (
      <Configurator
        setLoadedConfigs={(configs) => {
          setLoadedConfigs(configs);
        }}
        loadedConfigs={loadedConfigs}
      ></Configurator>
    );
  }
  return <></>;
}
