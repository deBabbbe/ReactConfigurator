import React from 'react';

type ConfigFileSelectorProps = {
    configFileChanged: any
}

export default function ConfigFileSelector(props: ConfigFileSelectorProps) {
    return (<select id="configFile" onChange={props.configFileChanged}>
        <option>web.config</option>
        <option>EmailImporter.exe.config</option>
        <option>SmoopeImporter.exe.config</option>
        <option>SkypeImporter.exe.config</option>
    </select>);
}