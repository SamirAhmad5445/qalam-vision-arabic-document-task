import { FileUploaderProvider } from "./file-uploader-context";

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <FileUploaderProvider>{children}</FileUploaderProvider>;
