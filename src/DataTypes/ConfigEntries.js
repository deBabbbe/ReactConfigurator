import configTypes from './ConfigTypes'

const configEntries = [
    {
        fileName: "web.config",
        configs: [
            { config: "Common.Imap.Username", type: configTypes.STRING },
            { config: "Common.Imap.Password", type: configTypes.STRING },
            { config: "Common.Imap.UseSsl", type: configTypes.BOOL },
            { config: "Common.Send.Timeout", type: configTypes.DATETIME },
            { config: "Common.Imap.Glubsch", type: configTypes.STRING }
        ]
    },
    {
        fileName: "EmailImporter.exe.config",
        configs: [
            { config: "EmailImporter.Imap.Username", type: configTypes.STRING },
            { config: "EmailImporter.Imap.Password", type: configTypes.STRING },
            { config: "EmailImporter.Imap.UseSsl", type: configTypes.BOOL },
        ]
    },
    {
        fileName: "SmoopeImporter.exe.config",
        configs: [
            { config: "SmoopeImporter.Imap.Username", type: configTypes.STRING },
            { config: "SmoopeImporter.Imap.Password", type: configTypes.STRING },
            { config: "SmoopeImporter.Imap.UseSsl", type: configTypes.BOOL },
        ]
    },
    {
        fileName: "SkypeImporter.exe.config",
        configs: [
            { config: "SkypeImporter.Imap.Username", type: configTypes.STRING },
            { config: "SkypeImporter.Imap.Password", type: configTypes.STRING },
            { config: "SkypeImporter.Imap.UseSsl", type: configTypes.BOOL },
        ]
    }
]

export default configEntries