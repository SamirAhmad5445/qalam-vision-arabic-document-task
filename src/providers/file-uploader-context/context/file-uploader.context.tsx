import { createContext } from "react";
import { OrcResponseDto } from "../../../types/dtos";

export type FileUploaderContextType = {
  onUploadFile: (
    docs: FileList,
    docType?: string,
    language?: string,
  ) => Promise<OrcResponseDto | undefined>;
};

export const FileUploaderContext = createContext<
  FileUploaderContextType | undefined
>(undefined);
