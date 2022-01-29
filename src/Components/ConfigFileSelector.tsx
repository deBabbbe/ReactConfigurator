import React from "react";
import Select from "react-select";

type ConfigFileSelectorProps = {
    configFiles: string[];
    configFileName: string;
    configFileChanged: (value: string) => void;
    filesWithPleaseFillValue: string[];
};

export default function ConfigFileSelector(props: ConfigFileSelectorProps) {
    const options = props.configFiles.map((file) => {
        let label = file;
        if (!!props.filesWithPleaseFillValue.find(f => f === file)) {
            label += "!"
        }
        return { value: file, label };
    });

    return (
        <Select
            id="configFile"
            value={options.find((o) => o.value === props.configFileName)}
            onChange={(ch) => props.configFileChanged(ch?.value ? ch.value : "")}
            options={options}
        />
    );
}
