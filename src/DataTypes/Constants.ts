export class Constants {
    public static ADD_CONFIG_ENTRY = "AddConfigEntry";

    public static CONFIG_FILES: string[] = [
        "web.config",
        "EmailImporter.exe.config",
        "SmoopeImporter.exe.config",
        "SkypeImporter.exe.config"
    ]

    public static CONFIG_TYPES = {
        STRING: "string",
        BOOL: "bool",
        DATETIME: "DateTime"
    };
}