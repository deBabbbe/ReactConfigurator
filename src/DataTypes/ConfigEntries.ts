import configTypes from './ConfigTypes'

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
            { key: "", config: "Common.Imap.Username", type: configTypes.STRING },
            { key: "", config: "Common.Imap.Password", type: configTypes.STRING },
            { key: "", config: "Common.Imap.UseSsl", type: configTypes.BOOL },
            { key: "", config: "Common.Send.Timeout", type: configTypes.DATETIME },
            { key: "", config: "Common.Imap.Glubsch", type: configTypes.STRING }
        ]
    },
    {
        fileName: "EmailImporter.exe.config",
        configs: [
            { key: "", config: "EmailImporter.Imap.Username", type: configTypes.STRING },
            { key: "", config: "EmailImporter.Imap.Password", type: configTypes.STRING },
            { key: "", config: "EmailImporter.Imap.UseSsl", type: configTypes.BOOL },
        ]
    },
    {
        fileName: "SmoopeImporter.exe.config",
        configs: [
            { key: "", config: "SmoopeImporter.Imap.Username", type: configTypes.STRING },
            { key: "", config: "SmoopeImporter.Imap.Password", type: configTypes.STRING },
            { key: "", config: "SmoopeImporter.Imap.UseSsl", type: configTypes.BOOL },
        ]
    },
    {
        fileName: "SkypeImporter.exe.config",
        configs: [
            { key: "", config: "SkypeImporter.Imap.Username", type: configTypes.STRING },
            { key: "", config: "SkypeImporter.Imap.Password", type: configTypes.STRING },
            { key: "", config: "SkypeImporter.Imap.UseSsl", type: configTypes.BOOL },
        ]
    }
]

export default configEntries