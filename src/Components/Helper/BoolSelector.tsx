import React from "react";

type BoolSelectorProps = {
  value: string;
  setValue: (value: string) => void;
};

export default function BoolSelector(props: BoolSelectorProps) {
  return (
    <select
      defaultValue=" -- select an option -- "
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
    >
      <option> -- select an option -- </option>
      <option>true</option>
      <option>false</option>
    </select>
  );
}
