import React from 'react'
import configFiles from '../DataTypes/ConfigFiles'
import { ReactComponent as WebConfigIcon } from '../icons/Web.svg'
import { ReactComponent as EmailIcon } from '../icons/Email.svg'
import { ReactComponent as SmoopeIcon } from '../icons/Smoope.svg'
import { ReactComponent as SkypeIcon } from '../icons/Skype.svg'

function getIconForName(name: string, configFileChanged: any) {
    let icon;
    if (name === "web.config") {
        icon = <span title={name}><WebConfigIcon className="configBarIcon" width="40px" height="40px"
            onClick={() => configFileChanged({
                target: {
                    value: name
                }
            })} /></span>
    }
    if (name === "EmailImporter.exe.config") {
        icon = <span title={name}><EmailIcon className="configBarIcon" width="40px" height="40px"
            onClick={() => configFileChanged({
                target: {
                    value: name
                }
            })} /></span>
    }
    if (name === "SmoopeImporter.exe.config") {
        icon = <span title={name}> <SmoopeIcon className="configBarIcon" width="40px" height="40px"
            onClick={() => configFileChanged({
                target: {
                    value: name
                }
            })} /></span>
    }
    if (name === "SkypeImporter.exe.config") {
        icon = <span title={name}><SkypeIcon className="configBarIcon" width="40px" height="40px"
            onClick={() => configFileChanged({
                target: {
                    value: name
                }
            })} /></span>
    }
    return icon;
}

type ConfigBarProps = {
    configFileChanged: any;
}

export function ConfigBar(props: ConfigBarProps) {
    return <div className="ConfigBar">
        <div>
            {configFiles.map(config => {
                return getIconForName(config, props.configFileChanged)
            })}
        </div>
        <div className="ConfigBarSplitter"></div>
        <div className="ConfigBarFiller"></div>
    </div>;
}
