import { OrcResponseDto } from "../../../types/dtos";
import { FileUploaderContext } from "../context/file-uploader.context";

export const FileUploaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  async function onUploadFile(
    docs: FileList,
    docType: string = "orc",
    language: string = "auto",
  ): Promise<OrcResponseDto | undefined> {
    try {
      const apiUrl: string = import.meta.env.VITE_API_URL;

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          docs,
          docType,
          language,
        }),
      });

      if (!res.ok) {
        throw new Error("There was an error while processing your request.");
      }

      return (await res.json()) as OrcResponseDto;
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <FileUploaderContext.Provider value={{ onUploadFile }}>
      {children}
    </FileUploaderContext.Provider>
  );
};
