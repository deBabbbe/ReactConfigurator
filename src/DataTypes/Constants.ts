export enum ConfigFiles {
    "web.config",
    "EmailImporter.exe.config",
    "SmoopeImporter.exe.config",
    "SkypeImporter.exe.config"
}

export function ConfigFile(file: ConfigFiles): string {
    return ConfigFiles[file];
}

export class Constants {
    public static readonly VERSION: string = "trunk";

    public static readonly CONFIG_FILES: string[] = [
        ConfigFiles[ConfigFiles["web.config"]],
        ConfigFiles[ConfigFiles["EmailImporter.exe.config"]],
        ConfigFiles[ConfigFiles["SmoopeImporter.exe.config"]],
        ConfigFiles[ConfigFiles["SkypeImporter.exe.config"]]
    ]

    public static readonly CONFIG_TYPES = {
        STRING: "string",
        BOOL: "bool",
        DATETIME: "DateTime"
    };
}