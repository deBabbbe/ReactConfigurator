import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Select, { components } from "react-select";

interface ConfigFileSelectorProps {
  configFiles: string[];
  configFileName: string;
  configFileChanged: (value: string) => void;
  filesWithPleaseFillValue: string[];
}

export default function ConfigFileSelector(props: ConfigFileSelectorProps) {
  const { Option } = components;
  const IconOption = (propss: any) => (
    <Option {...propss}>
      {!!props.filesWithPleaseFillValue.find((f) => f === propss.data.label) ? (
        <FontAwesomeIcon id="configFileEntry" icon={faExclamationTriangle} size="lg" />
      ) : (
        <></>
      )}
      {propss.data.label}
    </Option>
  );

  const options = props.configFiles.map((file) => {
    return { value: file, label: file };
  });

  return (
    <Select
      id="configFile"
      value={options.find((o) => o.value === props.configFileName)}
      onChange={(ch) => props.configFileChanged(ch?.value ? ch.value : "")}
      options={options}
      components={{ Option: IconOption }}
    />
  );
}
