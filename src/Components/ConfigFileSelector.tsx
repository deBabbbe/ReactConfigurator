import React from 'react';

type ConfigFileSelectorProps = {
    configFiles: string[];
    configFileName: string;
    configFileChanged: (event: { target: { value: string } }) => void;
}

export default function ConfigFileSelector(props: ConfigFileSelectorProps) {
    const options = props.configFiles.map(file => <option>{file}</option>)
    return (<select id="configFile" onChange={props.configFileChanged} value={props.configFileName}>
        {options}
    </select>);
}