import React from "react";
import Select from "react-select";

type ConfigFileSelectorProps = {
    configFiles: string[];
    configFileName: string;
    configFileChanged: (value: string) => void;
};

export default function ConfigFileSelector(props: ConfigFileSelectorProps) {
    const options = props.configFiles.map((file) => {
        return { value: file, label: file };
    });

    const customStyles = {
        option: (provided: any, state: { isSelected: any; }) => ({
            ...provided,
            borderBottom: '2px dotted green',
            color: state.isSelected ? 'yellow' : 'black',
            backgroundColor: state.isSelected ? 'green' : 'grey',

        })
    }
    return (
        <Select
            id="configFile"
            value={options.find((o) => o.value === props.configFileName)}
            onChange={(ch) => props.configFileChanged(ch?.value ? ch.value : "")}
            options={options}
        />
    );
}
