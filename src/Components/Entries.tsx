import React from "react";
import Entry from "./Entry";
import { ConfigEntry } from "../DataTypes/ConfigEntries";

interface EntriesProps {
  filteredData: ConfigEntry[];
  setDataOfCurrentConfig: (data: ConfigEntry[]) => void;
  removeEntry: (key: string) => void;
  typeHidden: boolean;
}

export default function Entries(props: EntriesProps) {
  const setType = (entry: ConfigEntry): ((type: string) => void) => {
    return (type) => {
      entry.type = type;
      const data = props.filteredData.map((data) => {
        if (data === entry) {
          data.type = type;
        }
        return data;
      });
      props.setDataOfCurrentConfig(data);
    };
  };

  const setValue = (entry: ConfigEntry): ((value: string) => void) => {
    return (value) => {
      const data = props.filteredData.map((data) => {
        if (data === entry) {
          data.value = value;
        }
        return data;
      });
      props.setDataOfCurrentConfig(data);
    };
  };

  const setConfig = (entry: ConfigEntry): ((configText: string) => void) => {
    return (configText) => {
      entry.config = configText;
      const data = props.filteredData.map((data) => {
        if (data === entry) {
          data.config = configText;
        }
        return data;
      });
      props.setDataOfCurrentConfig(data);
    };
  };

  return (
    <>
      {props.filteredData.map((entry) => {
        return (
          <Entry
            key={entry.key}
            typeHidden={props.typeHidden}
            entry={entry}
            setType={setType(entry)}
            setValue={setValue(entry)}
            setKey={setConfig(entry)}
            removeEntry={props.removeEntry}
          ></Entry>
        );
      })}
    </>
  );
}
