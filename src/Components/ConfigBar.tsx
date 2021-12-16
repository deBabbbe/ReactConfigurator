import React from 'react'
import { ReactComponent as WebConfigIcon } from '../icons/Web.svg'
import { ReactComponent as EmailIcon } from '../icons/Email.svg'
import { ReactComponent as SmoopeIcon } from '../icons/Smoope.svg'
import { ReactComponent as SkypeIcon } from '../icons/Skype.svg'
import { ReactComponent as SmartMessengerIcon } from '../icons/SmartMessenger.svg'
import { Constants, ConfigFiles, ConfigFile } from '../DataTypes/Constants';
import { v4 as uuid } from 'uuid';

const getIcon = (name: string): any => {
    switch (name) {
        case ConfigFile(ConfigFiles["web.config"]):
            return WebConfigIcon;
        case ConfigFile(ConfigFiles["EmailImporter.exe.config"]):
            return EmailIcon;
        case ConfigFile(ConfigFiles["SmoopeImporter.exe.config"]):
            return SmoopeIcon;
        case ConfigFile(ConfigFiles["SkypeImporter.exe.config"]):
            return SkypeIcon;
        case ConfigFile(ConfigFiles["SmartMessengerImporter.exe.config"]):
            return SmartMessengerIcon;
    }
}

function getIconForName(name: string, configFileChanged: (event: { target: { value: string } }) => void) {
    const Icon = getIcon(name);
    return <span title={name} key={uuid()}><Icon className="configBarIcon" width="40px" height="40px"
        onClick={() => configFileChanged({
            target: {
                value: name
            }
        })} /></span>
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
