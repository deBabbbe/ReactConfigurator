import React from "../../node_modules/react";

export default function ConfigFileSelector({ configFileChanged }) {
    return (<select id="configFile" onChange={configFileChanged}>
        <option>web.config</option>
        <option>EmailImporter.exe.config</option>
        <option>SmoopeImporter.exe.config</option>
        <option>SkypeImporter.exe.config</option>
    </select>);
}