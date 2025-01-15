import { ExtractedData } from "./extracted-data.component";
import { ProcessingStatus } from "./processing-status.component";
import { UploadDocuments } from "./upload-documents.component";

export const DocumentUploader = () => (
  <main className="container grid gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:px-8">
    <ExtractedData />
    <section className="grid gap-6">
      <UploadDocuments />
      <ProcessingStatus />
    </section>
  </main>
);
