import { useContext } from "react";
import {
  FileUploaderContext,
  FileUploaderContextType,
} from "../context/file-uploader.context";

export const useFileUploaderContext = (): FileUploaderContextType => {
  const context = useContext(FileUploaderContext);

  if (!context) {
    throw new Error(
      "useFileUploaderContext hook must be used within a FileUploaderProvider",
    );
  }

  return context;
};
