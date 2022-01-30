import React from "react";
import Entry from "./Entry";
import { ConfigEntry } from "../DataTypes/ConfigEntries";

type EntriesProps = {
  filteredData: ConfigEntry[];
  setFilteredData: (data: ConfigEntry[]) => void;
  removeEntry: (key: string) => void;
  typeHidden: boolean;
};

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
      props.setFilteredData(data);
    };
  };

  const setValue = (entry: ConfigEntry): ((type: string) => void) => {
    return (value) => {
      entry.value = value;
      const data = props.filteredData.map((data) => {
        if (data === entry) {
          data.value = value;
        }
        return data;
      });
      props.setFilteredData(data);
    };
  };

  const setKey = (entry: ConfigEntry): ((type: string) => void) => {
    return (value) => {
      entry.value = value;
      const data = props.filteredData.map((data) => {
        if (data === entry) {
          data.value = value;
        }
        return data;
      });
      props.setFilteredData(data);
    };
  };

  return (
    <>
      {props.filteredData.map((entry) => {
        return (
          <Entry
            typeHidden={props.typeHidden}
            entry={entry}
            setType={setType(entry)}
            setValue={setValue(entry)}
            setKey={setKey(entry)}
            removeEntry={props.removeEntry}
          ></Entry>
        );
      })}
    </>
  );
}
