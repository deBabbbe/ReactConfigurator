export class Constants {
    public static readonly ADD_CONFIG_ENTRY: string = "AddConfigEntry";
    public static readonly VERSION: string = "trunk";

    public static readonly CONFIG_FILES: string[] = [
        "web.config",
        "EmailImporter.exe.config",
        "SmoopeImporter.exe.config",
        "SkypeImporter.exe.config"
    ]

    public static readonly CONFIG_TYPES = {
        STRING: "string",
        BOOL: "bool",
        DATETIME: "DateTime"
    };
}