import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { FileConfigEntry } from "../DataTypes/ConfigEntries";

export interface UploadConfigFileProps {
  setLoadedConfigs: (entries: FileConfigEntry[]) => void;
}

export default function UploadConfigFile(props: UploadConfigFileProps) {
  const inputFile = React.useRef(null) as any;

  const openpDialog = () => {
    inputFile?.current?.click();
  };
  return (
    <>
      <input
        type="file"
        id="file"
        ref={inputFile}
        style={{ display: "none" }}
        accept=".json"
        multiple={false}
        onChange={(e) =>
          e
            .target!.files![0].text()
            .then((content) => props.setLoadedConfigs(JSON.parse(content)))
        }
      />
      <span id="uploadButton">
        <FontAwesomeIcon
          icon={faFolderOpen}
          onClick={openpDialog}
          size="lg"
          title="Öffnen"
        />
      </span>
    </>
  );
}
