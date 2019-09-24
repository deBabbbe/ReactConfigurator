import React from "react";
import configFiles from '../DataTypes/ConfigFiles'
import { ReactComponent as WebConfigIcon } from '../icons/Web.svg'
import { ReactComponent as EmailIcon } from '../icons/Email.svg'
import { ReactComponent as SmoopeIcon } from '../icons/Smoope.svg'
import { ReactComponent as SkypeIcon } from '../icons/Skype.svg'

function getIconForName(name, configFileChanged) {
    let icon;
    if (name === "web.config") {
        icon = <WebConfigIcon className="configBarIcon" title={name} width="40px" height="40px"
            onClick={() => configFileChanged({
                target: {
                    value: name
                }
            })} />
    }
    if (name === "EmailImporter.exe.config") {
        icon = <EmailIcon className="configBarIcon" title={name} width="40px" height="40px"
            onClick={() => configFileChanged({
                target: {
                    value: name
                }
            })} />
    }
    if (name === "SmoopeImporter.exe.config") {
        icon = <SmoopeIcon className="configBarIcon" title={name} width="40px" height="40px"
            onClick={() => configFileChanged({
                target: {
                    value: name
                }
            })} />
    }
    if (name === "SkypeImporter.exe.config") {
        icon = <SkypeIcon className="configBarIcon" title={name} width="40px" height="40px"
            onClick={() => configFileChanged({
                target: {
                    value: name
                }
            })} />
    }
    return icon;
}

export function ConfigBar(props) {
    return <div className="ConfigBar">
        <div>
            {configFiles.map(config => {
                return getIconForName(config, props.configFileChanged)
            })}
        </div>
    </div>;
}
