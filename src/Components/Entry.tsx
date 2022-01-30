import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import {
  ConfigTypeSelector,
  getContentDependingOnType,
} from "./Helper/EntryHelper";
import { ConfigEntry } from "../DataTypes/ConfigEntries";

type EntryProps = {
  setType: (type: string) => void;
  setValue: (value: string) => void;
  setKey: (key: string) => void;
  removeEntry: (key: string) => void;
  entry: ConfigEntry;
  typeHidden: boolean;
};

export default function Entry(props: EntryProps) {
  const [selectTypeOpen, setSelectTypeOpen] = useState(false);
  const { tag, icon } = getContentDependingOnType(
    props.entry,
    props.typeHidden,
    props.setValue
  );
  const toggleSelectTypeOpen = () => setSelectTypeOpen(!selectTypeOpen);
  const configTypeChanged = (value: string) => {
    toggleSelectTypeOpen();
    props.setType(value);
  };
  const removeEntry = () => {
    props.removeEntry(props.entry.key);
  };

  return (
    <tbody>
      <tr>
        <td>
          <input
            defaultValue={props.entry.config}
            onChange={(e) => props.setKey(e.target.value)}
          />
        </td>
        {!props.typeHidden ? (
          <>
            {selectTypeOpen ? (
              <ConfigTypeSelector
                type={props.entry.type}
                onSelect={configTypeChanged}
              />
            ) : (
              <td title={props.entry.type} onClick={toggleSelectTypeOpen}>
                {icon}
              </td>
            )}
          </>
        ) : (
          <></>
        )}
        <td className="entryTag">{tag}</td>
        <td>
          <span id="removeButton" onClick={removeEntry}>
            <FontAwesomeIcon icon={faBan} title="Löschen" />
          </span>
        </td>
      </tr>
    </tbody>
  );
}
