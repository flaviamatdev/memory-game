import { UploadFile } from "./upload-file.model";

export class CardImage extends UploadFile {
    constructor(
        public src: string,
        public filename?: string
    ) {
        super(src, filename);
    }
}
