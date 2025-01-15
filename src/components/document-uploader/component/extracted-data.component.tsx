import { DownloadIcon, FiletextIcon } from "../../../assets/icons";
import { Button, Card, Title } from "../../shared";

export const ExtractedData = () => (
  <Card>
    <header className="mb-6 flex items-center justify-between">
      <Button icon={DownloadIcon}>Export Results</Button>
      <Title>ExtractedData</Title>
    </header>

    <div className="grid place-content-center gap-4 py-12 text-slate-500">
      <span className="mx-auto *:size-12">
        <FiletextIcon />
      </span>
      <p>Upload a document to see extracted data</p>
    </div>
  </Card>
);
