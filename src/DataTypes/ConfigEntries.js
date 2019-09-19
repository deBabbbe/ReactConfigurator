import configTypes from './ConfigTypes'

const configEntries = [
    { config: "Common.Imap.Username", type: configTypes.STRING },
    { config: "Common.Imap.Password", type: configTypes.STRING },
    { config: "Common.Imap.UseSsl", type: configTypes.BOOL },
    { config: "Common.Send.Timeout", type: configTypes.DATETIME },
    { config: "Common.Imap.Glubsch", type: configTypes.STRING },
]

export default configEntries