import { Constants } from "./Constants"

export interface configEntry {
    config: string,
    type: string,
    key: string
}

export interface fileConfigEntry {
    fileName: string,
    configs: configEntry[]
}

const configEntries: fileConfigEntry[] = [
    {
        fileName: "web.config",
        configs: [
            { key: "", config: "Common.Imap.Username", type: Constants.CONFIG_TYPES.STRING },
            { key: "", config: "Common.Imap.Password", type: Constants.CONFIG_TYPES.STRING },
            { key: "", config: "Common.Imap.UseSsl", type: Constants.CONFIG_TYPES.BOOL },
            { key: "", config: "Common.Send.Timeout", type: Constants.CONFIG_TYPES.DATETIME },
            { key: "", config: "Common.Imap.Glubsch", type: Constants.CONFIG_TYPES.STRING }
        ]
    },
    {
        fileName: "EmailImporter.exe.config",
        configs: [
            { key: "", config: "EmailImporter.Imap.Username", type: Constants.CONFIG_TYPES.STRING },
            { key: "", config: "EmailImporter.Imap.Password", type: Constants.CONFIG_TYPES.STRING },
            { key: "", config: "EmailImporter.Imap.UseSsl", type: Constants.CONFIG_TYPES.BOOL },
        ]
    },
    {
        fileName: "SmoopeImporter.exe.config",
        configs: [
            { key: "", config: "SmoopeImporter.Imap.Username", type: Constants.CONFIG_TYPES.STRING },
            { key: "", config: "SmoopeImporter.Imap.Password", type: Constants.CONFIG_TYPES.STRING },
            { key: "", config: "SmoopeImporter.Imap.UseSsl", type: Constants.CONFIG_TYPES.BOOL },
        ]
    },
    {
        fileName: "SkypeImporter.exe.config",
        configs: [
            { key: "", config: "SkypeImporter.Imap.Username", type: Constants.CONFIG_TYPES.STRING },
            { key: "", config: "SkypeImporter.Imap.Password", type: Constants.CONFIG_TYPES.STRING },
            { key: "", config: "SkypeImporter.Imap.UseSsl", type: Constants.CONFIG_TYPES.BOOL },
        ]
    }
]

export default configEntries