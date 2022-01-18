export interface configEntry {
    config: string,
    type: string,
    key: string
    value: string
}

export interface fileConfigEntry {
    fileName: string,
    configs: configEntry[],
}