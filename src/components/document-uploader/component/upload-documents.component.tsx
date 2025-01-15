import { useEffect, useState } from "react";
import {
  FileIcon,
  FiletextIcon,
  PhotoIcon,
  UploadIcon,
} from "../../../assets/icons";
import { Title, Card } from "../../shared";
import { useFileUploaderContext } from "../../../providers/file-uploader-context";

export const UploadDocuments = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const { onUploadFile } = useFileUploaderContext();

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFiles = event.target.files;
    if (selectedFiles?.length) {
      setFiles(selectedFiles);
    }
  }

  useEffect(() => {
    if (!files) {
      return;
    }

    onUploadFile(files);
  }, [files, onUploadFile]);

  return (
    <Card>
      <Title className="mb-4">Upload Documents</Title>

      <div
        role="presentation"
        tabIndex={0}
        className="relative rounded-xl border-2 border-dashed border-slate-300 p-8 text-center transition-colors duration-200 hover:border-primary-400 hover:bg-primary-50"
      >
        <input
          type="file"
          tabIndex={-1}
          multiple
          accept="image/*,.png,.jpg,application/pdf,.pdf"
          onChange={handleFileChange}
          className="absolute inset-0 cursor-pointer border-inherit bg-emerald-600 p-0 opacity-0"
        />

        <div className="relative">
          <div className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2">
            <span className="rotate-12 transform text-primary-500 *:size-8">
              <FiletextIcon />
            </span>
            <span className="-rotate-12 transform text-primary-500 *:size-8">
              <PhotoIcon />
            </span>
          </div>
          <span className="mx-auto mt-6 block w-fit text-slate-400 *:size-12">
            <UploadIcon />
          </span>
        </div>

        <div>
          <p className="mt-4 text-lg font-medium text-slate-900">
            Drag & drop files here
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Support for PDF, PNG, JPG (up to 10MB)
          </p>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          <span className="text-slate-400 *:size-5">
            <FileIcon />
          </span>
          <span className="text-sm text-slate-500">Or click to browse</span>
        </div>
      </div>
    </Card>
  );
};
