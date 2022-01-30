import React from "react";
import BoolSelector from "./BoolSelector";
import {
  faFileWord,
  faQuestion,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Constants } from "../../DataTypes/Constants";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ConfigEntry } from "../../DataTypes/ConfigEntries";

function getDate() {
  return moment().format("YYYY-MM-DDTHH:mm:ss");
}

type EntryContentResult = {
  tag: JSX.Element;
  icon: JSX.Element;
};

interface ConfigTypeSelectorProps {
  onSelect: (value: string) => void;
  type: string;
}

export function ConfigTypeSelector(props: ConfigTypeSelectorProps) {
  const types = [
    "",
    Constants.CONFIG_TYPES.BOOL,
    Constants.CONFIG_TYPES.DATETIME,
    Constants.CONFIG_TYPES.STRING,
  ];
  const options = types.map((file) => <option>{file}</option>);
  return (
    <select
      id="configType"
      onChange={(event) => props.onSelect(event.target.value)}
    >
      {options}
    </select>
  );
}

export function getContentDependingOnType(
  entry: ConfigEntry,
  typeHidden: boolean,
  setValue: (value: string) => void
): EntryContentResult {
  const { type, value } = entry;
  let tag;
  let icon;
  if (type === Constants.CONFIG_TYPES.BOOL && !typeHidden) {
    tag = <BoolSelector value={value} setValue={setValue}></BoolSelector>;
    icon = <FontAwesomeIcon icon={faQuestion} />;
  } else if (type === Constants.CONFIG_TYPES.DATETIME && !typeHidden) {
    tag = (
      <input
        type="datetime-local"
        defaultValue={getDate()}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      ></input>
    );
    icon = <FontAwesomeIcon icon={faClock} />;
  } else {
    tag = (
      <input
        placeholder="Please fill value"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      ></input>
    );
    icon = <FontAwesomeIcon icon={faFileWord} />;
  }
  return { tag, icon };
}
