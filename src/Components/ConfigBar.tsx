import React from 'react'
import { ReactComponent as WebConfigIcon } from '../icons/Web.svg'
import { ReactComponent as EmailIcon } from '../icons/Email.svg'
import { ReactComponent as SmoopeIcon } from '../icons/Smoope.svg'
import { ReactComponent as SkypeIcon } from '../icons/Skype.svg'
import { Constants } from '../DataTypes/Constants'

function getIconForName(name: string, configFileChanged: (event: { target: { value: string } }) => void) {
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
    configFileChanged: (event: { target: { value: string } }) => void;
}

export function ConfigBar(props: ConfigBarProps) {
    return <div className="ConfigBar">
        <div>
            {Constants.CONFIG_FILES.map(config => {
                return getIconForName(config, props.configFileChanged)
            })}
        </div>
        <div className="ConfigBarSplitter"></div>
        <div className="ConfigBarFiller"></div>
    </div>;
}
