export interface configEntry {
    config: string,
    type: string,
    key: string
}

export interface fileConfigEntry {
    fileName: string,
    configs: configEntry[]
}