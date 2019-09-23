import React from "react";

export default function ConfigFileSelector({ configFileChanged }) {
    return (<select onChange={configFileChanged}>
        <option>web.config</option>
        <option>EmailImporter.exe.config</option>
        <option>SmoopeImporter.exe.config</option>
        <option>SkypeImporter.exe.config</option>
    </select>);
}