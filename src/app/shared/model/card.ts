import { FileUpload } from "./file-upload.model";

export class Card {
    id: string;
    icon?: any;

    constructor(
        public code: string,
        public img?: FileUpload
    ) {}
}
